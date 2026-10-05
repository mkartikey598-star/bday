"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { config, fill } from "@/data/birthday";
import Photo from "./Photo";

function Card({ p, i, open }: { p: (typeof config.photos)[number]; i: number; open: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [i % 2 ? 50 : 20, i % 2 ? -50 : -20]); // parallax drift
  const zoom = useTransform(scrollYProgress, [0, 1], [1.15, 1]); // slow settle zoom
  return (
    <motion.div style={{ y }} className={`w-72 ${i % 2 ? "sm:ml-auto sm:mr-10" : "sm:ml-10"}`}>
      <motion.button ref={ref} onClick={open} aria-label={`Open photo: ${fill(p.alt)}`}
        initial={{ opacity: 0, rotate: p.tilt * 3, scale: 0.85 }} whileInView={{ opacity: 1, rotate: p.tilt, scale: 1 }} viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", damping: 14 }} whileTap={{ scale: 0.97 }}
        className="relative block w-full bg-white p-3 pb-4 text-left shadow-xl">
        <span aria-hidden className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-2 bg-yellow-200/80" />
        <div className="overflow-hidden"><motion.div style={{ scale: zoom }}><Photo src={p.src} alt={fill(p.alt)} className="h-72 w-full" /></motion.div></div>
        <p className="hand mt-3 text-2xl text-rose-500">{fill(p.caption)}</p>
      </motion.button>
    </motion.div>
  );
}

export default function Scrapbook() {
  const [sel, setSel] = useState<number | null>(null);
  const n = config.photos.length;
  useEffect(() => {
    if (sel === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSel(null);
      if (e.key === "ArrowRight") setSel((s) => (s! + 1) % n);
      if (e.key === "ArrowLeft") setSel((s) => (s! + n - 1) % n);
    };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, [sel, n]);
  const p = sel === null ? null : config.photos[sel];
  return (
    <section id="story" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="hand mb-16 text-center text-5xl text-rose-500">A few pics of yours</h2>
      <div className="flex flex-col gap-24">
        {config.photos.map((ph, i) => (
          <div key={i}>
            <p className="hand mb-3 text-3xl text-violet-400 sm:px-10">{fill(ph.chapter)}</p>
            <Card p={ph} i={i} open={() => setSel(i)} />
          </div>
        ))}
      </div>
      <AnimatePresence>
        {p && (
          <motion.div role="dialog" aria-modal="true" aria-label="Photo viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4" onClick={() => setSel(null)}>
            <button aria-label="Close" className="absolute right-4 top-4 text-white" onClick={() => setSel(null)}><X size={32} /></button>
            <button aria-label="Previous photo" className="absolute left-3 text-white" onClick={(e) => { e.stopPropagation(); setSel((sel! + n - 1) % n); }}><ChevronLeft size={40} /></button>
            <button aria-label="Next photo" className="absolute right-3 text-white" onClick={(e) => { e.stopPropagation(); setSel((sel! + 1) % n); }}><ChevronRight size={40} /></button>
            <motion.figure key={sel} initial={{ scale: 0.9 }} animate={{ scale: 1 }} onClick={(e) => e.stopPropagation()} className="max-h-full text-center">
              <Photo src={p.src} alt={fill(p.alt)} className="mx-auto max-h-[75vh] max-w-full rounded-lg" />
              <figcaption className="hand mt-3 text-3xl text-white">{fill(p.caption)}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
