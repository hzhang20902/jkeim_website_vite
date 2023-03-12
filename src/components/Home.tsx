import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Slideshow } from './Images';

const card = (
  <React.Fragment>
    <CardContent>
      <Slideshow />
    </CardContent>
  </React.Fragment>
);

export default function Home() {

  React.useEffect(() => {
    window.scrollBy({
      top: 0,
      left: 100,
      behavior: 'smooth'
    });
  }, [])

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
      <Card className='descrip' variant="outlined" raised sx={{backgroundColor: "#FFC363"}}>{card}</Card>
      <h1>Philly Rhythm</h1>
      <Card className='descrip' variant="outlined" raised sx={{backgroundColor: "#FFC363"}}>
      <p>Welcome to Philly Rhythm, the drum school where learning to play the drums is always fun and exciting!</p>
      <p>Our school is located in the vibrant Mt. Airy neighborhood of Philadelphia, and our expert drum teacher, Joseph Keim, is here to help you achieve your drumming goals.</p>
      <p>At Philly Rhythm, we believe that learning to play the drums should be a fun and rewarding experience. That's why we offer a wide range of lesson formats and styles to suit every student's needs.</p> 
      </Card>
      <Card className='descrip' variant="outlined" raised sx={{backgroundColor: "#FFC363"}}>
      <p>Whether you prefer one-on-one lessons, group classes, or online instruction-- 
        we've got you covered. Our lessons are tailored to your skill level and musical interests, so you can learn at your own pace and explore the genres that inspire you.
        Whether you're a beginner looking to learn the basics or an experienced player seeking to improve your skills, Philly Rhythm is the drum school for you. Sign up <a href='/register'>here</a> to start your drumming journey!</p>
      </Card>
    </Box>
  );
}