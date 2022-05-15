import React from 'react';
import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { smallerThan500, smallerThanA4 } from './media';

import { resume as IconNames } from '../IconNames';

const Container = styled.div`
  width: ${({ w }) => w};
  height: ${({ h }) => h};

  svg {
    fill: ${({ c, theme }) => c ?? theme.primaryColor};
  }

  ${({ href }) =>
    href &&
    css`
      :hover,
      :focus {
        outline-color: ${({ hc, theme }) => hc ?? theme.secondaryColor};
        outline-offset: 4px;
        svg {
          fill: ${({ hc, theme }) => hc ?? theme.secondaryColor};
        }
      }

      /* Backward compatibility
         Undo :focus changes if it's not a :focus-visible */
      :focus:not(:focus-visible) {
        svg {
          fill: ${({ c, theme }) => c ?? theme.primaryColor};
        }
      }
    `};
`;

function Icon({ name, color, hoverColor, width = 1, height, href }) {
  height = height ?? width;

  const IconTag = IconNames[name];

  const isSmallerThanA4 = useMediaQuery({ query: smallerThanA4 });
  const isSmallerThan500 = useMediaQuery({ query: smallerThan500 });

  let resWidth = width;
  let resHeight = height;

  if (href) {
    if (isSmallerThanA4) {
      resWidth = width * 1.2;
      resHeight = height * 1.2;
    }

    if (isSmallerThan500) {
      resWidth = width * 1.1;
      resHeight = height * 1.1;
    }
  }

  resWidth = `${resWidth}em`;
  resHeight = `${resHeight}em`;

  return (
    <Container
      as={href ? 'a' : 'div'}
      href={href}
      c={color}
      hc={hoverColor}
      w={resWidth}
      h={resHeight}
    >
      <IconTag width={resWidth} height={resHeight} />
    </Container>
  );
}

export default Icon;
