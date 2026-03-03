import { SectionLabel } from "./Architecture";

export function CurrentFocus() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,153,255,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Large glass banner */}
        <div
          className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{
            background: "rgba(255,255,255,0.45)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: "1px solid rgba(255,255,255,0.65)",
            boxShadow: "0 12px 48px rgba(0,153,255,0.1), inset 0 1px 0 rgba(255,255,255,0.95)",
          }}
        >
          <div className="flex flex-col gap-5 max-w-xl">
            <SectionLabel>Current Focus</SectionLabel>
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                color: "#111827",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Improving system design &amp; building scalable SaaS architectures.
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                color: "#6B7280",
                lineHeight: 1.7,
              }}
            >
              Diving deep into distributed systems patterns — event-driven architectures,
              CQRS, and multi-tenant SaaS backends. Currently exploring message queues
              with RabbitMQ and caching strategies with Redis.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:gap-3 flex-shrink-0 w-full sm:w-auto">
            {[
              "System Design Patterns",
              "Event-Driven Architecture",
              "Multi-tenant SaaS",
              "Redis & Caching",
              "Message Queues",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 sm:gap-3"
              >
                <div
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2"
                  style={{
                    borderRadius: "50%",
                    background: "#0099FF",
                    boxShadow: "0 0 8px rgba(0,153,255,0.5)",
                    flexShrink: 0,
                  }}
                />
                <span
                  className="text-sm sm:text-[0.9rem]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#374151",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
