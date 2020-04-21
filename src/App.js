import React from 'react';
import logo from './kklogo.svg';
import './App.css';
import ProjectGrid from './ProjectGrid.js';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  grid: {
    justifyContent: 'center'
  },
  paper: {
    color: theme.palette.text.secondary,
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  control: {
    padding: theme.spacing(2),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card className={classes.paper} raised>
          <CardActionArea onClick={() => { window.location.assign('https://www.dropbox.com/s/f4qz1dfp625dt2b/Kyle%20Kurz%20Resume.pdf?dl=0'); }} >
          <CardHeader
            title='Resume'
            titleTypographyProps={{ align: 'center' }}
            subheaderTypographyProps={{ align: 'center' }}
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
