"use client";

import { useEffect, useRef, useState } from "react";

export default function NewtonsPlayground() {
  return (
    <div className="space-y-20 py-16">
      <InertiaDemo />
      <SecondLawDemo />
      <ThirdLawDemo />
    </div>
  );
}

/* -------------------- FIRST LAW -------------------- */
function InertiaDemo() {
  const [velocity, setVelocity] = useState(2);
  const [x, setX] = useState(0);
  const [obstacle, setObstacle] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setX(prev => {
        if (obstacle && prev >= 220) return prev; // STOP
        return prev + velocity;
      });
    }, 30);
    return () => clearInterval(id);
  }, [velocity, obstacle]);

  return (
    <Section title="1. Law of Inertia">
      <div className="relative h-32 bg-slate-900 rounded-xl overflow-hidden">
        <div
          className="absolute bottom-6 w-10 h-10 bg-cyan-400 rounded"
          style={{ transform: `translateX(${x}px)` }}
        />
        {obstacle && (
          <div className="absolute bottom-6 left-[260px] w-6 h-10 bg-red-500 rounded" />
        )}
      </div>

      <div className="flex gap-3 mt-4">
        <button onClick={() => setObstacle(true)} className="btn">
          Add Obstacle
        </button>
        <button onClick={() => { setX(0); setObstacle(false); }} className="btn-outline">
          Reset
        </button>
      </div>

      <p className="text-sm text-slate-400 mt-2">
        Object keeps moving until an external force stops it.
      </p>
    </Section>
  );
}

/* -------------------- SECOND LAW -------------------- */
function SecondLawDemo() {
  const [force, setForce] = useState(2);
  const [x, setX] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setX(prev => prev + force * 0.5);
    }, 30);
    return () => clearInterval(id);
  }, [force]);

  return (
    <Section title="2. Second Law (F = ma)">
      <div className="relative h-32 bg-slate-900 rounded-xl overflow-hidden">
        <div
          className="absolute bottom-6 w-10 h-10 bg-orange-400 rounded"
          style={{ transform: `translateX(${x}px)` }}
        />
      </div>

      <div className="mt-4">
        <input
          type="range"
          min="1"
          max="10"
          value={force}
          onChange={e => setForce(Number(e.target.value))}
          className="w-full"
        />
        <p className="text-sm text-slate-400 mt-1">
          Force: <span className="text-orange-300">{force} N</span>
        </p>
      </div>
    </Section>
  );
}

/* -------------------- THIRD LAW -------------------- */
function ThirdLawDemo() {
  const [offset, setOffset] = useState(0);

  return (
    <Section title="3. Action & Reaction">
      <div className="relative h-32 bg-slate-900 rounded-xl overflow-hidden flex items-center justify-between px-12">
        <div
          className="w-12 h-12 bg-red-500 rounded-full transition-transform"
          style={{ transform: `translateX(${-offset}px)` }}
        />
        <div
          className="w-12 h-12 bg-green-500 rounded-full transition-transform"
          style={{ transform: `translateX(${offset}px)` }}
        />
      </div>

      <div className="flex gap-3 mt-4">
        <button onClick={() => setOffset(40)} className="btn">
          Push
        </button>
        <button onClick={() => setOffset(0)} className="btn-outline">
          Reset
        </button>
      </div>

      <p className="text-sm text-slate-400 mt-2">
        Forces occur in equal and opposite pairs.
      </p>
    </Section>
  );
}

/* -------------------- UI HELPERS -------------------- */
function Section({ title, children }: any) {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-white">{title}</h2>
      {children}
    </section>
  );
}
