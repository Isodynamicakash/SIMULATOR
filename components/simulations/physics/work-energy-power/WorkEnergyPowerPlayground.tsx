"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ============================================================
// TYPES
// ============================================================
type Scene = "ramp" | "spring" | "pendulum";
type PlayState = "playing" | "paused" | "idle";

interface SimState {
  t: number;
  scene: Scene;
  playState: PlayState;
  mass: number;   // kg
  angle: number;  // degrees (ramp)
  height: number; // meters
  springK: number; // N/m
  springX: number; // meters compression
  pendulumL: number; // meters
  showEnergy: boolean;
  showVectors: boolean;
  showTrail: boolean;
  demo: boolean;
}

// ============================================================
// PHYSICS HELPERS
// ============================================================
const g = 9.8;

function rampEnergies(state: SimState, phase: number) {
  const theta = (state.angle * Math.PI) / 180;
  const totalH = state.height;
  // object slides from top to bottom
  const progress = Math.min(1, Math.max(0, (Math.sin(phase * 0.8) + 1) / 2));
  const h = totalH * (1 - progress);
  const PE = state.mass * g * h;
  const KE = state.mass * g * totalH - PE;
  const totalE = state.mass * g * totalH;
  return { PE, KE, totalE, progress, h };
}

function springEnergies(state: SimState, phase: number) {
  const A = state.springX;
  const omega = Math.sqrt(state.springK / state.mass);
  const x = A * Math.cos(phase * omega * 0.3);
  const v = -A * omega * Math.sin(phase * omega * 0.3);
  const PE = 0.5 * state.springK * x * x;
  const KE = 0.5 * state.mass * v * v;
  const totalE = 0.5 * state.springK * A * A;
  return { PE, KE, totalE, x, v };
}

function pendulumEnergies(state: SimState, phase: number) {
  const L = state.pendulumL;
  const theta0 = 30 * (Math.PI / 180);
  const omega = Math.sqrt(g / L);
  const theta = theta0 * Math.cos(phase * omega * 0.3);
  const h = L * (1 - Math.cos(theta));
  const PE = state.mass * g * h;
  const totalE = state.mass * g * L * (1 - Math.cos(theta0));
  const KE = totalE - PE;
  return { PE, KE, totalE, theta, h };
}

