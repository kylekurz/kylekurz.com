import React from 'react';
import logo from './kklogo.svg';
import './App.css';
import ProjectGrid from './ProjectGrid.js';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const RESUME_URL =
  'https://www.dropbox.com/s/f4qz1dfp625dt2b/Kyle%20Kurz%20Resume.pdf?dl=0';

function App() {
  return (
    <Box className="App-root">
      <Container maxWidth="md" sx={{ py: { xs: 5, sm: 8 }, pb: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 3,
            width: '100%',
            minWidth: 0,
          }}
        >
          <img src={logo} className="App-logo" alt="" />
        </Box>

        <Stack spacing={1} sx={{ mb: 1, textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="overline" color="text.secondary">
            Software & audio nerd
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontSize: { xs: '2.25rem', sm: '3rem' } }}
          >
            Kyle Kurz
          </Typography>
        </Stack>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 540,
            mb: 3,
            lineHeight: 1.7,
            textAlign: { xs: 'center', sm: 'left' },
            mx: { xs: 'auto', sm: 0 },
          }}
        >
          I love talking tech, playing music and building things. Check out my resume or explore the projects below.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
          <Button
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="large"
            sx={{ textTransform: 'none', fontWeight: 600, px: 3 }}
          >
            Resume
          </Button>
        </Box>

        <ProjectGrid />
      </Container>

      <Box
        component="footer"
        className="App-footer"
        sx={{ py: 3, textAlign: 'center' }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Kyle Kurz
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
