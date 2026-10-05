"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { config, fill } from "@/data/birthday";
import Burst from "./Burst";
import { sfx } from "@/lib/sound";
export default function Cake() {
  const [lit, setLit] = useState([true, true, true]);
  const [done, setDone] = useState(0);
  const wish = () => { setLit([false, false, false]); setDone((d) => d + 1); sfx("cheer"); };
  return (
    <section className="grid place-items-center gap-6 px-6 py-24 text-center">
      {done > 0 && <Burst key={done} />}
      <div className="relative mt-10 flex flex-col items-center">
        <div className="absolute -top-14 flex gap-5">
          {lit.map((on, i) => (
            <button key={i} aria-label={on ? "Blow out candle" : "Light candle"} aria-pressed={on} onClick={() => setLit(lit.map((v, j) => (j === i ? !v : v)))} className="flex flex-col items-center">
              <span className="h-5 w-3 rounded-full bg-amber-300 shadow-[0_0_18px_6px_rgb(255,200,80,.7)] transition-opacity" style={{ opacity: on ? 1 : 0, animation: on ? "flick .5s infinite" : "none" }} />
              <span className="h-8 w-2 rounded bg-pink-300" />
            </button>
          ))}
        </div>
        <div className="h-16 w-40 rounded-t-3xl bg-gradient-to-b from-pink-200 to-pink-300" />
        <div className="h-20 w-60 rounded-t-xl bg-gradient-to-b from-violet-200 to-violet-300" />
        <div className="h-4 w-72 rounded-full bg-white shadow" />
      </div>
      <button className="btn" onClick={wish}>{config.cake.button} 🕯️</button>
      <div aria-live="polite" className="min-h-16">
        {done > 0 && <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="hand max-w-md text-3xl text-rose-500">{fill(config.cake.message)}</motion.p>}
      </div>
      <button className="text-sm underline" onClick={() => setLit([true, true, true])}>Light the candles again</button>
    </section>
  );
}
