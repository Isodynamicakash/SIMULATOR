'use client';

import { useState, useEffect, useRef } from 'react';

/* ---------- TYPES (REQUIRED FOR BUILD) ---------- */

type Planet = {
  id: number;
  name: string;
  color: string;
  baseMass: number;
  baseDistance: number;
  baseSize: number;
  baseSpeed: number;
  angle: number;
};

type PlanetStat = {
  id: number;
  name: string;
  mass: number;
  distance: number;
  speed: number;
  size: number;
  massMultiplier: number;
};

/* ---------- COMPONENT ---------- */

export default function GravitySimulator() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number | null>(null);

  const [planetMasses, setPlanetMasses] = useState<Record<number, number>>({
    0: 1,
    1: 1,
    2: 1,
  });

  const [activePlanets, setActivePlanets] = useState<number[]>([0, 1, 2]);
  const [planetStats, setPlanetStats] = useState<PlanetStat[]>([]);

  const planetsData: Planet[] = [
    {
      id: 0,
      name: 'Mercury',
      color: '#8C7853',
      baseMass: 0.055,
      baseDistance: 90,
      baseSize: 5,
      baseSpeed: 0.047,
      angle: 0,
    },
    {
      id: 1,
      name: 'Venus',
      color: '#FFC649',
      baseMass: 0.815,
      baseDistance: 140,
      baseSize: 11,
      baseSpeed: 0.035,
      angle: 2.1,
    },
    {
      id: 2,
      name: 'Earth',
      color: '#4A90E2',
      baseMass: 1,
      baseDistance: 190,
      baseSize: 12,
      baseSpeed: 0.029,
      angle: 4.2,
    },
  ];

  const planetsRef = useRef<Planet[]>(planetsData.map(p => ({ ...p })));

  /* ---------- EFFECT ---------- */

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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
      const glow = ctx.createRadialGradient(centerX, centerY, 20, centerX, centerY, 40);
      glow.addColorStop(0, 'rgba(255,200,0,0.3)');
      glow.addColorStop(1, 'rgba(255,100,0,0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fill();

      const sun = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 25);
      sun.addColorStop(0, '#FFF5E1');
      sun.addColorStop(0.4, '#FFD700');
      sun.addColorStop(0.7, '#FFA500');
      sun.addColorStop(1, '#FF6347');
      ctx.fillStyle = sun;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 25, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawOrbit = (distance: number) => {
      ctx.beginPath();
      ctx.arc(centerX, centerY, distance, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(100,100,100,0.3)';
      ctx.stroke();
    };

    const drawPlanet = (planet: Planet, mass: number, distance: number) => {
      const size = planet.baseSize * Math.pow(mass, 0.33);
      const x = centerX + Math.cos(planet.angle) * distance;
      const y = centerY + Math.sin(planet.angle) * distance;

      ctx.fillStyle = planet.color;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawStars();
      drawSun();

      const stats: PlanetStat[] = [];

      planetsRef.current.forEach(planet => {
        if (!activePlanets.includes(planet.id)) return;

        const multiplier = planetMasses[planet.id] ?? 1;
        const mass = planet.baseMass * multiplier;
        const distance = planet.baseDistance * Math.pow(1 / mass, 0.2);
        const speed = Math.sqrt(planet.baseDistance / distance) * Math.sqrt(mass);

        drawOrbit(distance);
        drawPlanet(planet, mass, distance);

        planet.angle += planet.baseSpeed * speed;

        stats.push({
          id: planet.id,
          name: planet.name,
          mass,
          distance,
          speed,
          size: planet.baseSize * Math.pow(mass, 0.33),
          massMultiplier: multiplier,
        });
      });

      setPlanetStats(stats);
      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [planetMasses, activePlanets]);

  /* ---------- CONTROLS ---------- */

  const handleReset = () => {
    setPlanetMasses({ 0: 1, 1: 1, 2: 1 });
    setActivePlanets([0, 1, 2]);
    planetsRef.current = planetsData.map(p => ({ ...p }));
  };

  const handleMassChange = (id: number, value: number) => {
    setPlanetMasses(prev => ({ ...prev, [id]: value }));
    setActivePlanets([0, 1, 2]);
  };

  /* ---------- UI ---------- */

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <h1 className="text-4xl font-bold text-center mb-6">🌌 Gravity Simulator</h1>

      <canvas
        ref={canvasRef}
        className="mx-auto border-4 border-gray-700 rounded-xl shadow-2xl"
      />

      <div className="max-w-3xl mx-auto mt-6 space-y-4">
        {planetsData.map(p => (
          <div key={p.id} className="bg-gray-800 p-4 rounded-lg">
            <p className="font-semibold">{p.name}</p>
            <input
              type="range"
              min="0.1"
              max="10"
              step="0.1"
              value={planetMasses[p.id]}
              onChange={e => handleMassChange(p.id, parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        ))}

        <button
          onClick={handleReset}
          className="w-full py-2 bg-red-600 rounded-lg font-bold"
        >
          Reset Simulation
        </button>
      </div>
    </div>
  );
}
