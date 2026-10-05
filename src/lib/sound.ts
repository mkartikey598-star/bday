// Soft synthesized chimes (no audio files needed). Everything is OFF until she taps the toggle.
let ctx: AudioContext | null = null;
let on = false;
let music: HTMLAudioElement | null = null;
export function setSound(v: boolean, musicFile?: string) {
  on = v;
  if (v) {
    ctx ??= new AudioContext(); ctx.resume();
    if (musicFile) { music ??= Object.assign(new Audio(`/audio/${musicFile}`), { loop: true, volume: 0.4 }); music.play().catch(() => {}); }
  } else music?.pause();
}
const NOTES = { open: [523, 659, 784, 1047], flip: [880, 1175], cheer: [523, 659, 784, 1047, 1319] };
export function sfx(kind: keyof typeof NOTES) {
  if (!on || !ctx) return;
  NOTES[kind].forEach((f, i) => {
    const o = ctx!.createOscillator(), g = ctx!.createGain(), t = ctx!.currentTime + i * 0.09;
    o.type = "sine"; o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
    o.connect(g).connect(ctx!.destination); o.start(t); o.stop(t + 0.4);
  });
}
