import styled from "styled-components";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const StyledCard = styled.div`
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
    transform: translateY(-2px);
  }
`;

export function Card({ children, delay = 0, ...props }) {
  const [ref, visible] = useScrollReveal();

  return (
    <StyledCard
      ref={ref}
      $visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </StyledCard>
  );
}
