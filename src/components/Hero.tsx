"use client";
import { useState } from "react";
import Snowflake from "./Snowflake";
import SparkleCanvas from "./SparkleCanvas";

export default function Hero() {
  const [hovered, setHovered] = useState(false);

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        position: "relative",
        background: "#b8cbc5",
        minHeight: "460px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 40px 100px",
        overflow: "hidden",
      }}
    >
      {/* ── Rotating snowflake ── */}
      <div
        className="animate-spin-slow"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 520,
          height: 520,
          transformOrigin: "center center",
        }}
      >
        {/* The spin is applied via Tailwind on the outer div,
            but we need to keep transform for centering separately */}
        <div style={{ position: "relative", width: 520, height: 520 }}>
          <Snowflake size={520} />
          <SparkleCanvas size={520} />
        </div>
      </div>

      {/* Radial vignette edges */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 65% 65% at 50% 50%, transparent 40%, rgba(148,185,178,0.45) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Text content ── */}
      <div style={{ position: "relative", zIndex: 10 }}>
        {/* YOU'RE INVITED! */}
        <p
          className="animate-fade-down"
          style={{
            fontFamily: "var(--font-display, 'Cormorant SC', Georgia, serif)",
            fontSize: "0.68rem",
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "#2c3e6b",
            opacity: 0.72,
            marginBottom: 14,
            fontWeight: 400,
          }}
        >
          You&apos;re Invited!
        </p>

        {/* HOLIDAY PARTY */}
        <h1
          className="animate-fade-down-2"
          style={{
            fontFamily: "var(--font-display, 'Cormorant SC', Georgia, serif)",
            fontSize: "clamp(2.6rem, 7vw, 4.4rem)",
            fontWeight: 400,
            color: "#2c3e6b",
            letterSpacing: "10px",
            lineHeight: 1.08,
            marginBottom: 18,
            textShadow: "0 3px 24px rgba(160,200,195,0.6)",
          }}
        >
          Holiday Party
        </h1>

        {/* Date */}
        <p
          className="animate-fade-down-3"
          style={{
            fontFamily: "var(--font-body, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "1rem",
            color: "#2c3e6b",
            opacity: 0.72,
            letterSpacing: "3px",
            marginBottom: 30,
            fontWeight: 300,
          }}
        >
          Dec 15, 2023
        </p>

        {/* RSVP Button */}
        <button
          className="animate-fade-up"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={scrollToContact}
          style={{
            padding: "11px 44px",
            background: hovered ? "#2c3e6b" : "transparent",
            color: hovered ? "#ffffff" : "#2c3e6b",
            border: "1.5px solid #2c3e6b",
            fontSize: "0.72rem",
            letterSpacing: "4px",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontFamily: "var(--font-display, 'Cormorant SC', Georgia, serif)",
            fontWeight: 400,
          }}
        >
          RSVP
        </button>
      </div>
    </section>
  );
}
