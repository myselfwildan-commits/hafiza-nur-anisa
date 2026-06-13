import { useMemo } from "react";

export default function FallingSakura() {
  const petals = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        duration: `${10 + Math.random() * 10}s`,
        delay: `${Math.random() * 5}s`,
        size: `${16 + Math.random() * 12}px`,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="sakura"
          style={{
            left: petal.left,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
            fontSize: petal.size,
          }}
        >
          🌸
        </span>
      ))}
    </div>
  );
}