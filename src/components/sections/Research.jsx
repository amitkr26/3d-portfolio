import styled from "styled-components";
import { Section } from "../ui/Section";
import { Tag } from "../ui/Tag";
import { Card } from "../ui/Card";
import { profile } from "../../data/profile";

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

const ResearchTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.3;
`;

const ResearchText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textDim};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TechniqueList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const DomainBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textDim};
  }
`;

const r = profile.research;

export function Research() {
  return (
    <Section id="research" label="Research" title="Current Work">
      <Grid>
        <div>
          <DomainBadge>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
              <line x1="8" y1="7" x2="14" y2="7" /><line x1="8" y1="11" x2="12" y2="11" />
            </svg>
            <span>{r.domain}</span>
          </DomainBadge>

          <ResearchTitle>{r.title}</ResearchTitle>
          <ResearchText>{r.description}</ResearchText>

          <p style={{
            fontSize: "var(--font-size-sm)",
            color: "var(--text-dim)",
            fontFamily: "var(--font-mono)",
            marginBottom: "0.75rem"
          }}>
            Characterization Techniques
          </p>
          <TechniqueList>
            {r.techniques.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </TechniqueList>
        </div>

        <Card>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4 style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--text)",
              fontFamily: "var(--font-mono)"
            }}>
              Research Abstract
            </h4>
            <p style={{
              fontSize: "0.875rem",
              color: "var(--text-dim)",
              lineHeight: 1.7,
              fontStyle: "italic"
            }}>
              This research investigates the structural and magnetic properties of transition metal alloy thin films
              deposited on flexible polymeric substrates via DC magnetron sputtering. The study focuses on
              understanding strain-mediated magnetic anisotropy and magnetization dynamics through comprehensive
              XRD, VSM, and FMR characterization, targeting applications in flexible spintronic devices.
            </p>

            <div style={{
              borderTop: "1px solid var(--border)",
              paddingTop: "1rem",
              marginTop: "0.5rem"
            }}>
              <p style={{
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)"
              }}>
                Keywords: Thin Films · Spintronics · Magnetron Sputtering · Flexible Electronics · Magnetic Anisotropy
              </p>
            </div>
          </div>
        </Card>
      </Grid>
    </Section>
  );
}
