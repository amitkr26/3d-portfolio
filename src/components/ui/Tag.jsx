import styled from "styled-components";

const StyledTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primaryDim};
  border: 1px solid ${({ theme }) => theme.colors.primary}22;
  white-space: nowrap;
`;

export function Tag({ children, ...props }) {
  return <StyledTag {...props}>{children}</StyledTag>;
}
