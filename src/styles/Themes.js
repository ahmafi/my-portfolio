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
  color: colors.neutral100,
  bgCard: colors.neutral700,
  colors: {
    text: {
      dimmed: colors.neutral300,
    },
    jobBg: colors.primary800,
    link: {
      default: colors.primary400,
    },
    social: {
      bg: colors.neutral300,
      fg: colors.neutral800,
      shadow: colors.neutral500,
    },
  },
};

const commonTheme = {
  sizes: {
    socialIcons: '36px',
  },
};

export const theme = { ...darkTheme, ...commonTheme };

export const resumeTheme = {
  backgroundColor: '#fff',
  color: '#000',
  accentColor: '#512da8',
};
