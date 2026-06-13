"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "Giới thiệu" },
  { href: "#programs", label: "Chương trình" },
  { href: "#tuition", label: "Học phí" },
  { href: "#events", label: "Sự kiện" },
  { href: "#gallery", label: "Thư viện" },
  { href: "#contact", label: "Liên hệ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="container nav">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.jpeg" alt="HSchool logo" className="brand-logo" />
          <span className="brand-text">
            <strong>{site.name}</strong>
            <small>Mầm non song ngữ</small>
          </span>
        </a>
        <nav className={`nav-links${open ? " open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-primary nav-cta">
          Đăng ký tư vấn
        </a>
        <button
          className="nav-toggle"
          aria-label="Mở menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
