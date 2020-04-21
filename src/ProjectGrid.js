import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  grid: {
    justifyContent: 'center'
  },
  paper: {
    padding: theme.spacing(2),
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

const projects = [
  {
    title: "Weather's Clear",
    description: ['A simple weather app to give you forecast notifications 24 hours in advance.'],
    link: "https://weathersclear.com",
  },
  {
    title: 'You Belong Church',
    description: ['Full featured congregation engagement platform for churches of all sizes.'],
    link: "https://youbelong.church",
  },
  {
    title: 'Sangoma Technologies, Inc.',
    description: ['Key projects as Director of Mobile Unified Communication.'],
    link: "https://www.sangoma.com/business-phone-systems/features/softphone/",
  },
];

export default function ProjectGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h1' color='primary'>Projects</Typography> 
      <Grid container spacing={3} className={classes.grid}>
        {projects.map(card => (
          <Grid item key={card.title} xs={2}>
            <Card className={classes.paper} raised>
              <CardActionArea onClick={() => { window.location.assign(card.link); }} >
              <CardHeader
                title={card.title}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                className={classes.cardHeader}
                />
              <CardContent>
                {card.description.map(line => (
                  <Typography variant="subtitle1" align="center" key={line}>
                  {line}
                  </Typography>
                ))}
              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}