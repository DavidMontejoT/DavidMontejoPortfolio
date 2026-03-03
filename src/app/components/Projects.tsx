import { GlassCard } from "./GlassCard";
import { SectionLabel } from "./Architecture";

const projects = [
  {
    number: "01",
    title: "FactusApp – Electronic Invoicing System (DIAN Colombia)",
    tagline: "Java Spring Boot 3.2 · PostgreSQL · React 18",
    problem:
      "Build a compliant SaaS invoicing system integrated with DIAN Colombia through the Factus API, covering the full invoice lifecycle from issuance to validation.",
    architecture:
      "Spring Boot 3.2 REST backend with JWT-secured endpoints, PostgreSQL persistence, and direct Factus API integration. React 18 + Vite frontend deployed alongside the backend on Render.com.",
    challenges:
      "Coordinating real DIAN validation flows required strict request/response contracts, automated testing against the Factus sandbox, and complete Swagger/OpenAPI documentation for auditability.",
    stack: ["Java", "Spring Boot 3.2", "PostgreSQL", "JWT", "React 18", "Vite", "Tailwind CSS", "Render.com", "Swagger"],
    accent: "#0099FF",
  },
  {
    number: "02",
    title: "FlashyBank – Banking Mobile Application",
    tagline: "Java Spring Boot · React Native · Biometric Auth",
    problem:
      "Design and build a mobile banking application that handles P2P transfers and account management with a security-first approach and a complete UX/UI system.",
    architecture:
      "Spring Boot backend exposing secure financial endpoints, React Native client with biometric authentication layer, and a Figma-based design system covering all mobile screens and component states.",
    challenges:
      "Implementing biometric authentication flows required careful handling of device-level security APIs, session token binding, and fallback strategies for unsupported devices.",
    stack: ["Java", "Spring Boot", "React Native", "Biometric Auth", "Figma", "REST APIs"],
    accent: "#0099FF",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(0,153,255,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionLabel>Featured Projects</SectionLabel>
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
          Shipped in Production
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
          Two production-level systems built with Java and Spring Boot, each
          addressing a real domain with deliberate architectural decisions.
        </p>

        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <GlassCard key={p.title} className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 800,
                      fontSize: "3rem",
                      color: "rgba(0,153,255,0.15)",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {p.number}
                  </span>
                </div>

                <div className="flex-1 flex flex-col gap-5">
                  {/* Header */}
                  <div>
                    <h3
                      className="text-xl sm:text-[1.35rem]"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                        color: "#111827",
                        marginBottom: "4px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {p.title}
                    </h3>
                    <span
                      className="text-xs sm:text-[0.82rem]"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "#0099FF",
                        fontWeight: 500,
                      }}
                    >
                      {p.tagline}
                    </span>
                  </div>

                  {/* Details grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                    <DetailBlock label="Problem" text={p.problem} />
                    <DetailBlock label="Architecture" text={p.architecture} />
                    <DetailBlock label="Challenges" text={p.challenges} />
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="text-xs sm:text-[0.72rem] px-2.5 sm:px-2.5"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          color: "#374151",
                          background: "rgba(0,0,0,0.05)",
                          padding: "4px 10px",
                          borderRadius: "999px",
                          border: "1px solid rgba(0,0,0,0.07)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span
        className="text-xs sm:text-[0.72rem]"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          color: "#9CA3AF",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </span>
      <p
        className="text-xs sm:text-[0.85rem]"
        style={{
          fontFamily: "Inter, sans-serif",
          color: "#4B5563",
          lineHeight: 1.65,
        }}
      >
        {text}
      </p>
    </div>
  );
}