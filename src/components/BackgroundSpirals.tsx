import React from "react";

const points = [
  { x: -0.2, y: 0.20, id: "p0" },
  { x: 0.15, y: 0.32, id: "p1" },
  { x: 0.5, y: 0.20, id: "p2" },
  { x: 0.75, y: 0.32, id: "p3" },
  { x: 0.9, y: 0.20, id: "p4" },
  { x: 1.2, y: 0.32, id: "p5" },
  { x: 1.2, y: 0.6, id: "p6" },
  { x: 0.8, y: 0.80, id: "p7" },
  { x: 0.6, y: 0.70, id: "p8" },
  { x: 0.4, y: 0.80, id: "p9" },
  { x: 0.2, y: 0.75, id: "p10" },
  { x: -0.3, y: 0.5, id: "p11" }
];

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 0],
  [2, 8], [3, 7], [1, 9], [5, 7], [0, 10], [11, 4],
];

const BackgroundSpirals = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
      style={{ zIndex: 0, top: 0, left: 0 }}
    >
      <svg
        viewBox="0 0 1 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", width: "150%", height: "150%", top: "-25%", left: "-25%" }}
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.008" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Linhas conectando pontos */}
        {connections.map(([a, b]) => (
          <line
            key={`line-${a}-${b}`}
            x1={points[a].x}
            y1={points[a].y}
            x2={points[b].x}
            y2={points[b].y}
            stroke="#EF4444"
            strokeWidth="0.003"
            opacity="0.5"
          />
        ))}

        {/* Pontos com glow */}
        {points.map((p) => (
          <g key={p.id}>
            <circle cx={p.x} cy={p.y} r="0.015" fill="#EF4444" filter="url(#glow)" />
            <circle cx={p.x} cy={p.y} r="0.004" fill="#fff" opacity="0.6" />
          </g>
        ))}

        {/* Pontos adicionais */}
        <circle cx="0.4" cy="0.23" r="0.002" fill="#EF4444" opacity="0.4" />
        <circle cx="0.7" cy="0.4" r="0.002" fill="#EF4444" opacity="0.4" />
        <circle cx="1.0" cy="0.4" r="0.002" fill="#EF4444" opacity="0.4" />
        <circle cx="0.55" cy="0.8" r="0.002" fill="#EF4444" opacity="0.4" />
        <circle cx="1.1" cy="0.7" r="0.002" fill="#EF4444" opacity="0.4" />
      </svg>
    </div>
  );
};

export default BackgroundSpirals;
