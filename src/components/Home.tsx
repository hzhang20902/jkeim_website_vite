import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Slideshow } from './Images';

const card = (
  <React.Fragment>
    <CardContent>
      <Slideshow />
    </CardContent>
  </React.Fragment>
);

export default function Home() {
  return (
    <Box gridRow={2} sx={{padding: '6.8em', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', objectFit: 'contain', width: '75%'}}>
      <Card variant="outlined" raised sx={{margin: '10px', backgroundColor: "#FFC363", maxWidth: '75%'}}>{card}</Card>
      <h1>Philly Rhythm</h1>
    </Box>
  );
}