import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Images from './Images';

const card = (
  <React.Fragment>
    <CardContent>
      <Images />
    </CardContent>
  </React.Fragment>
);

export default function Home() {
  return (
    <Box sx={{maxWidth: "850px"}}>
      <Card variant="outlined" raised sx={{backgroundColor: "#FFC363"}}>{card}</Card>
    </Box>
  );
}