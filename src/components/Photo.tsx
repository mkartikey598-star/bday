"use client";
import { useState } from "react";
export default function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [bad, setBad] = useState(false);
  if (bad) return <div role="img" aria-label={alt} className={`grid place-items-center bg-gradient-to-br from-pink-200 via-rose-100 to-violet-200 text-4xl ${className}`}>📷</div>;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`/images/${src}`} alt={alt} loading="lazy" onError={() => setBad(true)} className={`object-cover ${className}`} />;
}
