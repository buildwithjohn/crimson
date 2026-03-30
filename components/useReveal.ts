"use client";
import { useEffect, useRef } from "react";

// Works on any HTML element (section, div, article, etc.)
export function useReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = Array.from(
      el.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right")
    );

    if (targets.length === 0) return;

    // Fallback: make everything visible after 3s regardless
    const fallback = setTimeout(() => {
      targets.forEach(t => t.classList.add("visible"));
    }, 3000);

    if (!("IntersectionObserver" in window)) {
      targets.forEach(t => t.classList.add("visible"));
      clearTimeout(fallback);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.05,          // trigger when just 5% is visible
        rootMargin: "0px 0px 0px 0px",  // no negative offset
      }
    );

    targets.forEach(t => observer.observe(t));

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return ref;
}
