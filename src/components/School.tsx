import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { About } from './Images';

const card = (
  <React.Fragment>
    <CardContent>
      <About />
    </CardContent>
  </React.Fragment>
);

export default function School() {
  return (
  <Box gridRow={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '2em', flexDirection: 'column'}}>
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '6.8em', flexDirection: 'column'}}>
      <Card className='fadeLeftMini' variant="outlined" raised sx={{margin: '15px', backgroundColor: "#FFC363", width: 'auto'}}>{card}</Card>
      <h1 className='fadeRightMini'>About The Program/School</h1>
    </Box>
    <Box className='fadeLeftMini' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
      <Card variant="outlined" raised sx={{backgroundColor: "#FFC363", width: '75%'}}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus ipsum nec dolor rutrum fringilla. 
            Suspendisse maximus bibendum lorem, in feugiat diam viverra at. 
            Quisque rhoncus molestie lacinia. Vivamus purus lectus, tincidunt quis sollicitudin quis, pretium iaculis erat. 
            Vivamus sodales elementum tortor, sit amet sagittis neque efficitur ac. Nunc finibus hendrerit maximus. 
            Mauris lacinia scelerisque mauris, nec dapibus ex laoreet sit amet. Nam vel justo eget diam facilisis eleifend ut vel erat. 
            Quisque sit amet tempor nisl. Phasellus cursus placerat justo, sed sagittis orci congue sit amet. Phasellus convallis ante finibus finibus maximus. 
            Pellentesque non efficitur arcu, lacinia egestas nulla. Duis imperdiet risus ante. Morbi sem magna, dignissim quis pharetra vitae, 
            gravida sit amet velit. Curabitur eu luctus libero. Curabitur et laoreet massa. Vestibulum egestas maximus mi eu ultricies. 
            Pellentesque lacinia auctor nisl, et dictum nibh pharetra sit amet.
            Maecenas quis justo neque. Sed euismod finibus aliquet. Aenean tempus ultrices nibh, vitae cursus mauris lacinia non. 
            Suspendisse ac ligula urna. Nam eu ante sagittis felis convallis tincidunt. Ut ullamcorper nibh eu erat molestie placerat. 
            Donec nibh diam, aliquet a erat sit amet, rhoncus congue sem. Donec id vulputate elit.</p>
      </Card>
    </Box>
  </Box>
  );
}