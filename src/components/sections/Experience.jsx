import styled from "styled-components";
import { Section } from "../ui/Section";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { experience } from "../../data/profile";

const Timeline = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.xl};

  &::before {
    content: "";
    position: absolute;
    left: 7px;
    top: 0;
    bottom: 0;
    width: 1px;
    background: ${({ theme }) => theme.colors.border};
  }
`;

const Entry = styled.div`
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing["3xl"]};
  opacity: 0;
  transform: translateX(-10px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  ${({ $visible }) => $visible && `
    opacity: 1;
    transform: translateX(0);
  `}

  &:last-child {
    padding-bottom: 0;
  }
`;

const Dot = styled.div`
  position: absolute;
  left: -${({ theme }) => theme.spacing.xl};
  top: 4px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bg};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  z-index: 1;
`;

const Period = styled.span`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Role = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Organization = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textDim};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
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
  position: relative;
  list-style: none;

  &::before {
    content: "▹";
    position: absolute;
    left: -${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

function TimelineEntry({ item, index }) {
  const [ref, visible] = useScrollReveal();

  return (
    <Entry ref={ref} $visible={visible} style={{ transitionDelay: `${index * 100}ms` }}>
      <Dot />
      <Period>{item.period}</Period>
      <Role>{item.role}</Role>
      <Organization>{item.organization}</Organization>
      <Description>{item.description}</Description>
      {item.highlights.length > 0 && (
        <Highlights>
          {item.highlights.map((h, i) => (
            <Highlight key={i}>{h}</Highlight>
          ))}
        </Highlights>
      )}
    </Entry>
  );
}

export function Experience() {
  if (experience.length === 0) {
    return (
      <Section id="experience" label="History" title="Experience">
        <p style={{ color: "var(--text-dim)", textAlign: "center" }}>
          Experience details are being updated.
        </p>
      </Section>
    );
  }

  return (
    <Section id="experience" label="History" title="Experience">
      <Timeline>
        {experience.map((item, i) => (
          <TimelineEntry key={item.id} item={item} index={i} />
        ))}
      </Timeline>
    </Section>
  );
}
