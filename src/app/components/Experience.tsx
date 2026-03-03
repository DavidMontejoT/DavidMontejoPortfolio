import { GlassCard } from "./GlassCard";
import { SectionLabel } from "./Architecture";

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const experiences = [
  {
    id: "halltec",
    company: "HALLTEC",
    role: "Backend Software Developer",
    period: "Aug 2024 – Feb 2026",
    location: "Bogotá, Colombia",
    core: "Java · Spring Boot 3.2 · PostgreSQL",
    summary:
      "Designed and owned the complete backend architecture for a production-grade electronic invoicing system — from schema design to CI/CD pipeline.",
    systemLabel: "Electronic Invoicing System",
    layers: [
      {
        label: "API Layer",
        color: "#0099FF",
        items: [
          "REST API — Spring Boot 3.2",
          "Swagger / OpenAPI Docs",
          "Bean Validation",
          "Global Exception Handling",
        ],
      },
      {
        label: "Auth & Security",
        color: "#6366F1",
        items: [
          "JWT Authentication",
          "Role-Based Access Control",
          "Secure Token Rotation",
        ],
      },
      {
        label: "Data & Persistence",
        color: "#10B981",
        items: [
          "PostgreSQL — normalized schema",
          "JPA Query Optimization",
          "Flyway Migrations",
          "Caching Strategies",
        ],
      },
      {
        label: "Integrations & Ops",
        color: "#F59E0B",
        items: [
          "External Invoicing Validation API",
          "CI/CD on Render",
          "Production Deployment",
        ],
      },
    ],
    decisions: [
      {
        icon: "⚙️",
        title: "Microservices Architecture",
        desc: "Decomposed invoicing domain into bounded contexts to isolate validation, auth, and data concerns independently.",
      },
      {
        icon: "🗄️",
        title: "Schema-First Design",
        desc: "Flyway-managed migrations ensured reproducible schema evolution across all environments with zero drift.",
      },
      {
        icon: "🔐",
        title: "Stateless Auth",
        desc: "JWT with RBAC guards kept the service stateless and horizontally scalable from day one.",
      },
    ],
    tags: ["Java", "Spring Boot 3.2", "PostgreSQL", "JWT", "Flyway", "Swagger", "CI/CD", "REST APIs"],
  },
  {
    id: "bling",
    company: "BLING",
    role: "Backend Software Developer",
    period: "Feb 2023 – Jul 2024",
    location: "Bogotá, Colombia",
    core: "Java · Spring Boot · MongoDB · Redis · RabbitMQ",
    summary:
      "Built and scaled microservices for a high-traffic e-commerce platform, contributed to monolith-to-microservices migration, and drove engineering quality through mentorship and testing standards.",
    systemLabel: "E-commerce Distributed Platform",
    layers: [
      {
        label: "Service Mesh",
        color: "#0099FF",
        items: [
          "Java Spring Boot Microservices",
          "Golang high-performance services",
          "Circuit Breaker pattern",
        ],
      },
      {
        label: "Messaging & Events",
        color: "#8B5CF6",
        items: [
          "Event-Driven Architecture",
          "RabbitMQ message broker",
          "Async decoupled producers/consumers",
        ],
      },
      {
        label: "Data Layer",
        color: "#10B981",
        items: [
          "MongoDB — document store",
          "Redis — distributed cache",
          "High-performance data patterns",
        ],
      },
      {
        label: "Quality & Leadership",
        color: "#F59E0B",
        items: [
          "JUnit 5 + Mockito testing strategy",
          "Code reviews & standards",
          "Junior developer mentorship",
        ],
      },
    ],
    decisions: [
      {
        icon: "🔄",
        title: "Monolith → Microservices",
        desc: "Participated in the full decomposition process, identifying bounded contexts and defining clear service contracts during migration.",
      },
      {
        icon: "⚡",
        title: "Resilience with Circuit Breaker",
        desc: "Applied Circuit Breaker pattern to prevent cascading failures across dependent services under high-traffic conditions.",
      },
      {
        icon: "📨",
        title: "Event-Driven Decoupling",
        desc: "Used RabbitMQ to decouple order, inventory, and notification services — enabling independent scaling per domain.",
      },
    ],
    tags: ["Java", "Spring Boot", "MongoDB", "Redis", "RabbitMQ", "Golang", "JUnit 5", "Mockito", "Circuit Breaker", "EDA"],
  },
];

