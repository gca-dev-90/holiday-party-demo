export default function ReindeerIllustration() {
  return (
    <svg
      viewBox="0 0 340 340"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <defs>
        <radialGradient id="groundGlow" cx="50%" cy="100%" r="60%">
          <stop offset="0%"   stopColor="#e8d590" stopOpacity="0.3" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="wireGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="noseGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="340" height="340" fill="#2c3e6b" />

      {/* Ground glow */}
      <ellipse cx="170" cy="295" rx="110" ry="22" fill="url(#groundGlow)" />

      {/* ── Reindeer body (wire-light style) ── */}
      <g filter="url(#wireGlow)" stroke="#c8dcd8" strokeLinecap="round" strokeLinejoin="round" fill="none">

        {/* Body ellipse */}
        <ellipse cx="170" cy="200" rx="68" ry="36" strokeWidth="2.5" opacity="0.88" />

        {/* Neck */}
        <line x1="210" y1="178" x2="225" y2="140" strokeWidth="3" opacity="0.9" />

        {/* Head */}
        <ellipse cx="234" cy="128" rx="17" ry="13" strokeWidth="2.5" opacity="0.9" />

        {/* Ear */}
        <path d="M226 118 Q222 108 228 112" strokeWidth="1.8" opacity="0.8" />

        {/* Eye */}
        <circle cx="240" cy="124" r="2" fill="#c8dcd8" stroke="none" opacity="0.9" />

        {/* Left antler */}
        <path d="M224 117 L212 92 L204 72 M212 92 L218 78 M212 92 L203 84"
          strokeWidth="2" opacity="0.85" />

        {/* Right antler */}
        <path d="M232 117 L238 90 L244 70 M238 90 L234 76 M238 90 L248 80"
          strokeWidth="2" opacity="0.85" />

        {/* Front legs */}
        <line x1="140" y1="228" x2="136" y2="275" strokeWidth="2.5" opacity="0.85" />
        <line x1="158" y1="232" x2="155" y2="280" strokeWidth="2.5" opacity="0.85" />

        {/* Back legs */}
        <line x1="195" y1="230" x2="198" y2="278" strokeWidth="2.5" opacity="0.85" />
        <line x1="210" y1="226" x2="215" y2="273" strokeWidth="2.5" opacity="0.85" />

        {/* Hooves */}
        <line x1="136" y1="275" x2="130" y2="278" strokeWidth="2" opacity="0.7" />
        <line x1="136" y1="275" x2="140" y2="278" strokeWidth="2" opacity="0.7" />
        <line x1="155" y1="280" x2="149" y2="283" strokeWidth="2" opacity="0.7" />
        <line x1="155" y1="280" x2="159" y2="283" strokeWidth="2" opacity="0.7" />
        <line x1="198" y1="278" x2="192" y2="281" strokeWidth="2" opacity="0.7" />
        <line x1="198" y1="278" x2="202" y2="281" strokeWidth="2" opacity="0.7" />
        <line x1="215" y1="273" x2="209" y2="276" strokeWidth="2" opacity="0.7" />
        <line x1="215" y1="273" x2="219" y2="276" strokeWidth="2" opacity="0.7" />

        {/* Tail */}
        <path d="M102 200 Q88 192 91 180 Q99 186 102 196" strokeWidth="1.8" opacity="0.75" />

        {/* Back */}
        <path d="M108 182 Q170 162 232 175" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
      </g>

      {/* Glowing nose */}
      <circle cx="250" cy="131" r="5" fill="#e8a090" filter="url(#noseGlow)" opacity="0.95" />
      <circle cx="250" cy="131" r="3" fill="#ffc0b0" opacity="0.98" />

      {/* Light dots along body (warm white LED lights) */}
      {[
        [120, 205], [138, 198], [155, 193], [170, 191], [186, 193],
        [200, 198], [215, 205], [160, 218], [182, 220], [145, 220],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={3}
            fill={["#ffe090","#a0d8ff","#ffb0b0","#b0ffc0"][i % 4]}
            opacity={0.85}
          />
          <circle cx={x} cy={y} r={5}
            fill={["#ffe090","#a0d8ff","#ffb0b0","#b0ffc0"][i % 4]}
            opacity={0.2}
          />
        </g>
      ))}

      {/* Ground string of lights */}
      {Array.from({ length: 14 }, (_, i) => (
        <g key={i}>
          <circle cx={55 + i * 17} cy={290} r={3.5}
            fill={["#ffd880","#90c8ff","#ffb0c0","#90ffb0"][i % 4]}
            opacity={0.88}
          />
          <circle cx={55 + i * 17} cy={290} r={6}
            fill={["#ffd880","#90c8ff","#ffb0c0","#90ffb0"][i % 4]}
            opacity={0.18}
          />
        </g>
      ))}

      {/* Wire connecting lights */}
      <path d="M55 290 Q63 284 72 290 Q80 296 89 290 Q97 284 106 290"
        fill="none" stroke="#c8dcd8" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}
