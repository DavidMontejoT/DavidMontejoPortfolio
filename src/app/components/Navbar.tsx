import { useState, useEffect } from "react";

const links = [
  { label: "Architecture", href: "#architecture" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4"
      style={{
        background: scrolled
          ? "rgba(222,222,222,0.6)"
          : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.5)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.05)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 800,
          fontSize: "1.1rem",
          color: "#111827",
          textDecoration: "none",
          letterSpacing: "-0.03em",
        }}
      >
        <span style={{ color: "#0099FF" }}>&lt;</span>
        BE
        <span style={{ color: "#0099FF" }}>/&gt;</span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "0.875rem",
              color: "#4B5563",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#0099FF")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#4B5563")}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden md:inline-flex"
        style={{
          background: "#0099FF",
          color: "#fff",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "0.85rem",
          padding: "0.55rem 1.25rem",
          borderRadius: "10px",
          textDecoration: "none",
          boxShadow: "0 2px 12px rgba(0,153,255,0.3)",
          transition: "transform 0.15s, box-shadow 0.15s",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,153,255,0.4)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,153,255,0.3)";
        }}
      >
        Hire me
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 z-[52]"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              borderRadius: "2px",
              background: "#111827",
              transition: "all 0.2s",
              transform: menuOpen ? i === 1 ? "scale(0)" : i === 0 ? "rotate(45deg) translate(5px, 5px)" : "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col gap-0.5 sm:gap-1 px-4 py-4 sm:py-5 z-[51] max-h-[70vh] overflow-y-auto"
          style={{
            background: "rgba(222,222,222,0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: "1px solid rgba(255,255,255,0.5)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base sm:text-[1rem]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                color: "#374151",
                textDecoration: "none",
                padding: "0.75rem 0.5rem",
                borderRadius: "8px",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-base sm:text-[1rem] text-center font-semibold"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#fff",
              background: "#0099FF",
              padding: "0.75rem 1.25rem",
              borderRadius: "10px",
              textDecoration: "none",
              marginTop: "0.5rem",
              boxShadow: "0 2px 12px rgba(0,153,255,0.3)",
            }}
          >
            Hire me
          </a>
        </div>
      )}
    </nav>
  );
}