import React from 'react';

export const theme = {
  colors: {
    primary: '#019387',
    secondary: '#DD4814',
    grey: '#aaa',
    white: '#fff',
    black: '#333',
  },
  fonts: {
    bodyColor: '#454545',
  },
  fontSizes: {
    xs: `max(12px, 0.55em)`,
    sm: 'max(14px, 0.7em)',
    md: 'max(18px, 0.9em)',
    lg: 'max(22px, 1.5em)',
  },
};

export const ThemeContext = React.createContext(theme);
