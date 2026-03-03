import { GlassCard } from "./GlassCard";
import { SectionLabel } from "./Architecture";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0,153,255,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        <SectionLabel>Contact</SectionLabel>
        <h2
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "#111827",
            letterSpacing: "-0.02em",
          }}
        >
          Let's build something together.
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#6B7280",
            fontSize: "1rem",
            lineHeight: 1.7,
            maxWidth: "420px",
          }}
        >
          Open to backend roles, freelance projects, and technical conversations.
          Reach out through any of these channels.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <ContactLink
            href="mailto:hello@engineer.dev"
            label="hello@engineer.dev"
            icon={<EmailIcon />}
            primary
          />
          <ContactLink
            href="https://linkedin.com"
            label="LinkedIn"
            icon={<LinkedInIcon />}
          />
          <ContactLink
            href="https://github.com"
            label="GitHub"
            icon={<GitHubIcon />}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 max-w-5xl mx-auto mt-20 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.82rem",
              color: "#9CA3AF",
            }}
          >
            Backend Engineer · Node.js · PostgreSQL · REST APIs
          </span>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.82rem",
              color: "#9CA3AF",
            }}
          >
            © {new Date().getFullYear()} · Built with React
          </span>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  label,
  icon,
  primary,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  primary?: boolean;
}) {
  if (primary) {
    return (
      <a
        href={href}
        className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-3xl text-white font-semibold no-underline shadow-lg shadow-blue-500/30 inline-flex items-center gap-2.5 transition-all duration-150 justify-center"
        style={{
          background: "#0099FF",
          fontFamily: "Inter, sans-serif",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,153,255,0.4)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,153,255,0.3)";
        }}
      >
        {icon}
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-3xl text-gray-700 font-semibold no-nowrap no-underline inline-flex items-center gap-2.5 transition-all duration-150 justify-center"
      style={{
        background: "rgba(255,255,255,0.45)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.65)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
        fontFamily: "Inter, sans-serif",
      }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = "translateY(-2px)")}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
