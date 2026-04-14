import React from 'react';
import logo from './kklogo.svg';
import './App.css';
import ProjectGrid from './ProjectGrid.js';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card
          raised
          sx={{
            color: 'text.secondary',
            m: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardActionArea
            onClick={() => {
              window.location.assign(
                'https://www.dropbox.com/s/f4qz1dfp625dt2b/Kyle%20Kurz%20Resume.pdf?dl=0'
              );
            }}
          >
            <CardHeader
              title="Resume"
              slotProps={{
                title: { align: 'center' },
                subheader: { align: 'center' },
              }}
            />
          </CardActionArea>
        </Card>
      </header>
      <ProjectGrid />
      <footer className="App-footer">
        <Typography>© 2020 Kyle Kurz</Typography>
      </footer>
    </div>
  );
}

export default App;
