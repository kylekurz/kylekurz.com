import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#8ab4ff' },
    background: {
      default: '#07080d',
      paper: 'rgba(255, 255, 255, 0.04)',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.92)',
      secondary: 'rgba(255, 255, 255, 0.65)',
    },
  },
  typography: {
    fontFamily:
      '"DM Sans", "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 600, letterSpacing: '-0.03em' },
    h2: { fontWeight: 600, letterSpacing: '-0.02em' },
    h5: { fontWeight: 600 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: 0,
        },
      },
    },
  },
});
