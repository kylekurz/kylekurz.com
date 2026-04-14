import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';

const theme = createTheme({
  palette: {
    primary: { main: '#ffffff' },
    secondary: { main: '#000000' },
  },
});

function renderWithTheme(ui) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

test('renders projects section and resume card', () => {
  const { getByText } = renderWithTheme(<App />);
  expect(getByText('Projects', { exact: true })).toBeInTheDocument();
  expect(getByText('Resume', { exact: true })).toBeInTheDocument();
});
