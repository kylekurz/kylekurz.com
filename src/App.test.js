import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { theme } from './theme';

function renderWithTheme(ui) {
  return render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>
  );
}

test('renders hero, resume, and work callouts', () => {
  const { getByText, getByRole } = renderWithTheme(<App />);
  expect(
    getByRole('heading', { level: 1, name: 'Kyle Kurz' })
  ).toBeInTheDocument();
  expect(getByText('Resume', { exact: true })).toBeInTheDocument();
  expect(getByText('Wildfire Systems', { exact: true })).toBeInTheDocument();
  expect(getByText('Double-K Audio', { exact: true })).toBeInTheDocument();
  expect(getByText('Sangoma', { exact: true })).toBeInTheDocument();
});
