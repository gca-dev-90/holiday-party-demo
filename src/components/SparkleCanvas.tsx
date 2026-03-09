"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  r: number;
  baseOpacity: number;
  speed: number;
  phase: number;
  size: number;
  type: "dot" | "cross";
}

export default function SparkleCanvas({ size = 520 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    canvas.width = size;
    canvas.height = size;

    const cx = size / 2;
    const cy = size / 2;
    const radius = size * 0.45;

    // Generate particles in a circular region
    const particles: Particle[] = Array.from({ length: 80 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const dist = (0.2 + Math.random() * 0.8) * radius;
      return {
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        r: Math.random() * 2.2 + 0.4,
        baseOpacity: Math.random() * 0.7 + 0.15,
        speed: Math.random() * 0.025 + 0.006,
        phase: Math.random() * Math.PI * 2,
        size: Math.random() * 3 + 1,
        type: i % 5 === 0 ? "cross" : "dot",
      };
    });

    let t = 0;
    let rafId: number;

    const draw = () => {
      t += 0.025;
      ctx.clearRect(0, 0, size, size);

      particles.forEach((p) => {
        const alpha = p.baseOpacity * (0.4 + 0.6 * Math.abs(Math.sin(t * p.speed * 40 + p.phase)));

        ctx.save();
        ctx.globalAlpha = alpha;

        if (p.type === "cross") {
          // 4-pointed star sparkle
          ctx.strokeStyle = "rgba(255,255,255,0.95)";
          ctx.lineWidth = 1;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(p.x - p.size, p.y);
          ctx.lineTo(p.x + p.size, p.y);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - p.size);
          ctx.lineTo(p.x, p.y + p.size);
          ctx.stroke();
        } else {
          ctx.fillStyle = "rgba(255,255,255,0.95)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      rafId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafId);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: size,
        height: size,
        pointerEvents: "none",
      }}
    />
  );
}
