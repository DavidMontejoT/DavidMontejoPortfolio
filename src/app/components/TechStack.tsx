import { GlassCard } from "./GlassCard";
import { SectionLabel } from "./Architecture";

const stack = [
  {
    name: "Node.js",
    role: "Runtime",
    description: "Primary runtime for all backend services. Event-loop model suits I/O-heavy workloads.",
    level: 90,
    color: "#68A063",
  },
  {
    name: "Express",
    role: "Framework",
    description: "Minimal, un-opinionated web framework. Full control over middleware architecture.",
    level: 92,
    color: "#0099FF",
  },
  {
    name: "PostgreSQL",
    role: "Database",
    description: "Primary relational database. ACID compliance and rich query planner for complex joins.",
    level: 85,
    color: "#336791",
  },
  {
    name: "Sequelize",
    role: "ORM",
    description: "Schema definition, migrations, and association management with raw query escape hatches.",
    level: 80,
    color: "#52B0E7",
  },
  {
    name: "React",
    role: "Frontend",
    description: "UI layer for full-stack projects. Component-driven architecture paired with REST APIs.",
    level: 75,
    color: "#61DAFB",
  },
  {
    name: "Git",
    role: "Version Control",
    description: "Feature branch workflow, conventional commits, and structured PR reviews.",
    level: 95,
    color: "#F05032",
  },
  {
    name: "Docker",
    role: "Containers",
    description: "Containerized dev environments and deployment pipelines for consistent builds.",
    level: 70,
    color: "#2496ED",
  },
];

export function TechStack() {
  return (
    <section id="stack" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0,153,255,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionLabel>Tech Stack</SectionLabel>
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
          Tools I Work With
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
          A focused stack, chosen deliberately. Depth over breadth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {stack.map((tech) => (
            <GlassCard key={tech.name} className="p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#111827",
                    }}
                  >
                    {tech.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.72rem",
                      color: "#9CA3AF",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {tech.role}
                  </div>
                </div>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: `${tech.color}18`,
                    border: `1.5px solid ${tech.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "0.7rem",
                    color: tech.color,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {tech.level}%
                </div>
              </div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.8rem",
                  color: "#6B7280",
                  lineHeight: 1.6,
                }}
              >
                {tech.description}
              </p>
              {/* Progress bar */}
              <div
                style={{
                  height: "4px",
                  borderRadius: "2px",
                  background: "rgba(0,0,0,0.07)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${tech.level}%`,
                    borderRadius: "2px",
                    background: `linear-gradient(90deg, ${tech.color}99, ${tech.color})`,
                  }}
                />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
