import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { portfolio as IconNames } from '../IconNames';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 90%;
  align-items: center;
  /* justify-content: center; */
  text-align: center;

  justify-content: flex-start;
  @media screen and (max-width: 480px) {
  }
`;

const Name = styled.h1`
  font-size: 3.6rem;
  line-height: 1.2;
  overflow-wrap: normal;
  margin-bottom: 0.25em;
  margin-top: 10vh;

  span {
    color: ${({ theme }) => theme.primaryColor};
  }

  @media screen and (max-width: 480px) {
    font-size: 3.2rem;
    margin-top: 6vh;
  }
`;

const JobTitle = styled.h2`
  font-size: 1.5rem;
  overflow-wrap: normal;
  margin-bottom: 1em;
`;

const About = styled.p`
  font-size: 1.3rem;
  max-width: 590px;
  margin-bottom: 2.5em;

  a {
    color: ${({ theme }) => theme.primaryColor2};
    text-decoration: none;

    :hover {
      text-decoration-line: underline;
    }
  }
`;

const Socials = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 8em;

  @media screen and (max-width: 480px) {
    margin-bottom: 2em;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.5em 0.5em;
    color: ${({ theme }) => theme.backgroundColor};
    fill: ${({ theme }) => theme.backgroundColor};
    background-color: ${({ theme }) => theme.color};
    transition: 0.3s;
    border-radius: 50%;
    will-change: transform;
  }

  a:hover {
    transform: scale(1.1);
  }

  svg {
    padding: 0.4em;
  }
`;

const Social = ({ name, Icon, link }) => {
  const theme = useTheme();

  return (
    <a href={link} title={name}>
      <Icon
        size={theme.sizes.socialIcons}
        width={theme.sizes.socialIcons}
        height={theme.sizes.socialIcons}
      />
    </a>
  );
};

const Navbar = styled.nav`
  align-self: stretch;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1.2rem;
  list-style: none;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  padding: 0 0.5em;
  text-transform: capitalize;
  border-left: 1px solid ${({ theme }) => theme.color};

  :first-child {
    border-left: none;
  }

  @media screen and (max-width: 480px) {
    border-left: none;
    margin-bottom: 0.25em;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.primaryColor2};

  :hover {
    text-decoration-line: underline;
  }
`;

function App({ data: { job, about, socials, sections } }) {
  return (
    <Container>
      <Name>
        Hey, I'm <span>Amir</span>
      </Name>
      <JobTitle>{job}</JobTitle>
      <About as={ReactMarkdown}>{about}</About>
      <Socials>
        {socials.map((social) => (
          <Social
            name={social.name}
            Icon={IconNames[social.icon]}
            link={social.link}
          />
        ))}
      </Socials>
      <Navbar>
        <NavList>
          {Object.keys(sections).map((sectionName) => (
            <NavItem>
              <NavLink href="#">{sectionName}</NavLink>
            </NavItem>
          ))}
        </NavList>
      </Navbar>
    </Container>
  );
}

export default App;
