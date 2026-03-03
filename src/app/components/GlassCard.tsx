import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

export function GlassCard({ children, className = "", highlight = true }: GlassCardProps) {
  return (
    <div
      className={`relative rounded-2xl ${className}`}
      style={{
        background: "rgba(255, 255, 255, 0.38)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.55)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
      }}
    >
      {highlight && (
        <div
          className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.95), transparent)",
          }}
        />
      )}
      {children}
    </div>
  );
}