// ============================================================
// CANVAS RENDERER
// ============================================================
function drawRamp(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  state: SimState,
  phase: number,
  trail: { x: number; y: number }[]
) {
  const { progress } = rampEnergies(state, phase);
  const theta = (state.angle * Math.PI) / 180;

  // Ramp geometry
  const baseX = W * 0.75;
  const baseY = H * 0.82;
  const rampW = W * 0.55;
  const rampH = Math.tan(theta) * rampW;
  const topX = baseX - rampW;
  const topY = baseY - rampH;

  // Ground
  ctx.fillStyle = "rgba(100,200,120,0.12)";
  ctx.fillRect(0, baseY, W, H - baseY);
  ctx.strokeStyle = "#4ade80";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, baseY);
  ctx.lineTo(W, baseY);
  ctx.stroke();

  // Ramp surface
  const grad = ctx.createLinearGradient(topX, topY, baseX, baseY);
  grad.addColorStop(0, "rgba(99,102,241,0.6)");
  grad.addColorStop(1, "rgba(139,92,246,0.2)");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(topX, topY);
  ctx.lineTo(baseX, baseY);
  ctx.lineTo(baseX, baseY + 4);
  ctx.lineTo(topX, topY + 4);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "#818cf8";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(topX, topY);
  ctx.lineTo(baseX, baseY);
  ctx.stroke();

  // Object on ramp
  const objX = topX + (baseX - topX) * progress;
  const objY = topY + (baseY - topY) * progress - 18;

  // Trail
  if (state.showTrail) {
    trail.forEach((pt, i) => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(251,191,36,${i / trail.length * 0.5})`;
      ctx.fill();
    });
  }
  trail.push({ x: objX, y: objY + 18 });
  if (trail.length > 60) trail.shift();

  // Shadow
  ctx.beginPath();
  ctx.ellipse(objX, baseY + 2, 20, 5, 0, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(0,0,0,0.3)";
  ctx.fill();

  // Block
  const bx = objX - 18;
  const by = objY - 18;
  const bw = 36;
  const bh = 36;
  const blockGrad = ctx.createLinearGradient(bx, by, bx + bw, by + bh);
  blockGrad.addColorStop(0, "#f59e0b");
  blockGrad.addColorStop(1, "#ef4444");
  ctx.fillStyle = blockGrad;
  ctx.beginPath();
  ctx.roundRect(bx, by, bw, bh, 6);
  ctx.fill();
  ctx.strokeStyle = "#fcd34d";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Velocity vector
  if (state.showVectors && progress > 0.02) {
    const vx = Math.cos(theta) * 60 * Math.min(progress * 2, 1);
    const vy = Math.sin(theta) * 60 * Math.min(progress * 2, 1);
    drawArrow(ctx, objX, objY, objX + vx, objY + vy, "#34d399", "v");
  }

  // Height indicator
  if (state.showVectors) {
    ctx.setLineDash([5, 4]);
    ctx.strokeStyle = "#a78bfa";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(topX - 30, topY);
    ctx.lineTo(topX - 30, baseY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#c4b5fd";
    ctx.font = "bold 13px 'Courier New'";
    ctx.textAlign = "center";
    ctx.fillText(`h=${state.height}m`, topX - 50, (topY + baseY) / 2);
  }

  // Angle arc
  ctx.strokeStyle = "#fb923c";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(baseX, baseY, 40, -Math.PI, -Math.PI + theta);
  ctx.stroke();
  ctx.fillStyle = "#fb923c";
  ctx.font = "bold 12px 'Courier New'";
  ctx.textAlign = "center";
  ctx.fillText(`${state.angle}°`, baseX - 55, baseY - 12);
}

function drawSpring(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  state: SimState,
  phase: number,
  trail: { x: number; y: number }[]
) {
  const { x, v, totalE } = springEnergies(state, phase);
  const eqX = W / 2;
  const wallX = W * 0.12;
  const blockSize = 50;

  const blockX = eqX + x * 120 - blockSize / 2;
  const blockY = H / 2 - blockSize / 2;

  // Wall
  ctx.fillStyle = "#1e293b";
  ctx.fillRect(wallX - 20, H * 0.3, 20, H * 0.4);
  for (let i = 0; i < 8; i++) {
    ctx.strokeStyle = "#475569";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(wallX - 20, H * 0.3 + i * (H * 0.4 / 7));
    ctx.lineTo(wallX, H * 0.3 + i * (H * 0.4 / 7) + 12);
    ctx.stroke();
  }

  // Equilibrium line
  ctx.setLineDash([6, 4]);
  ctx.strokeStyle = "rgba(148,163,184,0.4)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(eqX, H * 0.25);
  ctx.lineTo(eqX, H * 0.75);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = "rgba(148,163,184,0.5)";
  ctx.font = "11px 'Courier New'";
  ctx.textAlign = "center";
  ctx.fillText("equilibrium", eqX, H * 0.25 - 8);

  // Spring coils
  const springEnd = blockX;
  const springStart = wallX;
  const coils = 10;
  const coilW = (springEnd - springStart) / coils;
  const coilH = 18;
  const midY = H / 2;

  const springGrad = ctx.createLinearGradient(springStart, 0, springEnd, 0);
  const compressionRatio = (springEnd - springStart) / (eqX - wallX);
  if (compressionRatio < 0.9) {
    springGrad.addColorStop(0, "#ef4444");
    springGrad.addColorStop(1, "#f97316");
  } else if (compressionRatio > 1.1) {
    springGrad.addColorStop(0, "#3b82f6");
    springGrad.addColorStop(1, "#06b6d4");
  } else {
    springGrad.addColorStop(0, "#22c55e");
    springGrad.addColorStop(1, "#84cc16");
  }

  ctx.strokeStyle = springGrad;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(springStart, midY);
  for (let i = 0; i <= coils * 20; i++) {
    const t2 = i / (coils * 20);
    const sx = springStart + t2 * (springEnd - springStart);
    const sy = midY + Math.sin(t2 * coils * Math.PI * 2) * coilH;
    ctx.lineTo(sx, sy);
  }
  ctx.stroke();

  // Trail
  if (state.showTrail) {
    trail.forEach((pt, i) => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(167,139,250,${i / trail.length * 0.6})`;
      ctx.fill();
    });
  }
  trail.push({ x: blockX + blockSize / 2, y: midY });
  if (trail.length > 80) trail.shift();

  // Block
  const blockGrad = ctx.createLinearGradient(blockX, blockY, blockX + blockSize, blockY + blockSize);
  blockGrad.addColorStop(0, "#8b5cf6");
  blockGrad.addColorStop(1, "#06b6d4");
  ctx.fillStyle = blockGrad;
  ctx.beginPath();
  ctx.roundRect(blockX, blockY, blockSize, blockSize, 8);
  ctx.fill();
  ctx.strokeStyle = "#c4b5fd";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Mass label
  ctx.fillStyle = "#fff";
  ctx.font = "bold 12px 'Courier New'";
  ctx.textAlign = "center";
  ctx.fillText(`${state.mass}kg`, blockX + blockSize / 2, blockY + blockSize / 2 + 5);

  // Force arrow
  if (state.showVectors) {
    const fx = -state.springK * x * 0.5;
    drawArrow(ctx, blockX + blockSize / 2, midY, blockX + blockSize / 2 + fx, midY, "#f43f5e", "F");
  }

  // Energy annotation
  ctx.fillStyle = "rgba(251,191,36,0.8)";
  ctx.font = "12px 'Courier New'";
  ctx.textAlign = "left";
  ctx.fillText(`v = ${Math.abs(v).toFixed(2)} m/s`, W * 0.65, H * 0.35);
  ctx.fillText(`x = ${x.toFixed(2)} m`, W * 0.65, H * 0.35 + 18);
}

