import styled, { css } from "styled-components";

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.primary};

    &:hover {
      background: transparent;
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary}44;

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.primaryDim};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textDim};
    border: 1px solid transparent;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.surface};
    }
  `
};

const sizes = {
  sm: css`
    padding: 8px 16px;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
  md: css`
    padding: 12px 24px;
    font-size: ${({ theme }) => theme.fontSizes.base};
  `,
  lg: css`
    padding: 16px 32px;
    font-size: ${({ theme }) => theme.fontSizes.lg};
  `
};

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  white-space: nowrap;

  ${({ $variant }) => variants[$variant || "primary"]}
  ${({ $size }) => sizes[$size || "md"]}
`;

export function Button({ variant, size, href, target, children, ...props }) {
  return (
    <StyledButton
      as={href ? "a" : "button"}
      $variant={variant}
      $size={size}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
