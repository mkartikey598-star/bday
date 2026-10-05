"use client";
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion, useScroll } from "motion/react";
import { config } from "@/data/birthday";
import Burst from "@/components/Burst";
import Hero from "@/components/Hero";
import Scrapbook from "@/components/Scrapbook";
import Cake from "@/components/Cake";
import Letter from "@/components/Letter";
import Cards from "@/components/Cards";
import Finale from "@/components/Finale";
import Wishes from "@/components/Wishes";
import Notes from "@/components/Notes";
import SoundToggle from "@/components/SoundToggle";
import { sfx } from "@/lib/sound";

export default function Page() {
  const [opened, setOpened] = useState(false);
  const [boom, setBoom] = useState(0);
  const { scrollYProgress } = useScroll();
  const open = () => { setBoom(1); sfx("open"); setTimeout(() => setOpened(true), 1100); };
  const replay = () => { setOpened(false); setBoom(0); window.scrollTo({ top: 0 }); };
  return (
    <MotionConfig reducedMotion="user">
      <SoundToggle />
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.main key="intro" exit={{ opacity: 0, scale: 1.1 }} className="relative grid min-h-screen place-items-center bg-gradient-to-br from-pink-100 via-[#fff6f1] to-violet-100 p-6 text-center">
            {boom > 0 && <Burst key={boom} />}
            <div className="flex flex-col items-center gap-6">
              <p className="hand text-5xl text-rose-500">{config.intro.hello}, {config.herName}...</p>
              <p className="text-lg">{config.intro.sub}</p>
              <button onClick={open} aria-label="Open your surprise" className="float text-9xl drop-shadow-xl">🎁</button>
              <button onClick={open} className="btn">Open your surprise ✨</button>
              <p className="text-sm opacity-60">{config.intro.hint}</p>
            </div>
          </motion.main>
        ) : (
          <motion.main key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <motion.div aria-hidden style={{ scaleX: scrollYProgress }} className="fixed left-0 right-0 top-0 z-40 h-1 origin-left bg-gradient-to-r from-pink-400 to-violet-400" />
            <Hero /><Scrapbook /><Cake /><Letter /><Cards /><Wishes /><Notes /><Finale replay={replay} />
          </motion.main>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
