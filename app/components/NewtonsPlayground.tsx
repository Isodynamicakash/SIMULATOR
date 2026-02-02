"use client";

import { useEffect, useRef, useState } from "react";

export default function NewtonsPlayground() {
  /* ---------------- FIRST LAW (INERTIA) ---------------- */
  const [velocity, setVelocity] = useState(1);
  const [position, setPosition] = useState(0);
  const [obstacle, setObstacle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((p) => {
        if (obstacle && p >= 240) return p; // stop at obstacle
        return p + velocity;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [velocity, obstacle]);

  /* ---------------- THIRD LAW ---------------- */
  const [push, setPush] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 space-y-24">
      <h1 className="text-4xl font-bold text-center text-orange-400">
        Newton’s Laws of Motion
      </h1>

      {/* ================= FIRST LAW ================= */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2 text-orange-300">
          1. Law of Inertia
        </h2>
        <p className="text-neutral-400 mb-6">
          An object in motion stays in motion unless acted upon by an external force.
        </p>

        <div className="relative h-24 bg-neutral-900 rounded overflow-hidden">
          <div
            className="absolute bottom-4 w-10 h-10 bg-blue-400 rounded-full transition-all"
            style={{ left: position }}
          />
          {obstacle && (
            <div className="absolute right-20 bottom-0 w-6 h-full bg-red-500" />
          )}
        </div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => setVelocity(velocity + 0.5)}
            className="px-4 py-2 bg-orange-500 rounded"
          >
            Apply Force
          </button>

          <button
            onClick={() => setObstacle(true)}
            className="px-4 py-2 bg-red-500 rounded"
          >
            Add Obstacle
          </button>

          <button
            onClick={() => {
              setPosition(0);
              setObstacle(false);
            }}
            className="px-4 py-2 bg-neutral-700 rounded"
          >
            Reset
          </button>
        </div>
      </section>

      {/* ================= THIRD LAW ================= */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2 text-orange-300">
          3. Action & Reaction
        </h2>
        <p className="text-neutral-400 mb-6">
          For every action, there is an equal and opposite reaction.
        </p>

        <div className="relative h-24 bg-neutral-900 rounded overflow-hidden">
          <div
            className={`absolute left-24 bottom-4 w-12 h-12 rounded-full bg-red-400 transition-all ${
              push ? "-translate-x-12" : ""
            }`}
          >
            A
          </div>

          <div
            className={`absolute right-24 bottom-4 w-12 h-12 rounded-full bg-green-400 transition-all ${
              push ? "translate-x-12" : ""
            }`}
          >
            B
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => setPush(true)}
            className="px-4 py-2 bg-orange-500 rounded"
          >
            Push
          </button>

          <button
            onClick={() => setPush(false)}
            className="px-4 py-2 bg-neutral-700 rounded"
          >
            Reset
          </button>
        </div>
      </section>
    </div>
  );
}
