import styled from "styled-components";
import { Section } from "../ui/Section";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { certifications } from "../../data/profile";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const CertCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: flex-start;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  ${({ $visible }) => $visible && `
    opacity: 1;
    transform: translateY(0);
  `}

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}44;
  }
`;

const Badge = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primaryDim};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

const Info = styled.div``;

const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2px;
`;

const Issuer = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textDim};
  margin-bottom: 2px;
`;

const Detail = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.mono};
`;

function BadgeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" label="Credentials" title="Certifications & Achievements">
      <Grid>
        {certifications.map((cert, i) => (
          <CertEntry key={i} cert={cert} delay={i * 60} />
        ))}
      </Grid>
    </Section>
  );
}

function CertEntry({ cert, delay }) {
  const [ref, visible] = useScrollReveal();

  return (
    <CertCard ref={ref} $visible={visible} style={{ transitionDelay: `${delay}ms` }}>
      <Badge>
        <BadgeIcon />
      </Badge>
      <Info>
        <Title>{cert.title}</Title>
        <Issuer>{cert.issuer}{cert.subject ? ` — ${cert.subject}` : ""}</Issuer>
        <Detail>{cert.date}{cert.detail ? ` | ${cert.detail}` : ""}</Detail>
      </Info>
    </CertCard>
  );
}
