"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { config, fill } from "@/data/birthday";
export default function Letter() {
  const full = fill(config.letter);
  const [open, setOpen] = useState(false);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!open || n >= full.length) return;
    const t = setTimeout(() => setN((x) => x + 1), 35); return () => clearTimeout(t);
  }, [open, n, full.length]);
  return (
    <section className="mx-auto max-w-xl px-6 py-24 text-center">
      <h2 className="hand mb-8 text-5xl text-rose-500">{config.letterTitle}</h2>
      {!open ? (
        <button onClick={() => setOpen(true)} className="float text-8xl" aria-label="Open the envelope">💌</button>
      ) : (
        <motion.div initial={{ opacity: 0, rotateX: -60, y: 30 }} animate={{ opacity: 1, rotateX: 0, y: 0 }} className="rounded-sm bg-[#fffdf5] p-8 text-left shadow-xl">
          <p aria-label={full} className="hand min-h-64 whitespace-pre-wrap text-2xl leading-relaxed">{full.slice(0, n)}</p>
          {n < full.length && <button className="mt-4 text-sm underline" onClick={() => setN(full.length)}>Show the whole message</button>}
        </motion.div>
      )}
    </section>
  );
}
