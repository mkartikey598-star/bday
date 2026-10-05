"use client";
import { motion } from "motion/react";
import { config, fill } from "@/data/birthday";
import Photo from "./Photo";
export default function Hero() {
  const h = config.hero;
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden px-6 py-20 text-center">
      {["🎈", "💗", "✨", "🎈", "🌸", "⭐"].map((e, i) => (
        <span key={i} aria-hidden className="float absolute text-3xl" style={{ left: `${8 + i * 17}%`, top: `${10 + ((i * 29) % 70)}%`, animationDelay: `${i * 0.6}s` }}>{e}</span>
      ))}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <motion.div initial={{ scale: 0.8, opacity: 0, rotate: -6 }} animate={{ scale: 1, opacity: 1, rotate: 3 }} transition={{ type: "spring", duration: 1.2 }}
          className="rounded-[2rem] bg-white p-3 pb-10 shadow-[0_0_70px_10px_rgb(240,140,180,.45)]">
          <Photo src={h.photo} alt={fill(h.photoAlt)} className="h-72 w-60 rounded-2xl sm:h-96 sm:w-80" />
        </motion.div>
        <h1 className="hand text-6xl leading-none text-rose-500 sm:text-8xl">{h.headline},<br />{config.herName}!</h1>
        <p className="max-w-md text-lg">{fill(h.subtitle)}</p>
        <a href="#story" className="btn">There's more for you 💗</a>
      </div>
    </section>
  );
}
