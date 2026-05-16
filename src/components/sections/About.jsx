import styled from "styled-components";
import { Section } from "../ui/Section";
import { profile } from "../../data/profile";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: ${({ theme }) => theme.spacing["3xl"]};
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const BioText = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;

  ${({ $visible }) => $visible && `
    opacity: 1;
    transform: translateY(0);
  `}
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textDim};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FocusGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s;

  ${({ $visible }) => $visible && `
    opacity: 1;
    transform: translateY(0);
  `}
`;

const FocusCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.lg};

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-family: ${({ theme }) => theme.fonts.mono};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textDim};
    line-height: 1.6;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s;

  ${({ $visible }) => $visible && `
    opacity: 1;
    transform: translateY(0);
  `}
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const StatIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primaryDim};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

const StatContent = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textDim};
  }
`;

const focuses = [
  { title: "Semiconductor Physics", desc: "Device characterization, thin film magnetism, spintronic phenomena" },
  { title: "Thin Film Technology", desc: "DC magnetron sputtering, XRD, VSM, FMR analysis" },
  { title: "Embedded Systems", desc: "Arduino, ESP32, sensor interfacing, PID control" },
  { title: "VLSI & Digital Design", desc: "Verilog HDL, digital logic, circuit simulation" }
];

const stats = [
  { icon: "flask", label: "Research Focus", value: "Thin Film Spintronics" },
  { icon: "chip", label: "Technical Domain", value: "Semiconductor Devices" },
  { icon: "code", label: "Programming", value: "C, Embedded C, MATLAB, Verilog" }
];

function StatSvg({ type }) {
  const icons = {
    flask: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6v5l4 8H5l4-8V3z" /><line x1="9" y1="3" x2="15" y2="3" /><path d="M5 16h14" />
      </svg>
    ),
    chip: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    code: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    )
  };

  return icons[type] || null;
}

export function About() {
  const [ref, visible] = useScrollReveal();

  return (
    <Section id="about" label="About" title="Background & Focus">
      <Grid ref={ref}>
        <div>
          <BioText $visible={visible}>
            {profile.bio.map((p, i) => (
              <Paragraph key={i}>{p}</Paragraph>
            ))}
          </BioText>

          <FocusGrid $visible={visible}>
            {focuses.map((f) => (
              <FocusCard key={f.title}>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </FocusCard>
            ))}
          </FocusGrid>
        </div>

        <StatsContainer $visible={visible}>
          {stats.map((s) => (
            <StatCard key={s.label}>
              <StatIcon>
                <StatSvg type={s.icon} />
              </StatIcon>
              <StatContent>
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </StatContent>
            </StatCard>
          ))}
        </StatsContainer>
      </Grid>
    </Section>
  );
}
