"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { config, fill } from "@/data/birthday";
import Burst from "./Burst";
import { sfx } from "@/lib/sound";
export default function Finale({ replay }: { replay: () => void }) {
  const f = config.finale;
  const [n, setN] = useState(0);
  const [egg, setEgg] = useState(false);
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff6f1] via-[#5b3a7a] to-[#1d1535] px-6 pb-24 pt-64 text-center text-white">
      {Array.from({ length: 40 }, (_, i) => (
        <span key={i} aria-hidden className="absolute h-1 w-1 rounded-full bg-white" style={{ left: `${(i * 53) % 100}%`, top: `${35 + ((i * 31) % 65)}%`, animation: `twinkle ${2 + (i % 4)}s ${(i % 5) * 0.4}s infinite` }} />
      ))}
      <div className="relative mx-auto max-w-xl">
        <p className="hand whitespace-pre-wrap text-3xl leading-relaxed">{fill(f.message)}</p>
        <p className="hand mt-8 text-2xl">{f.signoff}<br />{config.yourName}</p>
        <button className="btn mt-10" onClick={() => { setN(n + 1); sfx("cheer"); }}>{f.button}</button>
        <div><button className="mt-8 text-sm underline" onClick={replay}>Replay the surprise</button></div>
      </div>
      <button aria-label="A tiny hidden star" onClick={() => { setEgg(true); sfx("flip"); }} className="absolute right-6 top-24 text-2xl opacity-30 hover:opacity-100">⭐</button>
      {egg && <div role="dialog" aria-label="Secret message" className="fixed inset-0 z-40 grid place-items-center bg-[#1d1535]/90 p-6 text-center" onClick={() => setEgg(false)}>
        <div><p className="hand text-4xl text-pink-200">{fill(config.easterEgg)}</p><button className="btn mt-8" onClick={() => setEgg(false)}>Close</button></div></div>}
      {n > 0 && <Burst key={n} />}
      <AnimatePresence>
        {n > 0 && (
          <motion.div key="o" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-label="Final message"
            className="fixed inset-0 z-40 grid place-items-center bg-[#1d1535]/90 p-6" onClick={() => setN(0)}>
            <p className="hand text-6xl text-pink-200">{fill(f.overlay)}</p>
            <button className="btn absolute bottom-10" onClick={() => setN(0)}>Close</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
