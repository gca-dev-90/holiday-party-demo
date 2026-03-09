"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import SectionLabel from "./SectionLabel";
import ReindeerIllustration from "./ReindeerIllustration";
import DrinksIllustration from "./DrinksIllustration";
import BokehLeafIllustration from "./BokehLeafIllustration";

const NAVY = "#2c3e6b";
const WHITE = "#ffffff";

export default function InfoGrid() {
  useScrollReveal();

  const cellBase: React.CSSProperties = {
    aspectRatio: "1 / 1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };

  const textCellBase: React.CSSProperties = {
    ...cellBase,
    padding: "48px 40px",
    textAlign: "center",
  };

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
      }}
    >
      {/* ── ROW 1 ── */}

      {/* [0,0] Navy — Reindeer */}
      <div
        className="reveal"
        style={{ ...cellBase, background: NAVY }}
      >
        <ReindeerIllustration />
      </div>

      {/* [0,1] White — WHAT */}
      <div
        className="reveal"
        style={{
          ...textCellBase,
          background: WHITE,
          border: "1px solid #e4edeb",
          transitionDelay: "100ms",
        }}
      >
        <div>
          <SectionLabel text="What" color={NAVY} />
          <p
            style={{
              fontFamily: "var(--font-display, 'Cormorant SC', Georgia, serif)",
              fontSize: "1rem",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: NAVY,
              fontWeight: 400,
              lineHeight: 1.65,
            }}
          >
            Join Us to Celebrate
            <br />
            the Holidays
          </p>
        </div>
      </div>

      {/* [0,2] Navy — Drinks */}
      <div
        className="reveal"
        style={{ ...cellBase, background: NAVY, transitionDelay: "200ms" }}
      >
        <DrinksIllustration />
      </div>

      {/* ── ROW 2 ── */}

      {/* [1,0] White — WHEN */}
      <div
        className="reveal"
        style={{
          ...textCellBase,
          background: WHITE,
          border: "1px solid #e4edeb",
          transitionDelay: "150ms",
        }}
      >
        <div>
          <SectionLabel text="When" color={NAVY} />
          <p
            style={{
              fontFamily: "var(--font-display, 'Cormorant SC', Georgia, serif)",
              fontSize: "1.1rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: NAVY,
              fontWeight: 400,
              marginBottom: 10,
            }}
          >
            December 15th
          </p>
          <p
            style={{
              fontFamily: "var(--font-body, 'Cormorant Garamond', Georgia, serif)",
              fontSize: "0.9rem",
              color: NAVY,
              opacity: 0.58,
              letterSpacing: "2px",
              fontWeight: 300,
            }}
          >
            6:00 – 11:00 pm
          </p>
        </div>
      </div>

      {/* [1,1] Navy — Bokeh Leaf */}
      <div
        className="reveal"
        style={{ ...cellBase, background: NAVY, transitionDelay: "250ms" }}
      >
        <BokehLeafIllustration />
      </div>

      {/* [1,2] White — WHERE */}
      <div
        className="reveal"
        style={{
          ...textCellBase,
          background: WHITE,
          border: "1px solid #e4edeb",
          transitionDelay: "300ms",
        }}
      >
        <div>
          <SectionLabel text="Where" color={NAVY} />
          <p
            style={{
              fontFamily: "var(--font-display, 'Cormorant SC', Georgia, serif)",
              fontSize: "1.1rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: NAVY,
              fontWeight: 400,
              marginBottom: 10,
            }}
          >
            Snow Bar
          </p>
          <p
            style={{
              fontFamily: "var(--font-body, 'Cormorant Garamond', Georgia, serif)",
              fontSize: "0.85rem",
              color: NAVY,
              opacity: 0.55,
              letterSpacing: "1px",
              fontWeight: 300,
              lineHeight: 1.55,
            }}
          >
            500 Terry Francois Street, SF
          </p>
        </div>
      </div>
    </section>
  );
}
