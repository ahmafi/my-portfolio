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
import { smallerThan500, smallerThanA4 } from '../components/resume/media';

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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 8px;

  @media ${smallerThanA4} {
    width: 80%;
    margin: 1em auto 2em;
    box-shadow: none;
    padding: 0;
    height: auto;
    flex-direction: column;
    align-items: center;
  }

  @media ${smallerThan500} {
    width: 90%;
  }

  @media print {
    margin: 0;
    height: 100%;
    box-shadow: none;

    @page {
      margin: 0;
      size: A4 portrait;
    }
  }
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  .avatar {
    align-self: center;
    width: 160px;
    border: 4px solid ${({ theme }) => theme.primaryColor};
    border-radius: 50%;
    overflow: visible;
  }

  @media ${smallerThanA4} {
    width: 100%;
  }
`;

const Main = styled.div`
  width: 68%;

  @media ${smallerThanA4} {
    width: 100%;
  }
`;

const Name = styled.h1`
  font-size: 1.9rem;
  align-self: center;
  margin-bottom: 0.1em;
  text-align: center;
`;

const Job = styled.h2`
  font-size: 1.1rem;
  align-self: center;
  margin-bottom: 0.4em;
  text-align: center;
`;

function ResumePage() {
  const {
    aboutMe,
    skills,
    // languages,
    projects,
    experiences,
    awards,
    educations,
  } = data.sections;

  return (
    <>
      <Helmet htmlAttributes={{ dir: 'rtl', lang: 'fa-IR' }}>
        <title>امیرحسین مافی | رزومه</title>
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="description"
          content="رزومه امیرحسین مافی. برنامه نویس front-end"
        />
      </Helmet>
      <ThemeProvider theme={{ ...resumeTheme }}>
        <GlobalStyle />
        <Page>
          <Side>
            <StaticImage
              src={'../images/AmirHosseinMafi.png'}
              alt={'Amir Hossein Mafi'}
              loading={'eager'}
              placeholder={'none'}
              width={640}
              height={640}
              className={'avatar'}
            />
            <Name>{data.name}</Name>
            <Job>{data.job}</Job>
            <Info data={data.info} />
            <Section Component={AboutMe} sectionData={aboutMe} />
            <Section Component={Skills} sectionData={skills}></Section>
            {/* <Section Component={General} sectionData={languages}></Section> */}
          </Side>
          <Main>
            {[projects, experiences, awards, educations].map((general) => (
              <Section
                key={general.header.title}
                Component={General}
                sectionData={general}
              />
            ))}
          </Main>
        </Page>
      </ThemeProvider>
    </>
  );
}

export default ResumePage;
