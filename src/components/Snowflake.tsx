export default function Snowflake({ size = 520 }: { size?: number }) {
  const cx = size / 2;
  const cy = size / 2;
  const armLength = size * 0.38;
  const branchLen1 = size * 0.11;
  const branchLen2 = size * 0.085;

  const arms = [0, 60, 120, 180, 240, 300];

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <defs>
        {/* Main snowflake gradient - white/silver */}
        <linearGradient id="armGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.98" />
          <stop offset="50%"  stopColor="#e8f2f0" stopOpacity="0.92" />
          <stop offset="100%" stopColor="#cde3df" stopOpacity="0.80" />
        </linearGradient>

        <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="1"   />
          <stop offset="70%"  stopColor="#e0efec" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#c8deda" stopOpacity="0.7" />
        </radialGradient>

        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0"   />
        </radialGradient>

        {/* Drop shadow */}
        <filter id="armShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="10"
            floodColor="#7ab5ac" floodOpacity="0.30" />
        </filter>

        {/* Soft glow filter */}
        <filter id="centerGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Sparkle filter */}
        <filter id="sparkle" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Six arms ── */}
      {arms.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const tipX = cx + Math.cos(rad - Math.PI / 2) * armLength;
        const tipY = cy + Math.sin(rad - Math.PI / 2) * armLength;

        // Branch positions along arm (as fractions)
        const b1f = 0.38; // inner branches
        const b2f = 0.62; // outer branches

        const b1x = cx + Math.cos(rad - Math.PI / 2) * armLength * b1f;
        const b1y = cy + Math.sin(rad - Math.PI / 2) * armLength * b1f;
        const b2x = cx + Math.cos(rad - Math.PI / 2) * armLength * b2f;
        const b2y = cy + Math.sin(rad - Math.PI / 2) * armLength * b2f;

        // Perpendicular direction for branches
        const perpRad = rad + Math.PI / 2;
        const cos45 = Math.cos(Math.PI / 4);
        const sin45 = Math.sin(Math.PI / 4);

        // Branch endpoints at 45° angle
        const branchAngle = Math.PI / 4;
        const b1Len = branchLen1;
        const b2Len = branchLen2;

        const arm = (
          <g key={angle} filter="url(#armShadow)">
            {/* Main arm shaft */}
            <line
              x1={cx} y1={cy}
              x2={tipX} y2={tipY}
              stroke="url(#armGrad)"
              strokeWidth={size * 0.016}
              strokeLinecap="round"
            />

            {/* Tip diamond */}
            <polygon
              points={`
                ${tipX},${tipY}
                ${tipX + Math.cos(rad + Math.PI / 2 - Math.PI / 2) * size * 0.012},
                ${tipY + Math.sin(rad + Math.PI / 2 - Math.PI / 2) * size * 0.012}
                ${tipX + Math.cos(rad - Math.PI / 2) * size * 0.03},
                ${tipY + Math.sin(rad - Math.PI / 2) * size * 0.03}
                ${tipX - Math.cos(rad + Math.PI / 2 - Math.PI / 2) * size * 0.012},
                ${tipY - Math.sin(rad + Math.PI / 2 - Math.PI / 2) * size * 0.012}
              `}
              fill="url(#armGrad)"
            />

            {/* Inner branches (pair at 45°) */}
            {[-1, 1].map((side) => {
              const bRad = rad - Math.PI / 2 + side * branchAngle;
              return (
                <line
                  key={side}
                  x1={b1x} y1={b1y}
                  x2={b1x + Math.cos(bRad) * b1Len}
                  y2={b1y + Math.sin(bRad) * b1Len}
                  stroke="url(#armGrad)"
                  strokeWidth={size * 0.011}
                  strokeLinecap="round"
                />
              );
            })}

            {/* Outer branches (pair at 45°) */}
            {[-1, 1].map((side) => {
              const bRad = rad - Math.PI / 2 + side * branchAngle;
              return (
                <line
                  key={side}
                  x1={b2x} y1={b2y}
                  x2={b2x + Math.cos(bRad) * b2Len}
                  y2={b2y + Math.sin(bRad) * b2Len}
                  stroke="url(#armGrad)"
                  strokeWidth={size * 0.009}
                  strokeLinecap="round"
                />
              );
            })}
          </g>
        );
        return arm;
      })}

      {/* Center hexagon */}
      <polygon
        points={[0,1,2,3,4,5].map((i) => {
          const a = (i * 60 * Math.PI) / 180;
          return `${cx + Math.cos(a) * size * 0.068},${cy + Math.sin(a) * size * 0.068}`;
        }).join(" ")}
        fill="url(#centerGrad)"
        filter="url(#centerGlow)"
      />

      {/* Center dot */}
      <circle cx={cx} cy={cy} r={size * 0.032} fill="white" opacity="0.98" />

      {/* Glow halo */}
      <circle cx={cx} cy={cy} r={size * 0.12} fill="url(#glowGrad)" />

      {/* Sparkle dots scattered around */}
      {[
        [0.33, 0.24], [0.66, 0.22], [0.28, 0.50], [0.72, 0.48],
        [0.35, 0.74], [0.65, 0.72], [0.50, 0.16], [0.20, 0.38],
        [0.80, 0.38], [0.42, 0.84], [0.58, 0.84], [0.50, 0.88],
        [0.24, 0.62], [0.76, 0.60], [0.18, 0.28], [0.82, 0.26],
      ].map(([fx, fy], i) => (
        <circle
          key={i}
          cx={fx * size}
          cy={fy * size}
          r={i % 3 === 0 ? size * 0.006 : size * 0.004}
          fill="white"
          opacity={0.65 + (i % 4) * 0.08}
          filter="url(#sparkle)"
        />
      ))}

      {/* 4-pointed star sparkles at arm tips */}
      {arms.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const tx = cx + Math.cos(rad - Math.PI / 2) * armLength;
        const ty = cy + Math.sin(rad - Math.PI / 2) * armLength;
        const s = size * 0.025;
        return (
          <g key={`star-${angle}`} opacity="0.85">
            <line x1={tx - s} y1={ty} x2={tx + s} y2={ty}
              stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <line x1={tx} y1={ty - s} x2={tx} y2={ty + s}
              stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        );
      })}
    </svg>
  );
}
