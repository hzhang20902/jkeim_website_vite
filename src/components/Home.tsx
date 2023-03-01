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
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', objectFit: 'fill', width: '100%'}}>
      <Card variant="outlined" raised sx={{backgroundColor: "#FFC363", maxWidth: '75%'}}>{card}</Card>
      <h1>Philly Rhythm</h1>
      <Card className='descrip' variant="outlined" raised sx={{backgroundColor: "#FFC363"}}>
      <p>Welcome to Philly Rhythm, the drum school where learning to play the drums is always fun and exciting! Our school is located in the vibrant Mt. Airy neighborhood of Philadelphia, and our expert drum teacher, Joseph Keim, is here to help you achieve your drumming goals.

Joseph Keim is an experienced and passionate drummer who has been playing for over 20 years. He has taught students of all ages and skill levels, and he knows how to make learning the drums engaging and enjoyable. Whether you're a beginner or an advanced player, Joseph can help you improve your technique, develop your musical style, and achieve your musical dreams.

At Philly Rhythm, we believe that learning to play the drums should be a fun and rewarding experience. That's why we offer a wide range of lesson formats and styles to suit every student's needs. Whether you prefer one-on-one lessons, group classes, or online instruction, we've got you covered. Our lessons are tailored to your skill level and musical interests, so you can learn at your own pace and explore the genres that inspire you.

So, whether you're a beginner looking to learn the basics or an experienced player seeking to improve your skills, Philly Rhythm is the drum school for you. Register here for a callback to schedule a lesson with Joseph Keim and start your drumming journey!</p>
      </Card>
    </Box>
  );
}