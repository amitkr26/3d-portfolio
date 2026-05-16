import styled, { keyframes } from "styled-components";
import { profile } from "../../data/profile";
import { Button } from "../ui/Button";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing["3xl"]};
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const Content = styled.div`
  z-index: 1;
`;

const Label = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.1;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: -0.03em;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  }
`;

const Tagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textDim};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 540px;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Visual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    order: -1;
  }
`;

const CircuitNode = styled.div`
  width: 320px;
  height: 320px;
  position: relative;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
  }
`;

const Ring = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary}22;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || "0s"};

  &:nth-child(1) {
    width: 100%;
    height: 100%;
    border-color: ${({ theme }) => theme.colors.primary}33;
  }

  &:nth-child(2) {
    width: 75%;
    height: 75%;
    border-color: ${({ theme }) => theme.colors.accent}22;
    animation-delay: -2s;
  }

  &:nth-child(3) {
    width: 50%;
    height: 50%;
    border-color: ${({ theme }) => theme.colors.primary}44;
    animation-delay: -4s;
  }
`;

const Core = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary}22;
  border: 2px solid ${({ theme }) => theme.colors.primary}44;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary}33;
    animation: ${pulse} 3s ease-in-out infinite;
  }
`;

const Dot = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  opacity: 0.5;

  ${({ $angle, $distance }) => `
    transform: rotate(${$angle}deg) translateY(-${$distance}px);
  `}
`;

function HeroVisual() {
  const dots = Array.from({ length: 24 }, (_, i) => ({
    angle: (360 / 24) * i,
    distance: 140 + Math.random() * 30
  }));

  return (
    <CircuitNode aria-hidden="true">
      <Ring />
      <Ring />
      <Ring />
      {dots.map((d, i) => (
        <Dot key={i} $angle={d.angle} $distance={d.distance} />
      ))}
      <Core />
    </CircuitNode>
  );
}

export function Hero() {
  return (
    <Section id="hero">
      <Grid>
        <Content>
          <Label>Electronics Engineer / Researcher</Label>
          <Name>
            {profile.name.split(" ")[0]} <span>{profile.name.split(" ")[1]}</span>
          </Name>
          <Tagline>{profile.tagline}</Tagline>
          <Actions>
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href={profile.resume} target="_blank" variant="outline">
              Resume
            </Button>
            <Button href="#contact" variant="ghost">
              Get in Touch
            </Button>
          </Actions>
        </Content>
        <Visual>
          <HeroVisual />
        </Visual>
      </Grid>
    </Section>
  );
}
