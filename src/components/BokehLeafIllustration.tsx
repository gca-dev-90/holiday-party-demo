export default function BokehLeafIllustration() {
  // Bokeh circles - varied sizes, colours, positions
  const bokehCircles = [
    { cx: 42,  cy: 60,  r: 28, col: "rgba(255,240,180,0.14)", s: "rgba(255,240,180,0.28)" },
    { cx: 210, cy: 48,  r: 38, col: "rgba(200,225,255,0.12)", s: "rgba(200,225,255,0.24)" },
    { cx: 288, cy: 165, r: 30, col: "rgba(255,210,210,0.10)", s: "rgba(255,210,210,0.22)" },
    { cx: 25,  cy: 210, r: 22, col: "rgba(180,255,220,0.09)", s: "rgba(180,255,220,0.20)" },
    { cx: 168, cy: 265, r: 34, col: "rgba(255,240,180,0.13)", s: "rgba(255,240,180,0.26)" },
    { cx: 100, cy: 290, r: 20, col: "rgba(200,225,255,0.10)", s: "rgba(200,225,255,0.22)" },
    { cx: 258, cy: 295, r: 25, col: "rgba(255,210,180,0.11)", s: "rgba(255,210,180,0.23)" },
    { cx: 130, cy: 42,  r: 18, col: "rgba(180,255,220,0.10)", s: "rgba(180,255,220,0.20)" },
    { cx: 310, cy: 60,  r: 16, col: "rgba(255,240,180,0.11)", s: "rgba(255,240,180,0.22)" },
    { cx: 58,  cy: 148, r: 14, col: "rgba(200,225,255,0.09)", s: "rgba(200,225,255,0.18)" },
    { cx: 240, cy: 120, r: 20, col: "rgba(255,210,210,0.10)", s: "rgba(255,210,210,0.20)" },
    { cx: 170, cy: 170, r: 42, col: "rgba(255,240,180,0.10)", s: "rgba(255,240,180,0.18)" },
    { cx: 75,  cy: 318, r: 18, col: "rgba(180,255,220,0.08)", s: "rgba(180,255,220,0.16)" },
    { cx: 318, cy: 240, r: 14, col: "rgba(200,225,255,0.10)", s: "rgba(200,225,255,0.20)" },
    { cx: 195, cy: 315, r: 12, col: "rgba(255,210,210,0.09)", s: "rgba(255,210,210,0.18)" },
    { cx: 48,  cy: 265, r: 32, col: "rgba(255,240,180,0.08)", s: "rgba(255,240,180,0.14)" },
    { cx: 310, cy: 130, r: 10, col: "rgba(180,255,220,0.10)", s: "rgba(180,255,220,0.22)" },
  ];

  return (
    <svg
      viewBox="0 0 340 340"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <defs>
        <radialGradient id="leafGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="rgba(100,140,90,0.75)" />
          <stop offset="100%" stopColor="rgba(70,110,65,0.55)" />
        </radialGradient>
        <filter id="leafShadow">
          <feDropShadow dx="3" dy="5" stdDeviation="6" floodColor="#1a2a18" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Dark navy background */}
      <rect width="340" height="340" fill="#1e2f55" />

      {/* Bokeh circles */}
      {bokehCircles.map((c, i) => (
        <g key={i}>
          <circle cx={c.cx} cy={c.cy} r={c.r}
            fill={c.col} stroke={c.s} strokeWidth="1" />
          {/* Inner highlight */}
          <circle cx={c.cx - c.r * 0.25} cy={c.cy - c.r * 0.25}
            r={c.r * 0.3} fill="rgba(255,255,255,0.08)" />
        </g>
      ))}

      {/* ── Maple leaf ── */}
      <g transform="translate(170,170) rotate(-18)" filter="url(#leafShadow)">
        {/* Main leaf body */}
        <path
          d="M0,-88 C8,-72 22,-58 28,-44 C38,-44 50,-50 52,-42
             C44,-36 36,-30 38,-22 C50,-12 62,-8 60,0
             C50,2 40,-2 36,4 C40,18 46,28 38,34
             C30,28 24,18 14,20 C10,32 8,46 0,50
             C-8,46 -10,32 -14,20 C-24,18 -30,28 -38,34
             C-46,28 -40,18 -36,4 C-40,-2 -50,2 -60,0
             C-62,-8 -50,-12 -38,-22 C-36,-30 -44,-36 -52,-42
             C-50,-50 -38,-44 -28,-44 C-22,-58 -8,-72 0,-88 Z"
          fill="url(#leafGrad)"
          stroke="rgba(130,170,120,0.6)"
          strokeWidth="1.2"
        />

        {/* Central vein */}
        <line x1="0" y1="-82" x2="0" y2="45"
          stroke="rgba(160,200,150,0.45)" strokeWidth="1.2" />

        {/* Branch veins */}
        {[
          [-22, -48, -42, -58], [22, -48, 42, -58],
          [-32, -22, -52, -30], [32, -22, 52, -30],
          [-34, 0,  -54, -8],  [34, 0,  54, -8],
          [-30, 18, -50, 12],  [30, 18, 50, 12],
          [-10, 36, -26, 32],  [10, 36, 26, 32],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(160,200,150,0.32)" strokeWidth="0.9" />
        ))}
      </g>

      {/* Overlay warm bokeh dots on top of leaf for depth */}
      {[[140,130],[200,125],[155,210],[185,205],[170,90]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={7+(i%3)*3}
          fill={["rgba(255,230,120,0.16)","rgba(200,220,255,0.14)"][i%2]}
          stroke={["rgba(255,230,120,0.3)","rgba(200,220,255,0.28)"][i%2]}
          strokeWidth="0.8"
        />
      ))}
    </svg>
  );
}
