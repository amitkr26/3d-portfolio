import styled from "styled-components";
import { Section } from "../ui/Section";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { education } from "../../data/profile";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 700px;
`;

const EduCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  ${({ $visible }) => $visible && `
    opacity: 1;
    transform: translateY(0);
  `}

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radii.sm} 0 0 ${({ theme }) => theme.radii.sm};
  }
`;

const Period = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary};
`;

const Institution = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.spacing.xs} 0;
`;

const Degree = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textDim};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Highlights = styled.ul`
  padding-left: ${({ theme }) => theme.spacing.lg};
`;

const Highlight = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textDim};
  line-height: 1.7;
  list-style: none;
  position: relative;

  &::before {
    content: "▹";
    position: absolute;
    left: -${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

function EducationEntry({ item, index }) {
  const [ref, visible] = useScrollReveal();

  return (
    <EduCard
      ref={ref}
      $visible={visible}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <Period>{item.period}</Period>
      <Institution>{item.institution}</Institution>
      <Degree>
        {item.degree}
        {item.specialization && <span> — {item.specialization}</span>}
      </Degree>
      <Description>{item.description}</Description>
      {item.highlights.length > 0 && (
        <Highlights>
          {item.highlights.map((h, i) => (
            <Highlight key={i}>{h}</Highlight>
          ))}
        </Highlights>
      )}
    </EduCard>
  );
}

export function Education() {
  if (education.length === 0) {
    return (
      <Section id="education" label="Background" title="Education">
        <p style={{ color: "var(--text-dim)", textAlign: "center" }}>
          Education details are being updated.
        </p>
      </Section>
    );
  }

  return (
    <Section id="education" label="Background" title="Education">
      <Grid>
        {education.map((item, i) => (
          <EducationEntry key={item.id} item={item} index={i} />
        ))}
      </Grid>
    </Section>
  );
}
