"use client";

import { useEffect } from "react";
import { BOOKSY_URL } from "@/lib/site";

const WIDGET_SRC =
  "https://booksy.com/widget/code.js?id=1646&country=de&lang=de";
const HOLDER_ID = "booksy-holder";

/* Booksy injects its own branded button next to the script tag; we park
   that in a visually hidden holder attached to <body> (so it survives
   route changes) and proxy-click it from our styled button. */
function ensureWidget() {
  if (document.getElementById(HOLDER_ID)) return;
  const holder = document.createElement("div");
  holder.id = HOLDER_ID;
  // Inline styles so the clipping never depends on the CSS pipeline.
  Object.assign(holder.style, {
    position: "fixed",
    bottom: "0",
    right: "0",
    width: "0",
    height: "0",
    overflow: "hidden",
  });
  const script = document.createElement("script");
  script.src = WIDGET_SRC;
  holder.appendChild(script);
  document.body.appendChild(holder);
}

function openBooksy() {
  const btn = document.querySelector<HTMLElement>(
    ".booksy-widget-button a, a.booksy-widget-button, .booksy-widget-button"
  );
  if (btn) {
    btn.click();
  } else {
    // Widget blocked or not loaded yet — fall back to the Booksy page.
    window.open(BOOKSY_URL, "_blank", "noopener,noreferrer");
  }
}

export default function BookingButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  useEffect(ensureWidget, []);

  return (
    <button type="button" onClick={openBooksy} className={className}>
      {children}
    </button>
  );
}
