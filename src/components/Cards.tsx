"use client";
import { useState } from "react";
import { config, fill } from "@/data/birthday";
import { sfx } from "@/lib/sound";
function Flip({ title, message }: { title: string; message: string }) {
  const [on, setOn] = useState(false);
  const face = "absolute inset-0 grid place-items-center rounded-2xl p-4 [backface-visibility:hidden]";
  return (
    <button onClick={() => { setOn(!on); sfx("flip"); }} aria-pressed={on} className="h-44 [perspective:900px]">
      <span className="relative block h-full w-full transition-transform duration-700 [transform-style:preserve-3d]" style={{ transform: on ? "rotateY(180deg)" : "none" }}>
        <span className={`${face} hand bg-gradient-to-br from-pink-200 to-violet-200 text-2xl text-rose-600 shadow-lg`}>{title}</span>
        <span className={`${face} glass hand text-2xl`} style={{ transform: "rotateY(180deg)" }}>{fill(message)}</span>
      </span>
    </button>
  );
}
export default function Cards() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="hand mb-10 text-center text-5xl text-rose-500">Tap to open</h2>
      <div className="grid gap-5 sm:grid-cols-2">{config.cards.map((c) => <Flip key={c.title} {...c} />)}</div>
    </section>
  );
}
