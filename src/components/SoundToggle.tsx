"use client";
import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { config } from "@/data/birthday";
import { setSound } from "@/lib/sound";
export default function SoundToggle() {
  const [on, setOn] = useState(false);
  return (
    <button aria-pressed={on} aria-label={on ? "Turn sound off" : "Turn sound on"} onClick={() => { setSound(!on, config.sound.musicFile); setOn(!on); }}
      className="glass fixed right-4 top-4 z-[60] flex items-center gap-2 rounded-full px-4 py-2 text-sm">
      {on ? <Volume2 size={18} /> : <VolumeX size={18} />}{on ? "Sound on" : "Sound off"}
    </button>
  );
}
