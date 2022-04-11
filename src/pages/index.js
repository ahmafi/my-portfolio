import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';

// colors are coming from https://tailwindcolor.com/
const colors = {
  neutral50: '#FAFAFA',
  neutral100: '#F4F4F5',
  neutral200: '#E4E4E7',
  neutral300: '#D4D4D8',
  neutral400: '#A1A1AA',
  neutral500: '#71717A',
  neutral600: '#52525B',
  neutral700: '#3F3F46',
  neutral800: '#27272A',
  neutral900: '#18181B',

  primary50: '#ECFDF5',
  primary100: '#D1FAE5',
  primary200: '#A7F3D0',
  primary300: '#6EE7B7',
  primary400: '#34D399',
  primary500: '#10B981',
  primary600: '#059669',
  primary800: '#047857',
  primary900: '#047857',
};

const darkTheme = {
  backgroundColor: colors.neutral900,
  color: colors.neutral50,
};

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
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <div>Hello</div>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
