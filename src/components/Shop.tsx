import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Transcription } from './Images';
import "react-pdf/dist/esm/Page/TextLayer.css";
import assets from '../assets';

const transcriptions = [assets.tr1, assets.tr2, assets.tr3]

export default function Shop() {

  React.useEffect(() => {
    window.scrollBy({
      top: 0,
      left: 100,
      behavior: 'smooth'
    });
  }, [])

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', objectFit: 'fill', width: '100%'}}>
        <h1>Transcriptions</h1>
        {transcriptions.map((el, index) => (<Card key={index} className='descrip' variant="outlined" raised sx={{backgroundColor: "#FFC363", width: 'auto', objectFit: 'cover'}}><Transcription transcription={el}/></Card>))}
    </Box>
  );
}