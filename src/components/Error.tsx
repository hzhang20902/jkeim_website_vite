import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { NotFound } from './Images';


const card = (
  <React.Fragment>
    <CardContent>
        <NotFound/>
    </CardContent>
  </React.Fragment>
);

export default function ErrorPage() {

    React.useEffect(() => {
        window.scrollBy({
          top: 0,
          left: 100,
          behavior: 'smooth'
        });
      }, [])
      
  return (
    <Box sx={{paddingTop:'7em', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', objectFit: 'fill', width: '100%'}}>
        <h1>Lost but not forgotten... <br/><a href='/'>Home</a></h1>
      <Card variant="outlined" raised sx={{margin: '10px', backgroundColor: "#FFC363", width: 'auto'}}>{card}</Card>
    </Box>
  );
}