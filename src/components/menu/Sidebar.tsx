import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


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
      <List>
        {['Home', 'School of Rhythm', 'Director'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Contact', 'Joseph Keim'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <MailIcon /> : <InboxIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
          <Button onClick={toggleDrawer('menu', true)} disableFocusRipple disableRipple>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              disableFocusRipple
              disableTouchRipple
              sx={{ mr: 2 }}
            >
              <MenuIcon sx={{color:'#FFC363',}}/>
            </IconButton>
          </Button>
        <Drawer
          hideBackdrop={false}
          PaperProps={{
            sx: {backgroundColor:"#FFC363"}
          }}
          open={state['menu']}
          onClose={toggleDrawer('menu', false)}
        >
          {list('menu')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}