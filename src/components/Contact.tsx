"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  useScrollReveal();

  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sendHovered, setSendHovered] = useState(false);

  const set = (key: keyof FormState) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.name.trim() && form.email.trim()) setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.28)",
    color: "white",
    fontSize: "0.88rem",
    fontFamily: "var(--font-body, 'Cormorant Garamond', Georgia, serif)",
    outline: "none",
    letterSpacing: "0.5px",
    transition: "border-color 0.3s",
    fontWeight: 300,
  };

  return (
    <section
      id="contact"
      style={{
        background: "#2c3e6b",
        padding: "72px 40px 48px",
        textAlign: "center",
      }}
    >
      {/* Header */}
      <div className="reveal">
        <h2
          style={{
            fontFamily: "var(--font-display, 'Cormorant SC', Georgia, serif)",
            fontSize: "1.15rem",
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "white",
            fontWeight: 400,
            marginBottom: 14,
          }}
        >
          Any Questions?
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "0.88rem",
            color: "rgba(255,255,255,0.58)",
            letterSpacing: "1px",
            marginBottom: 44,
            fontWeight: 300,
          }}
        >
          Please Contact George Cristinel A
        </p>
      </div>

      {/* Form */}
      <div
        className="reveal"
        style={{ maxWidth: 340, margin: "0 auto 56px", transitionDelay: "150ms" }}
      >
        {sent ? (
          <div
            style={{
              padding: "36px 24px",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.78)",
              fontSize: "0.95rem",
              letterSpacing: "2px",
              fontFamily: "var(--font-body, 'Cormorant Garamond', Georgia, serif)",
              fontStyle: "italic",
            }}
          >
            Message sent ✦
            <br />
            <span style={{ fontSize: "0.78rem", opacity: 0.6, letterSpacing: "1px", fontStyle: "normal" }}>
              We&apos;ll be in touch!
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <input
              value={form.name}
              onChange={set("name")}
              placeholder="Name"
              required
              style={inputStyle}
            />
            <input
              type="email"
              value={form.email}
              onChange={set("email")}
              placeholder="Email"
              required
              style={inputStyle}
            />
            <textarea
              rows={5}
              value={form.message}
              onChange={set("message")}
              placeholder="Message"
              style={{ ...inputStyle, paddingTop: 12, resize: "none" }}
            />
            <div style={{ textAlign: "center", marginTop: 10 }}>
              <button
                type="submit"
                onMouseEnter={() => setSendHovered(true)}
                onMouseLeave={() => setSendHovered(false)}
                style={{
                  padding: "12px 56px",
                  background: sendHovered ? "rgba(255,255,255,0.14)" : "transparent",
                  color: "white",
                  border: "1.5px solid rgba(255,255,255,0.38)",
                  fontSize: "0.72rem",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontFamily: "var(--font-display, 'Cormorant SC', Georgia, serif)",
                  fontWeight: 400,
                }}
              >
                Send
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Footer line */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: 22,
          fontSize: "0.68rem",
          color: "rgba(255,255,255,0.28)",
          letterSpacing: "1.5px",
          fontFamily: "var(--font-body, 'Cormorant Garamond', Georgia, serif)",
        }}
      >
        ©2023 by Holiday Party. Proudly Created With Wix.com
      </div>
    </section>
  );
}
