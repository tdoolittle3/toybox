// src/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      maingradient: "linear-gradient(to right, tomato, cyan)",
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export default theme;
