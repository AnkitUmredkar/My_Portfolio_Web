import React from "react";
// import { NavLink } from "react-router-dom";
import { Link as LinkR } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { useTheme } from "styled-components";

import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  max-width: 1200px;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 640px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 100%;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  background-color: transparent;
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  &:hover {
    color: ${({ theme }) => theme.text_primary};
    background-color: ${({ theme }) => theme.primary};
  }
  /* :hover {
    color: ${({ theme }) => theme.text_light};
  } */

  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

export const Span = styled.span`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  border-radius: 0 0 20 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavConatiner>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" />
            <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              let open = !isOpen;
              setIsOpen(open);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Project</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton href="https://github.com/AnkitUmredkar/" target="_blank">Github Profile</GithubButton>
        </ButtonContainer>
      </NavConatiner>
      {isOpen && (
        <MobileMenu isOpen={isOpen}>
          <MobileMenuLink
            href="#about"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            About
          </MobileMenuLink>
          <MobileMenuLink
            href="#skills"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Skills
          </MobileMenuLink>
          <MobileMenuLink
            href="#experience"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Experience
          </MobileMenuLink>
          <MobileMenuLink
            href="#project"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Poject
          </MobileMenuLink>
          <MobileMenuLink
            href="#education"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Education
          </MobileMenuLink>
          <GithubButton
            style={{
              padding: "10px 16px",
              background: `${theme.primary}`,
              color: "white",
              width: "max-content",
            }}
            href="/"
            target="_blank"
          >
            {" "}
            Github
          </GithubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
