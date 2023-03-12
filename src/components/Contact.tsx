import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Headshot } from './Images';

const card = (
  <React.Fragment>
    <CardContent>
      <Headshot />
    </CardContent>
  </React.Fragment>
);

export default function Contact() {

  React.useEffect(() => {
    window.scrollBy({
      top: 0,
      left: 100,
      behavior: 'smooth'
    });
  }, [])
  
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',  objectFit: 'fill', width: '100%'}}>
      <Card className='descrip' variant="outlined" raised sx={{backgroundColor: "#FFC363", width: 'auto'}}>{card}</Card>
      <h1 className='fadeRightMini'>About The Director</h1>
      <Card className='descrip' variant="outlined" raised sx={{backgroundColor: "#FFC363", width: '70%'}}>
        <p>
          Joseph has toured internationally with several artists, including Saleka Shyamalan, Ryan Tennis, and Bakithi Kumalo.
          Joseph has performed at music festivals like Austin City limits, Music Midtown, and Bonnaroo as well as on the Kelly Clarkson show. 
          As a recording artist, he has recorded drums for the Apple TV series, <i>Servant</i>. Around this time, Joseph modeled his own drum lessons business after his father's music school and founded, “Philly Rhythm.” </p>
      </Card>
      <Card className='descrip' variant="outlined" raised sx={{backgroundColor: "#FFC363", width: '70%'}}>
        <p>Joseph grew up in his dad's music school, Loudoun Music Instruction, and was surrounded by music from birth. 
          Placed in a band with his father's advanced music students, Joseph had the opportunity to perform at music festivals and large venues like the Rock and Roll Hall of Fame at age 12. 
          Joseph left his job bussing tables and began teaching drum lessons at age 15 for Loudoun Music Instruction. 
        </p>
      </Card>
      <Card className='descrip' variant="outlined" raised sx={{backgroundColor: "#FFC363", width: '70%'}}>
        <p>
          At age 16, Joseph won the Percussive Arts Society Drum Competition in Centreville, VA and was awarded a scholarship to the "National Jazz Workshop" at Shenandoah University. 
          He was placed in Alan Baylock's orchestra and performed at the Arlington Jazz Festival in 2014. 
          Later Joseph was awarded the “Promising Artist” scholarship to attend an undergraduate studies of music program at the University of the Arts in Philadelphia. 
        </p>
          <p><a href='/register'>Sign up</a> your student for drum lessons with Joseph today!</p>
      </Card>
    </Box>
  );
}