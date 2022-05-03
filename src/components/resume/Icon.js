import React from 'react';
import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

// FIXME: There should be a better dynamic import solution
// or a solution without importing

import AboutMeIcon from '../../images/icons/about-me.inline.svg';
import AwardsIcon from '../../images/icons/awards.inline.svg';
import EducationsIcon from '../../images/icons/educations.inline.svg';
import EmailIcon from '../../images/icons/email.inline.svg';
import ExperiencesIcon from '../../images/icons/experiences.inline.svg';
import ExternalIcon from '../../images/icons/external.inline.svg';
import GithubIcon from '../../images/icons/github.inline.svg';
import LanguagesIcon from '../../images/icons/languages.inline.svg';
import LocationIcon from '../../images/icons/location.inline.svg';
import PhoneIcon from '../../images/icons/phone.inline.svg';
import ProjectsIcon from '../../images/icons/projects.inline.svg';
import SkillsIcon from '../../images/icons/skills.inline.svg';
import StackoverflowIcon from '../../images/icons/stackoverflow.inline.svg';
import WebsiteIcon from '../../images/icons/website.inline.svg';
import { smallerThan500, smallerThanA4 } from './media';

const IconNames = {
  'about-me': AboutMeIcon,
  awards: AwardsIcon,
  educations: EducationsIcon,
  email: EmailIcon,
  experiences: ExperiencesIcon,
  external: ExternalIcon,
  github: GithubIcon,
  languages: LanguagesIcon,
  location: LocationIcon,
  phone: PhoneIcon,
  projects: ProjectsIcon,
  skills: SkillsIcon,
  stackoverflow: StackoverflowIcon,
  website: WebsiteIcon,
};

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
