import React, { useEffect } from 'react';
import {
  Box,
  Card,
  CardContent
} from '@mui/material'
import { About } from './Images';

const card = (
  <React.Fragment>
    <CardContent>
      <About />
    </CardContent>
  </React.Fragment>
);

export default function School() {

  useEffect(() => {
    window.scrollBy({
      top: 0,
      left: 100,
      behavior: 'smooth'
    });
  }, [])

  return (
  <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',  objectFit: 'fill', width: '100%'}}>
    <Card className='fadeLeftMini' variant="outlined" raised sx={{margin: '10px', backgroundColor: "#FFC363", width: 'auto'}}>{card}</Card>
    <h1 className='fadeRightMini'>About The Program</h1>
    <Card className='descrip' variant="outlined" raised sx={{backgroundColor: "#FFC363"}}>
    <p>
    Philly Rhythm is…
        <ul>
        
        <li>An environment where students feel valued and know their efforts matter.</li>
        <li>An opportunity to experience failure as a step toward success without fear of embarrassment.</li>
        <li>A chance to iterate unlimited ideas and discover what it means to be on a roll!</li>
        </ul>
        </p>
    </Card>
    <Card className='descrip' variant="outlined" raised sx={{backgroundColor: "#FFC363"}}>
      <p>Philly Rhythm was established by Joseph Keim in 2021. Students receive weekly, private lessons and are groomed not only to become better musicians, but better problem solvers, communicators, and leaders. After only a few drum lessons, students will know how to:
        <ul>
          <li>Read music</li>
          <li>Write music</li>
          <li>Keep time in different time signatures</li>
          <li>Improvise</li>
          <li>Play a variety of genres and styles</li>
        </ul>
        </p>
        <p>
        Philly Rhythm's core purpose is to ignite a passion for learning. We believe that continuous improvement is a lifestyle. At this school, students don't wait to be great. 
        They funnel passion and curiosity into the tank of discipline that fuels a culture of excellence. 
        Students are given opportunities that are handpicked according to their needs. 
        Opportunities include joining an ensemble, performing live, starring in drum cover videos, and more. <a href='/register'>Sign up</a> your student today!
        </p>
    </Card>
  </Box>
  );
}