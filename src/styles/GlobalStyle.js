import { createGlobalStyle, css } from 'styled-components';

import '@fontsource/ubuntu/400.css';
import '@fontsource/comic-neue/400.css';
import '@fontsource/comic-neue/700.css';

import MikhakWoff2 from '../fonts/Mikhak[DSTY,KSHD,wght].woff2'; //TODO: add fallback static fonts

// workaround: prettier doesn't format createGlobalStyle,
// wrap "createGlobalStyle" with "css" in the line below to get formatting
export default createGlobalStyle`${css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.backgroundColor};
  }

  body {
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.color};
  }

  img,
  picture,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  // Remove all animations, transitions and smooth scroll for people that prefer not to see them
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  @font-face {
    font-family: 'Mikhak Variable';
    src: url(${MikhakWoff2}) format('woff2');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
    unicode-range: U+0600-06FF;
  }

  @page {
    margin: 1.27cm;
  }
`}`;
