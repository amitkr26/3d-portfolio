import { lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import { Navbar } from "./components/layout/Navbar";
import { ParticleField } from "./components/canvas/ParticleField";
import { Hero } from "./components/sections/Hero";

const About = lazy(() =>
  import("./components/sections/About").then((m) => ({ default: m.About }))
);
const Research = lazy(() =>
  import("./components/sections/Research").then((m) => ({ default: m.Research }))
);
const Skills = lazy(() =>
  import("./components/sections/Skills").then((m) => ({ default: m.Skills }))
);
const Projects = lazy(() =>
  import("./components/sections/Projects").then((m) => ({ default: m.Projects }))
);
const Experience = lazy(() =>
  import("./components/sections/Experience").then((m) => ({ default: m.Experience }))
);
const Certifications = lazy(() =>
  import("./components/sections/Certifications").then((m) => ({ default: m.Certifications }))
);
const Education = lazy(() =>
  import("./components/sections/Education").then((m) => ({ default: m.Education }))
);
const Contact = lazy(() =>
  import("./components/sections/Contact").then((m) => ({ default: m.Contact }))
);
const Footer = lazy(() =>
  import("./components/layout/Footer").then((m) => ({ default: m.Footer }))
);

function SectionFallback() {
  return (
    <div
      style={{
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--text-muted, #555570)",
        fontSize: "0.875rem"
      }}
    >
      Loading...
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <ParticleField />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Research />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
}
