export default function DrinksIllustration() {
  return (
    <svg
      viewBox="0 0 340 340"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <defs>
        <radialGradient id="drinkGlow" cx="50%" cy="45%" r="55%">
          <stop offset="0%"   stopColor="#d4c070" stopOpacity="0.22" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="glassGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="glass1clip">
          <path d="M118 88 L148 88 L140 160 L126 160 Z" />
        </clipPath>
        <clipPath id="glass2clip">
          <path d="M192 88 L222 88 L214 160 L200 160 Z" />
        </clipPath>
      </defs>

      {/* Background */}
      <rect width="340" height="340" fill="#2c3e6b" />

      {/* Ambient glow */}
      <ellipse cx="170" cy="155" rx="130" ry="95" fill="url(#drinkGlow)" />

      {/* ── Glass 1 (left) ── */}
      <g filter="url(#glassGlow)">
        {/* Bowl */}
        <path d="M118 88 L148 88 L140 155 Q133 165 126 155 Z"
          fill="rgba(200,225,235,0.12)"
          stroke="#c0d8d4" strokeWidth="2" strokeLinejoin="round" />
        {/* Champagne liquid */}
        <path d="M119 96 L147 96 L143 130 Q136 138 126 130 L122 96 Z"
          clipPath="url(#glass1clip)"
          fill="rgba(210,185,80,0.28)" />
        {/* Stem */}
        <line x1="133" y1="155" x2="133" y2="188" stroke="#c0d8d4" strokeWidth="2.5" />
        {/* Base */}
        <line x1="116" y1="188" x2="150" y2="188" stroke="#c0d8d4" strokeWidth="2.5" strokeLinecap="round" />
        {/* Rim line */}
        <line x1="118" y1="88" x2="148" y2="88" stroke="#c0d8d4" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* ── Glass 2 (right) ── */}
      <g filter="url(#glassGlow)">
        {/* Bowl */}
        <path d="M192 88 L222 88 L214 155 Q207 165 200 155 Z"
          fill="rgba(200,225,235,0.12)"
          stroke="#c0d8d4" strokeWidth="2" strokeLinejoin="round" />
        {/* Champagne liquid */}
        <path d="M193 96 L221 96 L217 130 Q210 138 200 130 L196 96 Z"
          clipPath="url(#glass2clip)"
          fill="rgba(210,185,80,0.28)" />
        {/* Stem */}
        <line x1="207" y1="155" x2="207" y2="188" stroke="#c0d8d4" strokeWidth="2.5" />
        {/* Base */}
        <line x1="190" y1="188" x2="224" y2="188" stroke="#c0d8d4" strokeWidth="2.5" strokeLinecap="round" />
        {/* Rim line */}
        <line x1="192" y1="88" x2="222" y2="88" stroke="#c0d8d4" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Clink star */}
      <g opacity="0.9">
        <line x1="170" y1="76" x2="170" y2="88" stroke="#e8d880" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="164" y1="82" x2="176" y2="82" stroke="#e8d880" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="165" y1="77" x2="175" y2="87" stroke="#e8d880" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="175" y1="77" x2="165" y2="87" stroke="#e8d880" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="170" cy="82" r="2.5" fill="#ffe880" opacity="0.9" />
      </g>

      {/* Bubbles in glass 1 */}
      {[[127,140],[130,118],[124,128],[136,108],[131,150]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={1.8} fill="rgba(255,245,180,0.75)" />
      ))}

      {/* Bubbles in glass 2 */}
      {[[201,140],[204,118],[198,128],[210,108],[205,150]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={1.8} fill="rgba(255,245,180,0.75)" />
      ))}

      {/* ── Hands / arms reaching up (silhouette style) ── */}
      {/* Left hand group */}
      <g opacity="0.55">
        <path d="M60 310 Q80 270 100 240 Q110 225 120 210 Q126 200 133 192"
          fill="none" stroke="rgba(175,160,145,0.8)" strokeWidth="10" strokeLinecap="round" />
        <path d="M90 310 Q105 275 118 248 Q126 232 133 210 Q135 200 133 192"
          fill="none" stroke="rgba(165,150,135,0.7)" strokeWidth="7" strokeLinecap="round" />
        <path d="M115 310 Q122 285 128 260 Q131 240 133 215 Q133 205 133 192"
          fill="none" stroke="rgba(155,140,125,0.6)" strokeWidth="5" strokeLinecap="round" />
      </g>

      {/* Right hand group */}
      <g opacity="0.55">
        <path d="M280 310 Q260 270 240 240 Q230 225 220 210 Q214 200 207 192"
          fill="none" stroke="rgba(175,160,145,0.8)" strokeWidth="10" strokeLinecap="round" />
        <path d="M250 310 Q235 275 222 248 Q214 232 207 210 Q205 200 207 192"
          fill="none" stroke="rgba(165,150,135,0.7)" strokeWidth="7" strokeLinecap="round" />
        <path d="M225 310 Q218 285 212 260 Q209 240 207 215 Q207 205 207 192"
          fill="none" stroke="rgba(155,140,125,0.6)" strokeWidth="5" strokeLinecap="round" />
      </g>

      {/* More hands reaching for atmosphere */}
      <g opacity="0.35">
        <path d="M30 310 Q55 280 78 255 Q90 240 105 222"
          fill="none" stroke="rgba(175,160,145,0.9)" strokeWidth="9" strokeLinecap="round" />
        <path d="M310 310 Q285 280 262 255 Q250 240 235 222"
          fill="none" stroke="rgba(175,160,145,0.9)" strokeWidth="9" strokeLinecap="round" />
      </g>

      {/* Floating light orbs for atmosphere */}
      {[[80,200],[260,190],[50,250],[295,245],[155,310],[185,305]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={i%2===0?5:4}
          fill={["rgba(255,220,100,0.5)","rgba(180,210,255,0.5)","rgba(255,180,180,0.4)"][i%3]}
        />
      ))}
    </svg>
  );
}
