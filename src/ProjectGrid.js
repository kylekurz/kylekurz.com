import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const projects = [
  {
    subtitle: 'Current role',
    title: 'Wildfire Systems',
    description:
      'Experienced engineering leadership focused on security, compliance and culture. Equally happy diving into client code and scalability issues.',
    link: 'https://wildfire-corp.com',
    linkLabel: 'wildfire-corp.com',
  },
  {
    subtitle: 'Passion project',
    title: 'Double-K Audio',
    description:
      'Audio recording, production, and rig-building services. Visit the site for offerings and how to get in touch.',
    link: 'https://doublekaudio.com',
    linkLabel: 'doublekaudio.com',
  },
  {
    subtitle: 'Previous experience',
    title: 'Sangoma',
    description:
      'Key work as Director of Mobile Unified Communications—softphone, voice, and the systems businesses rely on every day.',
    link:
      'https://www.sangoma.com/',
    linkLabel: 'sangoma.com',
  },
];

function CalloutCard({ title, subtitle, body, href, linkLabel }) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderColor: 'rgba(255, 255, 255, 0.08)',
        background:
          'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <CardContent
        sx={{
          flex: 1,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          '&:last-child': { pb: 3 },
        }}
      >
        <Typography variant="overline" color="primary" sx={{ fontWeight: 600 }}>
          {subtitle}
        </Typography>
        <Typography variant="h5" component="h2" sx={{ mt: 0.5, mb: 1.5 }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, flexGrow: 1 }}
        >
          {body}
        </Typography>
        {href ? (
          <Button
            component={Link}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="small"
            sx={{ alignSelf: 'flex-start', textTransform: 'none', fontWeight: 600 }}
          >
            {linkLabel}
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}

export default function ProjectGrid() {
  return (
    <Box sx={{ mt: 4 }}>
      <Box
        sx={{
          display: 'grid',
          gap: 2.5,
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          alignItems: 'stretch',
        }}
      >
        {projects.map((card) => (
          <Box
            key={card.title}
            sx={{
              minWidth: 0,
              display: 'flex',
              height: '100%',
            }}
          >
            <CalloutCard
              title={card.title}
              subtitle={card.subtitle}
              body={card.description}
              href={card.link}
              linkLabel={card.linkLabel}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
