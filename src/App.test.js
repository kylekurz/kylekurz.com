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
  expect(getByText('Work & projects', { exact: true })).toBeInTheDocument();
  expect(getByText(/^Wildfire$/)).toBeInTheDocument();
  expect(getByText(/Double K Audio/i)).toBeInTheDocument();
  expect(getByText(/^Sangoma$/)).toBeInTheDocument();
});
