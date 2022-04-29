import React from 'react';
import data from '../../content/resume.yaml';
import styled, { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import Section from '../components/resume/Sections';
import GlobalStyle from '../styles/GlobalStyle';
import { resumeTheme } from '../styles/Themes';
import Info from '../components/resume/Info';
import { StaticImage } from 'gatsby-plugin-image';
import AboutMe from '../components/resume/sections/AboutMe';
import Skills from '../components/resume/sections/Skills';
import General from '../components/resume/sections/General';

const Page = styled.main`
  display: flex;
  justify-content: space-between;
  width: 21cm;
  height: 29.7cm;
  margin: 1.25em auto;
  padding: 1.27cm;
  background: white;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  font-family: 'Mikhak Variable', 'Comic Neue', sans-serif;
  font-variation-settings: 'DSTY' 2;

  @media print {
    margin: 0 auto;
  }
`;

const FirstCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  .avatar {
    align-self: center;
    border: 2px solid ${({ theme }) => theme.accentColor};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.accentColor};
    overflow: visible;
  }
`;

const SecondCol = styled.div`
  width: 68%;
`;

const Name = styled.h1`
  font-size: 1.9rem;
  align-self: center;
  margin-bottom: 0.1em;
`;

const Job = styled.h2`
  font-size: 1.1rem;
  align-self: center;
  margin-bottom: 0.4em;
`;

function ResumePage() {
  const {
    aboutMe,
    skills,
    languages,
    projects,
    experiences,
    awards,
    educations,
  } = data.sections;

  return (
    <>
      <Helmet htmlAttributes={{ dir: 'rtl', lang: 'fa' }}>
        <title>Amir Hossein Mafi | Resume</title>
        <meta name="color-scheme" content="light" />
      </Helmet>
      <ThemeProvider theme={{ ...resumeTheme }}>
        <GlobalStyle />
        <Page>
          <FirstCol>
            <StaticImage
              src={'../images/AmirHosseinMafi.png'}
              alt={'Amir Hossein Mafi'}
              loading={'eager'}
              placeholder={'none'}
              width={160}
              height={160}
              className={'avatar'}
            />
            <Name>{data.name}</Name>
            <Job>{data.job}</Job>
            <Info data={data.info} />
            <Section Component={AboutMe} sectionData={aboutMe} />
            <Section Component={Skills} sectionData={skills}></Section>
            {/* <Section Component={General} sectionData={languages}></Section> */}
          </FirstCol>
          <SecondCol>
            {[projects, experiences, awards, educations].map((general) => (
              <Section
                key={general.header.title}
                Component={General}
                sectionData={general}
              />
            ))}
          </SecondCol>
        </Page>
      </ThemeProvider>
    </>
  );
}

export default ResumePage;
