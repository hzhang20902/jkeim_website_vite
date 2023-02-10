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
    <Box sx={{padding: '6.1em'}}>
      <Card variant="outlined" raised sx={{margin: '10px', backgroundColor: "#FFC363", position: 'relative', maxWidth: "850px"}}>{card}</Card>
      <h1>Philly Rhythm</h1>
    </Box>
  );
}