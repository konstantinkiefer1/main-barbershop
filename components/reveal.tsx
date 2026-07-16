"use client";

import { useEffect, useRef, useState } from "react";

/* Scroll-reveal wrapper. Children carrying the `rise` (or `clip`) class
   fade/slide in once the wrapper enters the viewport. */
export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Already past it (e.g. anchor jump, restored scroll) — show immediately.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`}>
      {children}
    </div>
  );
}
