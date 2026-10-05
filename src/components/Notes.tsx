"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { config, fill } from "@/data/birthday";
import { sfx } from "@/lib/sound";
export default function Notes() {
  const [got, setGot] = useState<number[]>([]);
  const total = config.notes.length;
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className="hand mb-2 text-5xl text-rose-500">{config.notesTitle}</h2>
      <p className="mb-10 text-sm opacity-70" aria-live="polite">Tap a note to keep it · {got.length} of {total} collected</p>
      <div className="grid gap-6 sm:grid-cols-2">
        {config.notes.map((t, i) => {
          const has = got.includes(i);
          return (
            <motion.button key={i} aria-pressed={has} onClick={() => { setGot(has ? got.filter((x) => x !== i) : [...got, i]); if (!has) sfx("flip"); }}
              initial={{ opacity: 0, y: 30, rotate: i % 2 ? 4 : -4 }} whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 2 : -2 }} viewport={{ once: true }} whileTap={{ scale: 0.96 }}
              className={`hand relative bg-yellow-100 p-6 text-2xl shadow-lg ${has ? "ring-4 ring-pink-300" : ""}`}>
              <span aria-hidden className="absolute -top-3 left-1/2 h-5 w-16 -translate-x-1/2 bg-pink-200/80" />
              {fill(t)}{has && <span aria-hidden className="absolute -right-2 -top-2 text-2xl">💗</span>}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
