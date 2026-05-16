import styled from "styled-components";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Tag } from "../ui/Tag";
import { Button } from "../ui/Button";
import { projects } from "../../data/profile";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectCategory = styled.span`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ProjectMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectYear = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const ProjectDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textDim};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: auto;
`;

export function Projects() {
  if (projects.length === 0) {
    return (
      <Section id="projects" label="Work" title="Projects">
        <p style={{ color: "var(--text-dim)", textAlign: "center" }}>
          Projects are being documented. Check back soon.
        </p>
      </Section>
    );
  }

  return (
    <Section id="projects" label="Work" title="Projects">
      <Grid>
        {projects.map((project, i) => (
          <Card key={project.id} delay={i * 80}>
            <ProjectCategory>{project.category}</ProjectCategory>
            <ProjectMeta>
              <ProjectYear>{project.year}</ProjectYear>
            </ProjectMeta>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDesc>{project.description}</ProjectDesc>
            <TechRow>
              {project.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </TechRow>
            <Actions>
              {project.links.github && (
                <Button
                  href={project.links.github}
                  target="_blank"
                  variant="outline"
                  size="sm"
                >
                  Source
                </Button>
              )}
              {project.links.demo && (
                <Button
                  href={project.links.demo}
                  target="_blank"
                  variant="primary"
                  size="sm"
                >
                  Live Demo
                </Button>
              )}
              {project.links.article && (
                <Button
                  href={project.links.article}
                  target="_blank"
                  variant="ghost"
                  size="sm"
                >
                  Read More
                </Button>
              )}
            </Actions>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