function drawPendulum(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  state: SimState,
  phase: number,
  trail: { x: number; y: number }[]
) {
  const { theta, h } = pendulumEnergies(state, phase);
  const pivotX = W / 2;
  const pivotY = H * 0.12;
  const L = state.pendulumL * 100;
  const bobX = pivotX + Math.sin(theta) * L;
  const bobY = pivotY + Math.cos(theta) * L;

  // Ceiling
  ctx.fillStyle = "#1e293b";
  ctx.fillRect(pivotX - 40, 0, 80, pivotY + 5);
  // Hatching
  for (let i = 0; i < 6; i++) {
    ctx.strokeStyle = "#475569";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pivotX - 35 + i * 14, pivotY + 5);
    ctx.lineTo(pivotX - 25 + i * 14, 0);
    ctx.stroke();
  }

  // Trail arc
  if (state.showTrail) {
    trail.forEach((pt, i) => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(251,146,60,${i / trail.length * 0.5})`;
      ctx.fill();
    });
  }
  trail.push({ x: bobX, y: bobY });
  if (trail.length > 100) trail.shift();

  // String
  const stringGrad = ctx.createLinearGradient(pivotX, pivotY, bobX, bobY);
  stringGrad.addColorStop(0, "#94a3b8");
  stringGrad.addColorStop(1, "#475569");
  ctx.strokeStyle = stringGrad;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(pivotX, pivotY);
  ctx.lineTo(bobX, bobY);
  ctx.stroke();

  // Pivot
  ctx.beginPath();
  ctx.arc(pivotX, pivotY, 8, 0, Math.PI * 2);
  ctx.fillStyle = "#64748b";
  ctx.fill();
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Bob shadow
  ctx.beginPath();
  ctx.ellipse(bobX, H * 0.85, 20, 5, 0, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fill();

  // Bob
  const bobR = 22 + state.mass * 1.5;
  const bobGrad = ctx.createRadialGradient(bobX - 6, bobY - 6, 2, bobX, bobY, bobR);
  bobGrad.addColorStop(0, "#fbbf24");
  bobGrad.addColorStop(0.6, "#f59e0b");
  bobGrad.addColorStop(1, "#b45309");
  ctx.beginPath();
  ctx.arc(bobX, bobY, bobR, 0, Math.PI * 2);
  ctx.fillStyle = bobGrad;
  ctx.fill();
  ctx.strokeStyle = "#fde68a";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Velocity vector
  if (state.showVectors) {
    const speed = Math.sqrt(2 * g * h);
    const velDir = Math.cos(theta) * (theta > 0 ? -1 : 1);
    drawArrow(ctx, bobX, bobY, bobX + velDir * speed * 5, bobY, "#34d399", "v");
  }

  // Angle arc
  if (state.showVectors) {
    ctx.strokeStyle = "#f472b6";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(pivotX, pivotY, 50, Math.PI / 2 - 0.01, Math.PI / 2 + Math.abs(theta) * (theta > 0 ? 1 : -1));
    ctx.stroke();
    ctx.fillStyle = "#f472b6";
    ctx.font = "bold 12px 'Courier New'";
    ctx.textAlign = "center";
    ctx.fillText(`${(theta * 180 / Math.PI).toFixed(1)}°`, pivotX + Math.sin(theta) * 70, pivotY + 65);
  }
}

function drawArrow(
  ctx: CanvasRenderingContext2D,
  x1: number, y1: number,
  x2: number, y2: number,
  color: string,
  label: string
) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  if (len < 5) return;
  const ux = dx / len;
  const uy = dy / len;
  const arrowSize = 10;

  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - ux * arrowSize + uy * arrowSize * 0.4, y2 - uy * arrowSize - ux * arrowSize * 0.4);
  ctx.lineTo(x2 - ux * arrowSize - uy * arrowSize * 0.4, y2 - uy * arrowSize + ux * arrowSize * 0.4);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = color;
  ctx.font = "bold 11px 'Courier New'";
  ctx.textAlign = "center";
  ctx.fillText(label, x2 + uy * 14, y2 - ux * 14);
}

function drawEnergyBars(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  PE: number,
  KE: number,
  totalE: number,
  scene: Scene
) {
  const barW = 28;
  const maxBarH = 140;
  const startX = W - 160;
  const baseY = H - 40;

  // Background card
  ctx.fillStyle = "rgba(15,23,42,0.85)";
  ctx.beginPath();
  ctx.roundRect(startX - 20, baseY - maxBarH - 30, 145, maxBarH + 70, 12);
  ctx.fill();
  ctx.strokeStyle = "rgba(148,163,184,0.2)";
  ctx.lineWidth = 1;
  ctx.stroke();

  const draw = (label: string, val: number, color: string, gx: number) => {
    const frac = totalE > 0 ? Math.min(val / totalE, 1) : 0;
    const bh = frac * maxBarH;

    // Bar background
    ctx.fillStyle = "rgba(255,255,255,0.05)";
    ctx.beginPath();
    ctx.roundRect(gx - barW / 2, baseY - maxBarH, barW, maxBarH, 4);
    ctx.fill();

    // Filled bar
    const barGrad = ctx.createLinearGradient(0, baseY - bh, 0, baseY);
    barGrad.addColorStop(0, color);
    barGrad.addColorStop(1, color + "80");
    ctx.fillStyle = barGrad;
    ctx.beginPath();
    ctx.roundRect(gx - barW / 2, baseY - bh, barW, bh, 4);
    ctx.fill();

    // Glow
    ctx.shadowColor = color;
    ctx.shadowBlur = 8;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(gx - barW / 2, baseY - bh, barW, Math.min(bh, 4), 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Label
    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 10px 'Courier New'";
    ctx.textAlign = "center";
    ctx.fillText(label, gx, baseY + 15);
    ctx.fillStyle = "#fff";
    ctx.font = "10px 'Courier New'";
    ctx.fillText(`${val.toFixed(0)}J`, gx, baseY + 27);
  };

  draw("PE", PE, "#a78bfa", startX);
  draw("KE", KE, "#34d399", startX + 50);
  draw("TE", totalE, "#f59e0b", startX + 100);

  ctx.fillStyle = "#94a3b8";
  ctx.font = "bold 11px 'Courier New'";
  ctx.textAlign = "center";
  ctx.fillText("ENERGY (J)", startX + 50, baseY - maxBarH - 12);
}

function drawPowerMeter(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  power: number
) {
  const cx = 80, cy = H - 60, r = 50;
  const maxPower = 500;
  const frac = Math.min(Math.abs(power) / maxPower, 1);
  const startAngle = Math.PI * 0.75;
  const endAngle = Math.PI * 2.25;

  // Background arc
  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(cx, cy, r, startAngle, endAngle);
  ctx.stroke();

  // Power arc
  const arcColor = frac > 0.8 ? "#ef4444" : frac > 0.5 ? "#f59e0b" : "#22c55e";
  ctx.strokeStyle = arcColor;
  ctx.shadowColor = arcColor;
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.arc(cx, cy, r, startAngle, startAngle + frac * (endAngle - startAngle));
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Label
  ctx.fillStyle = "#fff";
  ctx.font = "bold 14px 'Courier New'";
  ctx.textAlign = "center";
  ctx.fillText(`${Math.abs(power).toFixed(0)}W`, cx, cy + 5);
  ctx.fillStyle = "#94a3b8";
  ctx.font = "9px 'Courier New'";
  ctx.fillText("POWER", cx, cy + 18);
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function WorkEnergyPowerPlayground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phaseRef = useRef(0);
  const rafRef = useRef<number>(0);
  const trailRef = useRef<{ x: number; y: number }[]>([]);
  const prevERef = useRef(0);
  const prevTRef = useRef(0);

  const [state, setState] = useState<SimState>({
    t: 0,
    scene: "ramp",
    playState: "idle",
    mass: 5,
    angle: 30,
    height: 3,
    springK: 50,
    springX: 1.5,
    pendulumL: 2,
    showEnergy: true,
    showVectors: true,
    showTrail: true,
    demo: false,
  });

  const stateRef = useRef(state);
  stateRef.current = state;

  const descriptions: Record<Scene, { title: string; text: string; formula: string }> = {
    ramp: {
      title: "Ramp: Gravitational PE → KE",
      text: "A block slides down an inclined plane. Gravitational potential energy converts to kinetic energy. Total mechanical energy is conserved (no friction).",
      formula: "PE = mgh  |  KE = ½mv²  |  W = F·d",
    },
    spring: {
      title: "Spring: Elastic PE ↔ KE",
      text: "A mass oscillates on a spring. Elastic potential energy and kinetic energy continually interchange. This is Simple Harmonic Motion (SHM).",
      formula: "PE = ½kx²  |  F = -kx  |  ω = √(k/m)",
    },
    pendulum: {
      title: "Pendulum: PE ↔ KE",
      text: "A bob swings back and forth. At the highest point all energy is potential; at the bottom all is kinetic. Total energy stays constant.",
      formula: "PE = mgh  |  v = √(2gh)  |  T = 2π√(L/g)",
    },
  };

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const W = canvas.width;
    const H = canvas.height;
    const s = stateRef.current;
    const phase = phaseRef.current;

    // Background
    const bgGrad = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H));
    bgGrad.addColorStop(0, "#0f172a");
    bgGrad.addColorStop(1, "#020617");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Grid dots
    ctx.fillStyle = "rgba(148,163,184,0.04)";
    for (let gx = 30; gx < W; gx += 40) {
      for (let gy = 30; gy < H; gy += 40) {
        ctx.beginPath();
        ctx.arc(gx, gy, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let PE = 0, KE = 0, totalE = 0;

    if (s.scene === "ramp") {
      const e = rampEnergies(s, phase);
      PE = e.PE; KE = e.KE; totalE = e.totalE;
      drawRamp(ctx, W, H, s, phase, trailRef.current);
    } else if (s.scene === "spring") {
      const e = springEnergies(s, phase);
      PE = e.PE; KE = e.KE; totalE = e.totalE;
      drawSpring(ctx, W, H, s, phase, trailRef.current);
    } else {
      const e = pendulumEnergies(s, phase);
      PE = e.PE; KE = e.KE; totalE = e.totalE;
      drawPendulum(ctx, W, H, s, phase, trailRef.current);
    }

    // Energy bars
    if (s.showEnergy) {
      drawEnergyBars(ctx, W, H, PE, KE, totalE, s.scene);
    }

    // Power meter
    const dt = phase - prevTRef.current;
    const dE = Math.abs(KE - prevERef.current);
    const power = dt > 0 ? dE / (dt * 0.033) : 0;
    prevERef.current = KE;
    prevTRef.current = phase;
    drawPowerMeter(ctx, W, H, power);

    // Scene label
    ctx.fillStyle = "rgba(255,255,255,0.06)";
    ctx.font = "bold 80px 'Courier New'";
    ctx.textAlign = "right";
    ctx.fillText(s.scene.toUpperCase(), W - 20, H - 20);

    // Work display
    const work = totalE;
    ctx.fillStyle = "rgba(251,191,36,0.9)";
    ctx.font = "bold 13px 'Courier New'";
    ctx.textAlign = "left";
    ctx.fillText(`Work done = ${work.toFixed(1)} J`, 20, 30);
    ctx.fillStyle = "rgba(148,163,184,0.6)";
    ctx.font = "11px 'Courier New'";
    ctx.fillText(`m = ${s.mass}kg`, 20, 50);
  }, []);

  const animate = useCallback(() => {
    if (stateRef.current.playState === "playing") {
      phaseRef.current += 0.033;
    }
    draw();
    rafRef.current = requestAnimationFrame(animate);
  }, [draw]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  // Demo mode: auto-cycle scenes
  useEffect(() => {
    if (!state.demo) return;
    setState(s => ({ ...s, playState: "playing" }));
    const scenes: Scene[] = ["ramp", "spring", "pendulum"];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % 3;
      trailRef.current = [];
      phaseRef.current = 0;
      setState(s => ({ ...s, scene: scenes[i] }));
    }, 5000);
    return () => clearInterval(interval);
  }, [state.demo]);

  const handlePlay = () => setState(s => ({ ...s, playState: s.playState === "playing" ? "paused" : "playing" }));
  const handleReset = () => {
    phaseRef.current = 0;
    trailRef.current = [];
    setState(s => ({ ...s, playState: "idle", demo: false }));
  };
  const handleDemo = () => {
    phaseRef.current = 0;
    trailRef.current = [];
    setState(s => ({ ...s, demo: !s.demo, playState: !s.demo ? "playing" : "idle" }));
  };

  const Slider = ({
    label, value, min, max, step, unit, onChange
  }: {
    label: string; value: number; min: number; max: number; step: number; unit: string;
    onChange: (v: number) => void;
  }) => (
    <div className="slider-row">
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ color: "#94a3b8", fontSize: 11, fontFamily: "'Courier New'" }}>{label}</span>
        <span style={{ color: "#fbbf24", fontSize: 11, fontFamily: "'Courier New'", fontWeight: "bold" }}>{value}{unit}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ width: "100%", accentColor: "#818cf8", cursor: "pointer" }}
      />
    </div>
  );

  const desc = descriptions[state.scene];

  return (
    <div style={{
      display: "flex", width: "100vw", height: "100vh",
      background: "#020617", fontFamily: "'Courier New', monospace", overflow: "hidden"
    }}>
      {/* ── SIMULATOR PANEL (75%) ── */}
      <div style={{ width: "70%", position: "relative" }}>
        <canvas
          ref={canvasRef}
          width={window.innerWidth * 0.75}
          height={window.innerHeight}
          style={{ display: "block", width: "100%", height: "100%" }}
        />
        {/* Top title bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          padding: "10px 20px",
          background: "linear-gradient(180deg,rgba(2,6,23,0.9) 0%,transparent 100%)",
          display: "flex", alignItems: "center", gap: 12
        }}>
          <div style={{
            width: 10, height: 10, borderRadius: "50%",
            background: state.playState === "playing" ? "#22c55e" : "#f59e0b",
            boxShadow: `0 0 8px ${state.playState === "playing" ? "#22c55e" : "#f59e0b"}`
          }} />
          <span style={{ color: "#e2e8f0", fontSize: 13, fontWeight: "bold", letterSpacing: 1.5, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            ⚡ WORK · ENERGY · POWER SIMULATOR
          </span>
        </div>

        {/* Scene tabs */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          display: "flex", justifyContent: "center", gap: 8, padding: "12px",
          background: "linear-gradient(0deg,rgba(2,6,23,0.95) 0%,transparent 100%)"
        }}>
          {(["ramp", "spring", "pendulum"] as Scene[]).map(sc => (
            <button
              key={sc}
              onClick={() => {
                trailRef.current = [];
                phaseRef.current = 0;
                setState(s => ({ ...s, scene: sc, playState: "idle", demo: false }));
              }}
              style={{
                padding: "8px 20px",
                borderRadius: 6,
                border: `1.5px solid ${state.scene === sc ? "#818cf8" : "rgba(148,163,184,0.2)"}`,
                background: state.scene === sc ? "rgba(129,140,248,0.15)" : "rgba(15,23,42,0.8)",
                color: state.scene === sc ? "#c4b5fd" : "#64748b",
                cursor: "pointer",
                fontSize: 12,
                fontFamily: "'Courier New'",
                fontWeight: "bold",
                letterSpacing: 1,
                textTransform: "uppercase",
                transition: "all 0.2s",
              }}
            >
              {sc === "ramp" ? "🏔 Ramp" : sc === "spring" ? "🌀 Spring" : "🌕 Pendulum"}
            </button>
          ))}
        </div>
      </div>

      {/* ── CONTROL PANEL (20%) ── */}
      <div style={{
        width: "20%",
        background: "linear-gradient(180deg,#0f172a 0%,#0a0f1e 100%)",
        borderLeft: "1px solid rgba(148,163,184,0.1)",
        overflowY: "auto",
        padding: "0 0 20px 0",
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Header */}
        <div style={{
          padding: "14px 16px",
          borderBottom: "1px solid rgba(148,163,184,0.1)",
          background: "rgba(129,140,248,0.05)",
        }}>
          <div style={{ color: "#818cf8", fontSize: 10, letterSpacing: 3, marginBottom: 4 }}>⚙ SIMULATION CONTROLS</div>
        </div>

        <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
          {/* Play/Pause + Reset */}
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={handlePlay}
              style={{
                flex: 1, padding: "10px 0",
                borderRadius: 8,
                border: "1.5px solid rgba(129,140,248,0.4)",
                background: state.playState === "playing"
                  ? "linear-gradient(135deg,#6366f1,#8b5cf6)"
                  : "rgba(99,102,241,0.15)",
                color: "#fff",
                cursor: "pointer",
                fontSize: 12,
                fontFamily: "'Courier New'",
                fontWeight: "bold",
              }}
            >
              {state.playState === "playing" ? "⏸ PAUSE" : "▶ PLAY"}
            </button>
            <button
              onClick={handleReset}
              style={{
                flex: 1, padding: "10px 0",
                borderRadius: 8,
                border: "1.5px solid rgba(148,163,184,0.25)",
                background: "rgba(15,23,42,0.8)",
                color: "#94a3b8",
                cursor: "pointer",
                fontSize: 12,
                fontFamily: "'Courier New'",
                fontWeight: "bold",
              }}
            >
              ↺ RESET
            </button>
          </div>

          {/* Demo button */}
          <button
            onClick={handleDemo}
            style={{
              padding: "10px 0",
              borderRadius: 8,
              border: `1.5px solid ${state.demo ? "rgba(251,191,36,0.6)" : "rgba(251,191,36,0.2)"}`,
              background: state.demo
                ? "linear-gradient(135deg,rgba(251,191,36,0.25),rgba(245,158,11,0.1))"
                : "rgba(15,23,42,0.8)",
              color: state.demo ? "#fbbf24" : "#92400e",
              cursor: "pointer",
              fontSize: 12,
              fontFamily: "'Courier New'",
              fontWeight: "bold",
              letterSpacing: 1,
              transition: "all 0.3s",
            }}
          >
            {state.demo ? "✨ DEMO ON — CYCLING..." : "✨ DEMO MODE"}
          </button>

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(148,163,184,0.1)", margin: "4px 0" }} />

          {/* Description card */}
          <div style={{
            background: "rgba(129,140,248,0.07)",
            border: "1px solid rgba(129,140,248,0.2)",
            borderRadius: 10,
            padding: "12px",
          }}>
            <div style={{ color: "#818cf8", fontSize: 10, letterSpacing: 2, marginBottom: 8 }}>📖 CONCEPT</div>
            <div style={{ color: "#e2e8f0", fontSize: 12, fontWeight: "bold", marginBottom: 6, lineHeight: 1.4 }}>
              {desc.title}
            </div>
            <div style={{ color: "#94a3b8", fontSize: 11, lineHeight: 1.6, marginBottom: 8 }}>
              {desc.text}
            </div>
            <div style={{
              background: "rgba(15,23,42,0.8)",
              borderRadius: 6,
              padding: "8px",
              color: "#34d399",
              fontSize: 10,
              fontFamily: "'Courier New'",
              lineHeight: 1.7,
            }}>
              {desc.formula}
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(148,163,184,0.1)", margin: "2px 0" }} />
          <div style={{ color: "#475569", fontSize: 10, letterSpacing: 2 }}>⚗ PARAMETERS</div>

          {/* Sliders */}
          <Slider label="Mass" value={state.mass} min={1} max={20} step={1} unit="kg"
            onChange={v => setState(s => ({ ...s, mass: v }))} />

          {state.scene === "ramp" && <>
            <Slider label="Ramp Angle" value={state.angle} min={10} max={70} step={1} unit="°"
              onChange={v => setState(s => ({ ...s, angle: v }))} />
            <Slider label="Height" value={state.height} min={1} max={8} step={0.5} unit="m"
              onChange={v => setState(s => ({ ...s, height: v }))} />
          </>}

          {state.scene === "spring" && <>
            <Slider label="Spring Constant" value={state.springK} min={10} max={200} step={5} unit="N/m"
              onChange={v => setState(s => ({ ...s, springK: v }))} />
            <Slider label="Compression" value={state.springX} min={0.5} max={3} step={0.1} unit="m"
              onChange={v => setState(s => ({ ...s, springX: v }))} />
          </>}

          {state.scene === "pendulum" && <>
            <Slider label="String Length" value={state.pendulumL} min={0.5} max={4} step={0.1} unit="m"
              onChange={v => setState(s => ({ ...s, pendulumL: v }))} />
          </>}

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(148,163,184,0.1)", margin: "2px 0" }} />
          <div style={{ color: "#475569", fontSize: 10, letterSpacing: 2 }}>👁 VISIBILITY</div>

          {[
            { key: "showEnergy", label: "Energy Bars", icon: "📊" },
            { key: "showVectors", label: "Force Vectors", icon: "➡" },
            { key: "showTrail", label: "Motion Trail", icon: "✦" },
          ].map(({ key, label, icon }) => (
            <label key={key} style={{
              display: "flex", alignItems: "center", gap: 10, cursor: "pointer",
              padding: "8px 10px",
              background: (state as any)[key] ? "rgba(129,140,248,0.07)" : "transparent",
              borderRadius: 8,
              border: `1px solid ${(state as any)[key] ? "rgba(129,140,248,0.25)" : "rgba(148,163,184,0.08)"}`,
              transition: "all 0.2s",
            }}>
              <input
                type="checkbox"
                checked={(state as any)[key]}
                onChange={e => setState(s => ({ ...s, [key]: e.target.checked }))}
                style={{ accentColor: "#818cf8", width: 14, height: 14, cursor: "pointer" }}
              />
              <span style={{ fontSize: 12, color: "#94a3b8" }}>{icon} {label}</span>
            </label>
          ))}

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(148,163,184,0.1)", margin: "2px 0" }} />

          {/* Fun facts */}
          <div style={{
            background: "rgba(52,211,153,0.06)",
            border: "1px solid rgba(52,211,153,0.2)",
            borderRadius: 10,
            padding: "12px",
          }}>
            <div style={{ color: "#34d399", fontSize: 10, letterSpacing: 2, marginBottom: 8 }}>💡 DID YOU KNOW?</div>
            {state.scene === "ramp" && (
              <div style={{ color: "#94a3b8", fontSize: 11, lineHeight: 1.7 }}>
                The angle of a ramp affects <span style={{ color: "#34d399" }}>speed</span> but NOT the total energy. A gentler slope takes longer but the final KE is the same!
              </div>
            )}
            {state.scene === "spring" && (
              <div style={{ color: "#94a3b8", fontSize: 11, lineHeight: 1.7 }}>
                Robert Hooke discovered spring law in 1676 — he wrote it as an anagram first to claim priority! Springs store energy like tiny <span style={{ color: "#34d399" }}>batteries</span>.
              </div>
            )}
            {state.scene === "pendulum" && (
              <div style={{ color: "#94a3b8", fontSize: 11, lineHeight: 1.7 }}>
                Galileo discovered pendulum isochronism in 1602 by watching a chandelier in Pisa. Period depends only on <span style={{ color: "#34d399" }}>length</span>, not mass!
              </div>
            )}
          </div>

          {/* Conservation law badge */}
          <div style={{
            background: "linear-gradient(135deg,rgba(251,146,60,0.1),rgba(239,68,68,0.05))",
            border: "1px solid rgba(251,146,60,0.3)",
            borderRadius: 10,
            padding: "10px 12px",
            textAlign: "center",
          }}>
            <div style={{ color: "#fb923c", fontSize: 11, fontWeight: "bold", letterSpacing: 1 }}>
              ⚖ LAW OF CONSERVATION
            </div>
            <div style={{ color: "#94a3b8", fontSize: 10, marginTop: 4, lineHeight: 1.6 }}>
              PE + KE = constant<br />
              <span style={{ color: "#fbbf24" }}>Total Mechanical Energy</span> is always conserved!
            </div>
          </div>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 2px; }
        input[type=range] { height: 4px; }
      `}</style>
    </div>
  );
}