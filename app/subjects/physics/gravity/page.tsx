'use client';

import { useState, useEffect, useRef } from 'react';

export default function GravitySimulator() {
    const canvasRef = useRef(null);
    const [planetMasses, setPlanetMasses] = useState({
        0: 1, // Mercury
        1: 1, // Venus
        2: 1  // Earth
    });
    const [activePlanets, setActivePlanets] = useState([0, 1, 2]); // Track which planets are still active
    const [planetStats, setPlanetStats] = useState([]); // Track current orbital data
    const requestRef = useRef();

    const planetsData = [
        {
            name: 'Mercury',
            color: '#8C7853',
            baseMass: 0.055,
            baseDistance: 90,
            baseSize: 5,
            baseSpeed: 0.047,
            angle: 0,
            id: 0
        },
        {
            name: 'Venus',
            color: '#FFC649',
            baseMass: 0.815,
            baseDistance: 140,
            baseSize: 11,
            baseSpeed: 0.035,
            angle: 2.1,
            id: 1
        },
        {
            name: 'Earth',
            color: '#4A90E2',
            baseMass: 1,
            baseDistance: 190,
            baseSize: 12,
            baseSpeed: 0.029,
            angle: 4.2,
            id: 2
        }
    ];

    const planetsRef = useRef(planetsData.map(p => ({...p})));

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = 900;
        canvas.height = 700;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const drawStars = () => {
            ctx.fillStyle = '#FFFFFF';
            for (let i = 0; i < 150; i++) {
                const x = (i * 67 + 123) % canvas.width;
                const y = (i * 89 + 456) % canvas.height;
                const size = Math.random() * 1.5;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        const drawSun = () => {
            const outerGlow = ctx.createRadialGradient(centerX, centerY, 20, centerX, centerY, 40);
            outerGlow.addColorStop(0, 'rgba(255, 200, 0, 0.3)');
            outerGlow.addColorStop(1, 'rgba(255, 100, 0, 0)');
            ctx.beginPath();
            ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
            ctx.fillStyle = outerGlow;
            ctx.fill();

            const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 25);
            gradient.addColorStop(0, '#FFF5E1');
            gradient.addColorStop(0.4, '#FFD700');
            gradient.addColorStop(0.7, '#FFA500');
            gradient.addColorStop(1, '#FF6347');
            
            ctx.beginPath();
            ctx.arc(centerX, centerY, 25, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
        };

        const drawOrbit = (distance) => {
            ctx.beginPath();
            ctx.arc(centerX, centerY, distance, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(100, 100, 100, 0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();
        };

        const adjustBrightness = (color, percent) => {
            const num = parseInt(color.replace('#', ''), 16);
            const amt = Math.round(2.55 * percent);
            const R = Math.min(255, Math.max(0, (num >> 16) + amt));
            const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amt));
            const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));
            return '#' + ((R << 16) | (G << 8) | B).toString(16).padStart(6, '0');
        };

        const drawPlanet = (planet, mass, distance) => {
            const size = planet.baseSize * Math.pow(mass, 0.33);
            const x = centerX + Math.cos(planet.angle) * distance;
            const y = centerY + Math.sin(planet.angle) * distance;

            const gradient = ctx.createRadialGradient(
                x - size * 0.3, 
                y - size * 0.3, 
                size * 0.1, 
                x, 
                y, 
                size
            );
            
            const lightColor = adjustBrightness(planet.color, 60);
            gradient.addColorStop(0, lightColor);
            gradient.addColorStop(0.7, planet.color);
            gradient.addColorStop(1, adjustBrightness(planet.color, -30));

            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(x - size * 0.2, y - size * 0.2, size * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.fill();
        };

        const animate = () => {
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            drawStars();
            drawSun();

            // Calculate positions and sizes for all active planets
            const activePlanetData = planetsRef.current
                .filter(p => activePlanets.includes(p.id))
                .map(planet => {
                    const massMultiplier = planetMasses[planet.id] || 1;
                    const mass = planet.baseMass * massMultiplier;
                    
                    // As mass increases, gravitational attraction increases
                    // Higher mass = closer orbit (inverse square root relationship)
                    // Distance decreases as mass increases
                    const massEffect = Math.pow(1 / mass, 0.2);
                    const distance = planet.baseDistance * massEffect;
                    
                    const size = planet.baseSize * Math.pow(mass, 0.33);
                    const x = centerX + Math.cos(planet.angle) * distance;
                    const y = centerY + Math.sin(planet.angle) * distance;
                    
                    return { ...planet, mass, distance, size, x, y };
                });

            // Check for collisions
            const planetsToRemove = new Set();
            for (let i = 0; i < activePlanetData.length; i++) {
                for (let j = i + 1; j < activePlanetData.length; j++) {
                    const p1 = activePlanetData[i];
                    const p2 = activePlanetData[j];
                    
                    const dist = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
                    
                    // If planets collide (their radii touch or overlap)
                    if (dist < p1.size + p2.size) {
                        // Remove the smaller planet
                        const smallerPlanetId = p1.mass < p2.mass ? p1.id : p2.id;
                        planetsToRemove.add(smallerPlanetId);
                    }
                }
            }

            // Update active planets if collision occurred
            if (planetsToRemove.size > 0) {
                const newActivePlanets = activePlanets.filter(id => !planetsToRemove.has(id));
                setActivePlanets(newActivePlanets);
            }

            // Draw all active planets and collect stats
            const currentStats = [];
            planetsRef.current.forEach(planet => {
                if (!activePlanets.includes(planet.id)) return;

                const massMultiplier = planetMasses[planet.id] || 1;
                const mass = planet.baseMass * massMultiplier;
                
                // Calculate new orbital distance based on mass
                const massEffect = Math.pow(1 / mass, 0.2);
                const distance = planet.baseDistance * massEffect;
                
                // Calculate orbital speed (relative to base speed)
                const speedMultiplier = Math.sqrt(planet.baseDistance / distance) * Math.sqrt(mass);
                
                // Store stats for display
                currentStats.push({
                    id: planet.id,
                    name: planet.name,
                    mass: mass,
                    distance: distance,
                    speed: speedMultiplier,
                    size: planet.baseSize * Math.pow(mass, 0.33),
                    massMultiplier: massMultiplier
                });
                
                drawOrbit(distance);
                drawPlanet(planet, mass, distance);

                // Orbital velocity: v = sqrt(GM/r)
                planet.angle += planet.baseSpeed * speedMultiplier;
            });
            
            // Update stats every frame
            setPlanetStats(currentStats);

            requestRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [planetMasses, activePlanets]);

    const handleReset = () => {
        setPlanetMasses({0: 1, 1: 1, 2: 1});
        setActivePlanets([0, 1, 2]);
        planetsRef.current = planetsData.map(p => ({...p}));
    };

    const handleMassChange = (planetId, value) => {
        setPlanetMasses(prev => ({
            ...prev,
            [planetId]: value
        }));
        // Reset all planets when any mass changes
        setActivePlanets([0, 1, 2]);
    };

    return (
        <div className="min-h-screen bg-black p-6">
            <h1 className="text-4xl font-bold text-white mb-6 text-center tracking-wide">
                🌌 Gravity Simulator
            </h1>
            
            <div className="flex gap-6 max-w-7xl mx-auto">
                {/* Left side - Canvas and Controls */}
                <div className="flex-1">
                    <canvas 
                        ref={canvasRef}
                        className="border-4 border-gray-800 rounded-xl shadow-2xl mb-6"
                        style={{boxShadow: '0 0 50px rgba(100, 100, 255, 0.3)'}}
                    />

                    {/* Individual Planet Controls */}
                    <div className="bg-gray-900 border-2 border-gray-700 p-6 rounded-xl shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-white">Planet Controls</h2>
                            <button
                                onClick={handleReset}
                                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
                            >
                                🔄 Reset All
                            </button>
                        </div>

                        {activePlanets.length < 3 && (
                            <div className="mb-4 p-3 bg-red-900 border border-red-600 rounded-lg text-center">
                                <p className="text-red-200 font-semibold">
                                    ⚠️ Planet Collision! {3 - activePlanets.length} planet(s) absorbed!
                                </p>
                            </div>
                        )}

                        <div className="space-y-6">
                            {planetsData.map((planet, idx) => {
                                const stats = planetStats.find(s => s.id === planet.id);
                                const isActive = activePlanets.includes(planet.id);
                                
                                return (
                                    <div 
                                        key={idx}
                                        className={`bg-gray-800 p-4 rounded-lg border-2 transition-all ${
                                            isActive ? 'border-gray-600 opacity-100' : 'border-gray-700 opacity-40'
                                        }`}
                                    >
                                        <div className="flex items-center gap-4 mb-3">
                                            <div 
                                                className="w-10 h-10 rounded-full shadow-lg flex-shrink-0" 
                                                style={{
                                                    backgroundColor: planet.color,
                                                    boxShadow: `0 0 15px ${planet.color}80`
                                                }}
                                            />
                                            <div className="flex-1">
                                                <p className="text-white font-bold text-lg">
                                                    {planet.name}
                                                    {!isActive && <span className="text-red-400 text-sm ml-2">ABSORBED</span>}
                                                </p>
                                                {isActive && stats && (
                                                    <div className="flex gap-4 text-xs mt-1">
                                                        <span className="text-blue-300">M: {stats.mass.toFixed(2)}</span>
                                                        <span className="text-green-300">D: {stats.distance.toFixed(1)}</span>
                                                        <span className="text-yellow-300">S: {stats.speed.toFixed(2)}x</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        
                                        {isActive && (
                                            <div>
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span className="text-gray-400">Mass Multiplier</span>
                                                    <span className="text-white font-mono">{(planetMasses[planet.id] || 1).toFixed(1)}x</span>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="0.1"
                                                    max="10"
                                                    step="0.1"
                                                    value={planetMasses[planet.id] || 1}
                                                    onChange={(e) => handleMassChange(planet.id, parseFloat(e.target.value))}
                                                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                                                    style={{accentColor: planet.color}}
                                                />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right side - Theory */}
                <div className="w-96">
                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-5 sticky top-6">
                        <h2 className="text-xl font-bold text-white mb-4">⚡ Physics Theory</h2>
                        
                        <div className="space-y-3 text-xs">
                            <div className="bg-gray-900 p-3 rounded">
                                <p className="text-blue-300 font-semibold mb-1">🪐 Mass Effect:</p>
                                <p className="text-gray-300">Increased mass strengthens gravitational pull. Heavier planets orbit closer to the Sun.</p>
                            </div>
                            
                            <div className="bg-gray-900 p-3 rounded">
                                <p className="text-green-300 font-semibold mb-1">🔄 Orbital Distance:</p>
                                <p className="text-gray-300">Distance ∝ 1/Mass^0.2. Higher mass = closer orbit.</p>
                            </div>
                            
                            <div className="bg-gray-900 p-3 rounded">
                                <p className="text-yellow-300 font-semibold mb-1">⚡ Orbital Speed:</p>
                                <p className="text-gray-300">v = √(GM/r). Closer orbits are faster. Speed ∝ √(Mass/Distance).</p>
                            </div>
                            
                            <div className="bg-gray-900 p-3 rounded">
                                <p className="text-purple-300 font-semibold mb-1">📏 Planet Size:</p>
                                <p className="text-gray-300">Size ∝ Mass^(1/3). Volume-based scaling like real planets.</p>
                            </div>
                            
                            <div className="bg-gray-900 p-3 rounded">
                                <p className="text-red-300 font-semibold mb-1">💥 Collisions:</p>
                                <p className="text-gray-300">At 6x+ mass, planets grow large enough to collide. Smaller planet gets absorbed!</p>
                            </div>
                        </div>
                        
                        <div className="mt-4 pt-3 border-t border-gray-700">
                            <p className="text-gray-400 text-xs">
                                <strong>M⊕</strong> = Earth masses<br/>
                                <strong>D</strong> = Distance (units)<br/>
                                <strong>S</strong> = Speed multiplier
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}