// FIXME: There should be a better dynamic import solution
// or a solution without importing

import AboutMeIcon from '../images/icons/about-me.inline.svg';
import AwardsIcon from '../images/icons/awards.inline.svg';
import EducationsIcon from '../images/icons/educations.inline.svg';
import EmailIcon from '../images/icons/email.inline.svg';
import ExperiencesIcon from '../images/icons/experiences.inline.svg';
import ExternalIcon from '../images/icons/external.inline.svg';
import GithubIcon from '../images/icons/github.inline.svg';
import LanguagesIcon from '../images/icons/languages.inline.svg';
import LocationIcon from '../images/icons/location.inline.svg';
import PhoneIcon from '../images/icons/phone.inline.svg';
import ProjectsIcon from '../images/icons/projects.inline.svg';
import SkillsIcon from '../images/icons/skills.inline.svg';
import StackoverflowIcon from '../images/icons/stackoverflow.inline.svg';
import WebsiteIcon from '../images/icons/website.inline.svg';

import Telegram from './../images/icons/telegram.inline.svg';
import { LogoStackoverflow } from '@styled-icons/ionicons-solid';
import { Twitter } from '@styled-icons/bootstrap';
import { Email } from '@styled-icons/material-rounded';
import { Github } from '@styled-icons/bootstrap';

export const resume = {
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

export const portfolio = {
  telegram: Telegram,
  stackoverflow: LogoStackoverflow,
  twitter: Twitter,
  email: Email,
  github: Github,
};
