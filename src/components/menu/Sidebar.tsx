import * as React from 'react';
import { 
  Box, 
  Button, 
  SwipeableDrawer, 
  Divider,
  Link,
  List,
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  IconButton
} from '@mui/material'

import { GiDrum, GiSandwich, GiMusicalScore, GiDrumKit } from 'react-icons/gi'
import { SiGmail } from 'react-icons/si'
import { IoMdSchool } from 'react-icons/io'


export default function Sidebar() {
  const [state, setState] = React.useState({
    menu: false
  });

  const toggleDrawer =
    (anchor: 'menu', open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: 'menu') => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{width: '100%'}}>
        {['Home', 'Philly Rhythm', 'Lessons'].map((text, index) => (
         <Link href={index === 2 || index === 1 ? index === 1 ? '/about' : '/register' : '/'} sx={{textDecoration: 'none', color: 'inherit'}}>
          <ListItem key={text} disablePadding >
             
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <GiDrum size='1.7em'/> : null}
                {index === 1 ? <GiDrumKit size='1.7em'/> : null}
                {index === 2 ? <IoMdSchool size='1.7em'/> : null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List sx={{width: '100%'}}>
        {['Joseph Keim', 'Shop'].map((text, index) => (
          <Link href={index === 0? '/contact' : '/shop'} sx={{textDecoration: 'none', color: 'inherit'}}>
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <SiGmail size='1.7em'/> : null}
                {index === 1 ? <GiMusicalScore size='1.7em'/> : null}
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
          <Button onClick={toggleDrawer('menu', true)} sx={{"&:hover": {backgroundColor: "transparent", }}} className='menu' disableFocusRipple disableRipple>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <GiSandwich style={{color:'#FFC363'}}/>
            </IconButton>
          </Button>
        <SwipeableDrawer
          hideBackdrop={false}
          PaperProps={{
            sx: {backgroundColor:"#FFC363", fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"}
          }}
          open={state['menu']}
          onClose={toggleDrawer('menu', false)}
          onOpen={toggleDrawer('menu', true)}
          transitionDuration={450}
        >
          {list('menu')}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}