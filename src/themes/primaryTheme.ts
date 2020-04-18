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
};

export const ThemeContext = React.createContext(theme);
