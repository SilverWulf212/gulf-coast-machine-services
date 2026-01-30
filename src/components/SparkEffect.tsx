"use client";

import { useEffect, useRef } from "react";

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export default function SparkEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const createSparks = (x: number, y: number) => {
      const sparkCount = 12 + Math.floor(Math.random() * 8);

      for (let i = 0; i < sparkCount; i++) {
        const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.5;
        const speed = 2 + Math.random() * 4;

        sparksRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 2,
          life: 1,
          maxLife: 0.6 + Math.random() * 0.4,
          size: 2 + Math.random() * 3,
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      createSparks(e.clientX, e.clientY);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        spark.vy += 0.15;
        spark.vx *= 0.98;
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.life -= 0.02;

        if (spark.life <= 0) return false;

        const alpha = spark.life / spark.maxLife;
        const size = spark.size * alpha;

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = `hsl(${30 + Math.random() * 15}, 100%, ${50 + alpha * 30}%)`;
        ctx.shadowColor = "#ff8c00";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return true;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("click", handleClick);
    animate();

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
}
