import React from 'react';
import Helmet from 'react-helmet';
import GlobalStyle from '../styles/GlobalStyle';

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Amir Hossein Mafi | Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Personal Web Developer Portfolio. I'm a Front-End & Back-End Software Developer. Check out my React components, Github repositories."
        />
      </Helmet>
      <GlobalStyle />
      <div>Hello</div>
    </>
  );
};

export default IndexPage;
