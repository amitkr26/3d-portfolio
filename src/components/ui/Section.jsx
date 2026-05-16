import styled from "styled-components";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const Wrapper = styled.section`
  padding: ${({ theme }) => theme.spacing["4xl"]} ${({ theme }) => theme.spacing.lg};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing["3xl"]} ${({ theme }) => theme.spacing.md};
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Label = styled.span`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  ${({ $visible }) => $visible && `
    opacity: 1;
    transform: translateY(0);
  `}
`;

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;

  ${({ $visible }) => $visible && `
    opacity: 1;
    transform: translateY(0);
  `}

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  }
`;

export function Section({ id, label, title, children, ...props }) {
  const [ref, visible] = useScrollReveal();

  return (
    <Wrapper id={id} ref={ref} {...props}>
      <Inner>
        {label && <Label $visible={visible}>{label}</Label>}
        {title && <Heading $visible={visible}>{title}</Heading>}
        {children}
      </Inner>
    </Wrapper>
  );
}
