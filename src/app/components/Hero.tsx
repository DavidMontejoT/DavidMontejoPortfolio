import { ImageWithFallback } from "./figma/ImageWithFallback";
import portraitImage from "../../hero-photo.png";
import cvPDF from "../../David-Montejo-CV.pdf";

const STACK = [
  "Java",
  "Spring Boot",
  "Microservices",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "RabbitMQ",
  "Golang",
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center px-6 md:px-12 pt-28 pb-20 overflow-hidden"
    >
      {/* ── Ambient gradients ── */}
      <div
        className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,153,255,0.11) 0%, transparent 65%)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,153,255,0.07) 0%, transparent 65%)",
          transform: "translate(20%, 30%)",
        }}
      />

      {/* ── Two-column layout ── */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* ───── LEFT: Copy ───── */}
        <div className="flex flex-col gap-9">

          {/* Status pill */}
          <div className="self-start flex items-center gap-2.5"
            style={{
              background: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(0,0,0,0.09)",
              borderRadius: "999px",
              padding: "6px 16px 6px 10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#22C55E",
                boxShadow: "0 0 7px rgba(34,197,94,0.6)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "0.78rem",
                color: "#374151",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Available for opportunities
            </span>
          </div>

          {/* ── Main title ── */}
          <div className="flex flex-col gap-5">
            <h1
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                lineHeight: 1.08,
                color: "#0f172a",
                letterSpacing: "-0.035em",
              }}
            >
              Java Backend Engineer{" "}
              <span
                style={{
                  display: "block",
                  color: "#0099FF",
                  marginTop: "0.1em",
                }}
              >
                building scalable
              </span>
              <span style={{ display: "block" }}>distributed systems.</span>
            </h1>

            {/* ── Subtitle ── */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "1.05rem",
                color: "#4B5563",
                lineHeight: 1.75,
                maxWidth: "480px",
              }}
            >
              3+ years of experience designing microservices and REST APIs
              using{" "}
              <span style={{ fontWeight: 600, color: "#0f172a" }}>Java</span>,{" "}
              <span style={{ fontWeight: 600, color: "#0f172a" }}>
                Spring Boot
              </span>{" "}
              and cloud-native architecture.
            </p>
          </div>

          {/* ── CTAs ── */}
          <div className="flex flex-wrap gap-3 sm:gap-4 w-full sm:w-auto">
            {/* Primary — dark */}
            <a
              href="#projects"
              className="text-sm sm:text-base px-4 sm:px-7 py-3 sm:py-3.5 rounded-xl text-white font-semibold no-underline shadow-lg shadow-slate-900/20 transition-all duration-150 inline-block flex-1 sm:flex-none justify-center"
              style={{
                background: "#0f172a",
                fontFamily: "Inter, sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 28px rgba(15,23,42,0.28)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 20px rgba(15,23,42,0.2)";
              }}
            >
              View Projects
            </a>

            {/* Secondary — border only */}
            <a
              href={cvPDF}
              download="David-Montejo-CV.pdf"
              target="_blank"
              className="text-sm sm:text-base px-4 sm:px-7 py-3 sm:py-3.5 rounded-xl text-slate-900 font-semibold no-underline border border-slate-900/22 transition-all duration-150 inline-block flex-1 sm:flex-none justify-center"
              style={{
                fontFamily: "Inter, sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(15,23,42,0.5)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(15,23,42,0.22)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              Download CV
            </a>

            {/* GitHub ghost */}
            <a
              href="https://github.com/DavidMontejoT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl text-gray-500 font-medium no-underline border border-black/10 inline-flex items-center gap-2 transition-all duration-150 flex-1 sm:flex-none justify-center"
              style={{
                fontFamily: "Inter, sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#374151";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(0,0,0,0.22)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#6B7280";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(0,0,0,0.1)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/david-montejo5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl text-gray-500 font-medium no-underline border border-black/10 inline-flex items-center gap-2 transition-all duration-150 flex-1 sm:flex-none justify-center"
              style={{
                fontFamily: "Inter, sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#374151";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(0,0,0,0.22)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#6B7280";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(0,0,0,0.1)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <span>LinkedIn</span>
            </a>
          </div>

          {/* ── Stat row ── */}
          <div
            className="flex flex-wrap gap-0 w-full"
            style={{
              borderTop: "1px solid rgba(0,0,0,0.08)",
              paddingTop: "24px",
            }}
          >
            {[
              { value: "3+", label: "Years experience" },
              { value: "12+", label: "APIs shipped" },
              { value: "2", label: "Companies" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col gap-1.5 sm:gap-1 pr-4 sm:pr-9 mr-4 sm:mr-9"
                style={{
                  borderRight:
                    i < 2 ? "1px solid rgba(0,0,0,0.08)" : "none",
                }}
              >
                <span
                  className="text-2xl sm:text-[1.6rem]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 800,
                    color: "#0f172a",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </span>
                <span
                  className="text-xs sm:text-[0.78rem]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    color: "#9CA3AF",
                    letterSpacing: "0.01em",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ───── RIGHT: Portrait ───── */}
        <div className="hidden lg:flex justify-center items-center relative">

          {/* Accent shape behind photo */}
          <div
            style={{
              position: "absolute",
              width: "380px",
              height: "440px",
              borderRadius: "24px",
              background:
                "radial-gradient(ellipse at 60% 40%, rgba(0,153,255,0.1) 0%, rgba(222,222,222,0.6) 60%, transparent 100%)",
              transform: "rotate(3deg) translate(12px, 8px)",
              zIndex: 0,
            }}
          />

          {/* Photo container */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "340px",
              height: "420px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow:
                "0 8px 40px rgba(0,0,0,0.1), 0 2px 10px rgba(0,0,0,0.07)",
              border: "1px solid rgba(255,255,255,0.7)",
            }}
          >
            <ImageWithFallback
              src={portraitImage}
              alt="Java Backend Engineer — professional portrait"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 15%",
                display: "block",
              }}
            />

            {/* Very subtle bottom gradient to blend photo base */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "80px",
                background:
                  "linear-gradient(to top, rgba(222,222,222,0.18), transparent)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Floating tech badge */}
          <div
            style={{
              position: "absolute",
              bottom: "28px",
              left: "-12px",
              zIndex: 2,
              background: "rgba(255,255,255,0.72)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.85)",
              borderRadius: "12px",
              padding: "10px 16px",
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #0099FF, #0066CC)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <JavaIcon />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  color: "#0f172a",
                  lineHeight: 1.2,
                }}
              >
                Java · Spring Boot
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "0.7rem",
                  color: "#9CA3AF",
                  marginTop: "1px",
                }}
              >
                Core expertise
              </div>
            </div>
          </div>

          {/* Floating top-right badge */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "-16px",
              zIndex: 2,
              background: "rgba(255,255,255,0.72)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.85)",
              borderRadius: "12px",
              padding: "8px 14px",
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "0.72rem",
                color: "#0099FF",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Microservices
            </div>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "0.68rem",
                color: "#9CA3AF",
                marginTop: "1px",
              }}
            >
              Distributed systems
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function JavaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.698 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.478 3.618-.478s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.891 3.776-.891M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 1-2-2 0 0-1-2v-7h-4v7a2 2 0 0 1-2 2zM2 9h4v7a2 2 0 0 1-2 2 0 0 1-2v-7h-4v7a2 2 0 0 1-2 2z" />
    </svg>
  );
}
