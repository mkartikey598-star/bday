"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { config, fill } from "@/data/birthday";
import { sfx } from "@/lib/sound";
export default function Wishes() {
  const [i, setI] = useState(-1);
  const [k, setK] = useState(0);
  const draw = () => {
    const n = config.wishes.length; let j: number;
    do { j = Math.floor(Math.random() * n); } while (n > 1 && j === i);
    setI(j); setK(k + 1); sfx("flip");
  };
  return (
    <section className="mx-auto max-w-xl px-6 py-24 text-center">
      <h2 className="hand mb-8 text-5xl text-rose-500">{config.wishMachine.title}</h2>
      <div aria-live="polite" className="grid min-h-44 place-items-center">
        <AnimatePresence mode="wait">
          <motion.div key={k} initial={{ opacity: 0, rotate: -8, y: 30, scale: 0.9 }} animate={{ opacity: 1, rotate: 0, y: 0, scale: 1 }} exit={{ opacity: 0, x: 80, rotate: 10 }}
            className="glass hand rounded-3xl p-8 text-3xl">
            {i < 0 ? config.wishMachine.prompt : fill(config.wishes[i])} <span aria-hidden>✨</span>
          </motion.div>
        </AnimatePresence>
      </div>
      <button className="btn mt-8" onClick={draw}>{config.wishMachine.button}</button>
    </section>
  );
}
