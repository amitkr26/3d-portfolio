import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { navigation, profile } from "../../data/profile";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.nav};
  background: ${({ $scrolled, theme }) =>
    $scrolled ? `${theme.colors.bg}ee` : "transparent"};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? "blur(12px)" : "none"};
  border-bottom: 1px solid
    ${({ $scrolled, theme }) =>
      $scrolled ? theme.colors.border : "transparent"};
  transition: all ${({ theme }) => theme.transitions.normal};
`;

const Nav = styled.nav`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

const Logo = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  letter-spacing: -0.02em;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const DesktopLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textDim};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    &:after {
      width: 100%;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileOverlay = styled.div`
  display: none;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${({ theme }) => theme.zIndex.above};

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? "block" : "none")};
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.lg};
  z-index: ${({ theme }) => theme.zIndex.above};

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const MobileLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textDim};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <Header $scrolled={scrolled}>
        <Nav role="navigation" aria-label="Main navigation">
          <Logo href="#hero">
            A<span>.</span>Kumar
          </Logo>

          <DesktopLinks>
            {navigation.map((item) => (
              <NavLink key={item.id} href={`#${item.id}`}>
                {item.label}
              </NavLink>
            ))}
            <NavLink
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--primary)" }}
            >
              Resume
            </NavLink>
          </DesktopLinks>

          <MenuButton
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {menuOpen ? (
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 5H17M3 10H17M3 15H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </MenuButton>
        </Nav>
      </Header>

      <MobileOverlay $open={menuOpen} onClick={closeMenu} aria-hidden="true" />
      <MobileMenu $open={menuOpen} role="navigation" aria-label="Mobile navigation">
        {navigation.map((item) => (
          <MobileLink
            key={item.id}
            href={`#${item.id}`}
            onClick={closeMenu}
          >
            {item.label}
          </MobileLink>
        ))}
        <MobileLink
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          style={{ color: "var(--primary)" }}
        >
          Resume ↗
        </MobileLink>
      </MobileMenu>
    </>
  );
}
