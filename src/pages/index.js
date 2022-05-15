import React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../components/portfolio/Header';
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/Themes';
import data from '../../content/portfolio.yaml';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ubuntu;
  width: 86%;
  max-width: 1400px;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    width: 96%;
  }
`;

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Amir Hossein Mafi | Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Personal Web Developer Portfolio. I'm a Front-End & Back-End Software Developer. Check out my React components, Github repositories."
        />
        <meta name="color-scheme" content="dark" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Header data={data} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
