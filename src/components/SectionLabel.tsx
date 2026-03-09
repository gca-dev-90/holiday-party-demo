interface SectionLabelProps {
  text: string;
  color?: string;
}

export default function SectionLabel({ text, color = "#2c3e6b" }: SectionLabelProps) {
  return (
    <div style={{ textAlign: "center", marginBottom: 20 }}>
      <p
        style={{
          fontFamily: "var(--font-body, 'Cormorant Garamond', Georgia, serif)",
          fontSize: "0.6rem",
          letterSpacing: "4px",
          textTransform: "uppercase",
          color,
          marginBottom: 10,
          fontWeight: 500,
        }}
      >
        {text}
      </p>
      {/* Vertical line */}
      <div
        style={{
          width: 1,
          height: 30,
          background: color,
          opacity: 0.4,
          margin: "0 auto",
        }}
      />
    </div>
  );
}
