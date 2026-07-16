"use client";

import { useState } from "react";

/* Dark editorial accordion — folio number, question, brass "+" rotating
   to "×", answer expanding via grid rows. */
export default function Faq({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {items.map((item, i) => (
        <div key={item.question} className="border-b border-paper/15">
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
            className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-6 py-7 text-left"
          >
            <span className="display text-base tabular-nums text-gold-bright">
              0{i + 1}
            </span>
            <span className="display text-lg normal-case tracking-normal text-paper sm:text-2xl">
              {item.question}
            </span>
            <span
              className={`text-xl text-gold-bright transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className="grid transition-[grid-template-rows] duration-300 ease-out"
            style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <p className="max-w-[60ch] pb-7 pl-[2.6rem] text-sm leading-relaxed text-paper/60">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
