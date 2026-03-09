"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function CtaStrip() {
  const [hovered, setHovered] = useState(false);
  useScrollReveal();

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        background: "#b8cbc5",
        padding: "30px 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 56,
        flexWrap: "wrap",
      }}
    >
      <p
        className="reveal"
        style={{
          fontFamily: "var(--font-display, 'Cormorant SC', Georgia, serif)",
          fontSize: "0.82rem",
          letterSpacing: "5px",
          textTransform: "uppercase",
          color: "#2c3e6b",
          fontWeight: 400,
          opacity: 0.85,
        }}
      >
        Get Tipsy &amp; Stay Warm
      </p>

      <button
        className="reveal"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={scrollToContact}
        style={{
          padding: "12px 40px",
          background: hovered ? "#2c3e6b" : "transparent",
          color: hovered ? "#ffffff" : "#2c3e6b",
          border: "1.5px solid #2c3e6b",
          fontSize: "0.72rem",
          letterSpacing: "4px",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "all 0.3s ease",
          fontFamily: "var(--font-display, 'Cormorant SC', Georgia, serif)",
          fontWeight: 500,
          transitionDelay: "100ms",
        }}
      >
        RSVP Now
      </button>
    </section>
  );
}
