"use client";
import { motion } from "motion/react";
const E = ["💗", "✨", "🎉", "⭐", "🌸", "🎀"];
// Render with a changing key to replay: <Burst key={n} />
export default function Burst() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden>
      {Array.from({ length: 28 }, (_, i) => {
        const a = (i / 28) * 6.28, d = 140 + ((i * 37) % 260);
        return <motion.span key={i} className="absolute left-1/2 top-1/2 text-2xl" initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
          animate={{ x: Math.cos(a) * d, y: Math.sin(a) * d + 120, opacity: 0, scale: 1.2, rotate: i * 40 }} transition={{ duration: 1.8, ease: "easeOut" }}>{E[i % 6]}</motion.span>;
      })}
    </div>
  );
}