/* ─── Component ─────────────────────────────────────────────────────────────── */

export function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 40%, rgba(0,153,255,0.09) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <SectionLabel>Professional Experience</SectionLabel>
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
          Systems I've Engineered
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#6B7280",
            fontSize: "1rem",
            lineHeight: 1.7,
            maxWidth: "520px",
            marginBottom: "60px",
          }}
        >
          Each engagement viewed as a system design challenge — identifying
          bounded contexts, choosing the right data stores, and building for
          reliability at scale.
        </p>

        {/* Core expertise badge */}
        <div className="flex items-center gap-3 mb-12">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(0,153,255,0.1)",
              border: "1px solid rgba(0,153,255,0.25)",
              borderRadius: "999px",
              padding: "6px 18px 6px 10px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#0099FF",
                boxShadow: "0 0 8px rgba(0,153,255,0.6)",
              }}
            />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "0.82rem",
                color: "#0099FF",
                letterSpacing: "0.04em",
              }}
            >
              Core expertise: Java · Spring Boot · Microservices
            </span>
          </div>
        </div>

        {/* Experience cards */}
        <div className="flex flex-col gap-10">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={exp.id} exp={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Experience Card ────────────────────────────────────────────────────────── */

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  return (
    <GlassCard className="p-0 overflow-hidden">
      {/* ── Card header ── */}
      <div
        className="px-4 sm:px-6 md:px-8 pt-6 sm:pt-7 md:pt-8 pb-5 sm:pb-6"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.5)" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          {/* Company info */}
          <div className="flex items-start gap-3 sm:gap-4">
            <CompanyBadge letter={exp.company[0]} index={index} />
            <div className="flex-1">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <h3
                  className="text-lg sm:text-xl md:text-[1.35rem]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 800,
                    color: "#111827",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {exp.company}
                </h3>
                <span
                  className="text-[0.7rem] sm:text-[0.75rem]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    color: "#9CA3AF",
                    background: "rgba(0,0,0,0.05)",
                    padding: "2px 8px sm:px-10",
                    borderRadius: "999px",
                  }}
                >
                  {exp.period}
                </span>
              </div>
              <div
                className="text-sm sm:text-[0.9rem]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  color: "#6B7280",
                  marginTop: "2px",
                }}
              >
                {exp.role} · {exp.location}
              </div>
              <div
                className="text-xs sm:text-[0.78rem]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  color: "#0099FF",
                  marginTop: "5px sm:mt-6px",
                  letterSpacing: "0.03em",
                }}
              >
                {exp.core}
              </div>
            </div>
          </div>

          {/* System label */}
          <div
            className="text-xs sm:text-[0.82rem]"
            style={{
              background: "rgba(0,0,0,0.04)",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: "10px",
              padding: "6px 10px sm:px-8 sm:py-[8px]",
              flexShrink: 0,
            }}
          >
            <div
              className="text-[0.6rem] sm:text-[0.65rem]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                color: "#9CA3AF",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "2px",
              }}
            >
              System
            </div>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                color: "#374151",
              }}
            >
              {exp.systemLabel}
            </div>
          </div>
        </div>

        <p
          className="text-sm sm:text-[0.9rem]"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#6B7280",
            lineHeight: 1.7,
            marginTop: "12px sm:mt-16px",
            maxWidth: "100%",
          }}
        >
          {exp.summary}
        </p>
      </div>

      {/* ── Architecture breakdown ── */}
      <div className="px-4 sm:px-6 md:px-8 py-5 sm:py-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.5)" }}>
        <div
          className="text-[0.68rem] sm:text-[0.72rem]"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            color: "#9CA3AF",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: "12px sm:mb-16px",
          }}
        >
          System Architecture Breakdown
        </div>

        {/* Layer diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {exp.layers.map((layer, li) => (
            <div
              key={layer.label}
              style={{
                background: "rgba(255,255,255,0.4)",
                border: `1px solid ${layer.color}28`,
                borderTop: `3px solid ${layer.color}`,
                borderRadius: "10px",
                padding: "10px 12px sm:py-3.5 sm:px-3.5",
                position: "relative",
              }}
            >
              {/* Layer number */}
              <div
                className="text-[0.6rem] sm:text-[0.65rem]"
                style={{
                  position: "absolute",
                  top: "8px sm:top-10px",
                  right: "8px sm:right-10px",
                  width: "16px sm:w-5",
                  height: "16px sm:h-5",
                  borderRadius: "6px",
                  background: `${layer.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 800,
                  color: layer.color,
                }}
              >
                L{li + 1}
              </div>
              <div
                className="text-[0.68rem] sm:text-[0.72rem]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  color: layer.color,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "8px sm:mb-2.5",
                }}
              >
                {layer.label}
              </div>
              <ul className="flex flex-col gap-1 sm:gap-1.5">
                {layer.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-1.5 sm:gap-2"
                  >
                    <span
                      className="mt-1.5 sm:mt-6px"
                      style={{
                        width: "4px sm:w-5px",
                        height: "4px sm:h-5px",
                        borderRadius: "50%",
                        background: layer.color,
                        flexShrink: 0,
                        opacity: 0.7,
                      }}
                    />
                    <span
                      className="text-xs sm:text-[0.78rem]"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "#4B5563",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Connector arrows between layers (desktop only) */}
        <div className="hidden lg:flex items-center justify-between px-6 mt-2" style={{ opacity: 0.35 }}>
          {exp.layers.slice(0, -1).map((_, i) => (
            <div key={i} className="flex-1 flex items-center justify-center">
              <svg width="32" height="12" viewBox="0 0 32 12">
                <path d="M0 6 H28 M22 1 L28 6 L22 11" stroke="#0099FF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* ── Key architectural decisions ── */}
      <div className="px-4 sm:px-6 md:px-8 pt-5 sm:pt-6 pb-6 sm:pb-7">
        <div
          className="text-[0.68rem] sm:text-[0.72rem]"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            color: "#9CA3AF",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: "12px sm:mb-14px",
          }}
        >
          Key Engineering Decisions
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {exp.decisions.map((d) => (
            <div
              key={d.title}
              style={{
                background: "rgba(255,255,255,0.35)",
                border: "1px solid rgba(255,255,255,0.55)",
                borderRadius: "10px",
                padding: "12px sm:py-3.5 sm:px-4",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base sm:text-1rem">{d.icon}</span>
                <span
                  className="text-sm sm:text-[0.85rem]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    color: "#111827",
                  }}
                >
                  {d.title}
                </span>
              </div>
              <p
                className="text-xs sm:text-[0.78rem]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#6B7280",
                  lineHeight: 1.6,
                }}
              >
                {d.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
          {exp.tags.map((t) => (
            <span
              key={t}
              className="text-[0.66rem] sm:text-[0.7rem] px-2 sm:px-2.5"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                color: t === "Java" || t === "Spring Boot" || t === "Spring Boot 3.2"
                  ? "#0099FF"
                  : "#374151",
                background: t === "Java" || t === "Spring Boot" || t === "Spring Boot 3.2"
                  ? "rgba(0,153,255,0.1)"
                  : "rgba(0,0,0,0.05)",
                border: t === "Java" || t === "Spring Boot" || t === "Spring Boot 3.2"
                  ? "1px solid rgba(0,153,255,0.25)"
                  : "1px solid rgba(0,0,0,0.07)",
                padding: "4px 10px",
                borderRadius: "999px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

/* ─── Company Badge ──────────────────────────────────────────────────────────── */

function CompanyBadge({ letter, index }: { letter: string; index: number }) {
  const gradients = [
    "linear-gradient(135deg, #0099FF, #0066CC)",
    "linear-gradient(135deg, #6366F1, #4338CA)",
  ];
  return (
    <div
      className="w-10 h-10 sm:w-[44px] sm:h-[44px]"
      style={{
        borderRadius: "12px",
        background: gradients[index % gradients.length],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
        fontWeight: 800,
        color: "#fff",
        flexShrink: 0,
        boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
        letterSpacing: "-0.02em",
      }}
    >
      <span className="text-lg sm:text-[1.1rem]">{letter}</span>
    </div>
  );
}
