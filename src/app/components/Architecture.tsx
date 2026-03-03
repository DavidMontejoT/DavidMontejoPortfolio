import { GlassCard } from "./GlassCard";

const pillars = [
  {
    icon: "🔗",
    title: "REST API with Express",
    description:
      "Layered routing structure with middleware chains for validation, authentication, and error handling. Each endpoint follows resource-oriented design.",
    tags: ["Express", "Middleware", "REST"],
  },
  {
    icon: "🔐",
    title: "JWT Authentication",
    description:
      "Stateless auth with access/refresh token rotation. Role-based guards at route level ensure fine-grained permission control.",
    tags: ["JWT", "RBAC", "Security"],
  },
  {
    icon: "🗄️",
    title: "PostgreSQL Integration",
    description:
      "Relational schema design with normalized tables, indexed queries, and transaction management for data consistency.",
    tags: ["PostgreSQL", "Sequelize", "Migrations"],
  },
  {
    icon: "🏗️",
    title: "MVC Pattern",
    description:
      "Clear separation of concerns: Models handle data logic, Controllers orchestrate flow, and Views (or API responses) stay thin.",
    tags: ["MVC", "Clean Code", "DRY"],
  },
  {
    icon: "🚀",
    title: "Deployment-Ready Structure",
    description:
      "Environment-aware configs, health check endpoints, graceful shutdown handling, and Dockerized containers for consistent CI/CD.",
    tags: ["Docker", "CI/CD", "DevOps"],
  },
];

export function Architecture() {
  return (
    <section id="architecture" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,153,255,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionLabel>Architecture</SectionLabel>
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
          Systems I've Built
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#6B7280",
            fontSize: "1rem",
            lineHeight: 1.7,
            maxWidth: "480px",
            marginBottom: "48px",
          }}
        >
          Every system decision is intentional — optimizing for scalability,
          maintainability, and developer experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <GlassCard key={p.title} className="p-6 flex flex-col gap-3">
              <span style={{ fontSize: "1.8rem" }}>{p.icon}</span>
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#111827",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  color: "#6B7280",
                  lineHeight: 1.65,
                  flex: 1,
                }}
              >
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "#0099FF",
                      background: "rgba(0,153,255,0.1)",
                      padding: "3px 10px",
                      borderRadius: "999px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}

          {/* Diagram-style card */}
          <GlassCard className="p-4 sm:p-5 md:p-6 md:col-span-2 lg:col-span-1 flex flex-col justify-between gap-4">
            <div>
              <h3
                className="text-sm sm:text-[0.95rem]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  color: "#111827",
                  marginBottom: "12px sm:mb-16px",
                }}
              >
                Request Lifecycle
              </h3>
              {[
                "Client Request",
                "Auth Middleware",
                "Controller",
                "Service Layer",
                "Database (PostgreSQL)",
              ].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-1.5 sm:gap-2">
                  <div
                    className="flex items-center gap-1.5 sm:gap-2"
                    style={{ width: "100%" }}
                  >
                    <div
                      className="w-6 h-6 sm:w-7 sm:h-7 text-xs sm:text-[0.7rem]"
                      style={{
                        borderRadius: "8px",
                        background:
                          i === 0
                            ? "#0099FF"
                            : "rgba(0,153,255,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        color: i === 0 ? "#fff" : "#0099FF",
                        fontFamily: "Inter, sans-serif",
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </div>
                    <span
                      className="text-xs sm:text-[0.82rem]"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "#374151",
                        fontWeight: i === 0 ? 600 : 400,
                      }}
                    >
                      {step}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div
        style={{
          width: "28px",
          height: "3px",
          borderRadius: "2px",
          background: "#0099FF",
        }}
      />
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "0.75rem",
          color: "#0099FF",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
    </div>
  );
}
