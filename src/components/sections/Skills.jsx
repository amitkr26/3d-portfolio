import styled from "styled-components";
import { Section } from "../ui/Section";
import { skills } from "../../data/profile";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: all ${({ theme }) => theme.transitions.normal};
  opacity: 0;
  transform: translateY(20px);

  ${({ $visible }) => $visible && `
    opacity: 1;
    transform: translateY(0);
  `}

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}44;
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.mono};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SkillItem = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}44;
    background: ${({ theme }) => theme.colors.primaryDim};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export function Skills() {
  return (
    <Section id="skills" label="Expertise" title="Technical Skills">
      <Grid>
        {skills.map((group, i) => (
          <SkillsGroup
            key={group.category}
            group={group}
            delay={i * 100}
          />
        ))}
      </Grid>
    </Section>
  );
}

function SkillsGroup({ group, delay }) {
  const [ref, visible] = useScrollReveal();

  return (
    <CategoryCard
      ref={ref}
      $visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <CategoryTitle>{group.category}</CategoryTitle>
      <SkillsList>
        {group.items.map((skill) => (
          <SkillItem key={skill}>{skill}</SkillItem>
        ))}
      </SkillsList>
    </CategoryCard>
  );
}
