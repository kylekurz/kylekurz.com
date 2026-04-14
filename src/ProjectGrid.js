import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const projects = [
  {
    title: "Weather's Clear",
    description: [
      'A simple weather app to give you forecast notifications 24 hours in advance.',
    ],
    link: 'https://weathersclear.com',
  },
  {
    title: 'You Belong Church',
    description: [
      'Full featured congregation engagement platform for churches of all sizes.',
    ],
    link: 'https://youbelong.church',
  },
  {
    title: 'Sangoma Technologies, Inc.',
    description: [
      'Key projects for Sangoma as Director of Mobile Unified Communication.',
    ],
    link:
      'https://www.sangoma.com/business-phone-systems/features/softphone/',
  },
];

export default function ProjectGrid() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h3" color="primary">
        Projects
      </Typography>
      <Grid container spacing={3} sx={{ display: 'flex', p: 2 }}>
        {projects.map((card) => (
          <Grid key={card.title} size={{ xs: 12, md: 4 }}>
            <Card
              raised
              sx={{
                p: 2,
                color: 'text.secondary',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardActionArea
                onClick={() => {
                  window.location.assign(card.link);
                }}
              >
                <CardHeader
                  title={card.title}
                  slotProps={{
                    title: { align: 'center' },
                    subheader: { align: 'center' },
                  }}
                  sx={{ bgcolor: 'grey.200' }}
                />
                <CardContent>
                  {card.description.map((line) => (
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
    </Box>
  );
}
