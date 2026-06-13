"use client";

import { useEffect } from "react";

const SELECTOR =
  ".section-head, .about-art, .about-copy, .prog-card, .price-card, .event-card, .gallery-item, .why-card, .strip-item, .contact-info, .contact-form";

/** Thêm hiệu ứng xuất hiện khi cuộn tới (IntersectionObserver). */
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    els.forEach((el) => el.classList.add("reveal"));

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
