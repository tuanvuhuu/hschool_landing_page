"use client";

import { useEffect, useState } from "react";
import { gallery } from "@/lib/site";

export default function Gallery() {
  const [active, setActive] = useState<{ src: string; caption: string } | null>(
    null
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Thư viện ảnh</span>
          <h2>Khoảnh khắc đáng yêu tại HSchool</h2>
          <p>Nhấp vào ảnh để xem ở chế độ lớn.</p>
        </div>
        <div className="gallery">
          {gallery.map((g) => (
            <button
              key={g.src}
              className={`gallery-item ${g.cls}`}
              onClick={() => setActive({ src: g.src, caption: g.caption })}
              aria-label={g.caption}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.src} alt={g.caption} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      <div
        className={`lightbox${active ? " open" : ""}`}
        aria-hidden={!active}
        onClick={() => setActive(null)}
      >
        <button
          className="lightbox-close"
          aria-label="Đóng"
          onClick={() => setActive(null)}
        >
          &times;
        </button>
        {active && (
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.src} alt={active.caption} />
            <figcaption>{active.caption}</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
