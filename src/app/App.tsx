import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Architecture } from "./components/Architecture";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Philosophy } from "./components/Philosophy";
import { TechStack } from "./components/TechStack";
import { CurrentFocus } from "./components/CurrentFocus";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#DEDEDE",
        fontFamily: "Inter, sans-serif",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Global ambient gradient layer */}
      <div
        className="hidden sm:block"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background: `
            radial-gradient(ellipse 55% 40% at 15% 20%, rgba(0,153,255,0.13) 0%, transparent 60%),
            radial-gradient(ellipse 45% 35% at 85% 75%, rgba(0,153,255,0.1) 0%, transparent 60%),
            radial-gradient(ellipse 35% 30% at 60% 45%, rgba(0,153,255,0.06) 0%, transparent 60%)
          `,
        }}
      />

      {/* Mobile simplified gradient */}
      <div
        className="sm:hidden"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,153,255,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0,153,255,0.05) 0%, transparent 70%)
          `,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Architecture />
        <Experience />
        <Projects />
        <Philosophy />
        <TechStack />
        <CurrentFocus />
        <Contact />
      </div>
    </div>
  );
}