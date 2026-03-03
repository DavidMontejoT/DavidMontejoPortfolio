import { GlassCard } from "./GlassCard";
import { SectionLabel } from "./Architecture";

const thoughts = [
  {
    topic: "REST vs GraphQL",
    take: "REST wins for most APIs.",
    body: "GraphQL shines for complex client-driven queries and federated graphs. But REST's simplicity, cacheability, and tooling ecosystem make it the default choice for product APIs — unless over-fetching becomes a real bottleneck.",
  },
  {
    topic: "Monolith vs Microservices",
    take: "Start monolith. Split when you feel the seams.",
    body: "Premature decomposition creates distributed systems complexity without the scale to justify it. A well-structured modular monolith enables fast iteration, and natural service boundaries emerge from real usage patterns.",
  },
  {
    topic: "Database Optimization",
    take: "Index what you query. Explain what you run.",
    body: "Most slow queries come from missing indexes or N+1 patterns. Before reaching for caching layers or read replicas, run EXPLAIN ANALYZE, add targeted indexes, and fix query structure. Optimization should be measured, not assumed.",
  },
  {
    topic: "Clean Architecture",
    take: "Dependency direction matters more than folder names.",
    body: "The real goal is having your business logic not depend on frameworks, databases, or external services. Ports and Adapters, Hexagonal, or layered MVC — the pattern matters less than the discipline of keeping the core pure.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 60%, rgba(0,153,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionLabel>Technical Philosophy</SectionLabel>
        <h2
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "#111827",
            letterSpacing: "-0.02em",
            marginTop: "12px",
            marginBottom: "8px",
          }}
        >
          How I Think About Systems
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#6B7280",
            fontSize: "1rem",
            lineHeight: 1.7,
            maxWidth: "480px",
            marginBottom: "52px",
          }}
        >
          Opinions backed by experience, not hype. These principles guide every
          architectural decision I make.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {thoughts.map((t) => (
            <GlassCard key={t.topic} className="p-5 sm:p-6 md:p-7 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <span
                  className="text-[0.68rem] sm:text-[0.72rem]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    color: "#0099FF",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {t.topic}
                </span>
              </div>
              <p
                className="text-base sm:text-[1.05rem]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  color: "#111827",
                  lineHeight: 1.45,
                }}
              >
                "{t.take}"
              </p>
              <p
                className="text-sm sm:text-[0.875rem]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#6B7280",
                  lineHeight: 1.7,
                }}
              >
                {t.body}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
