import { 
    AppBar,
    Box,
    Button,
    Link,
    Toolbar,
    Typography
} from '@mui/material'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Sidebar from './Sidebar';
import Logo from '../../assets/cleanlogo.png'


export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1, top: 0, left: 0, position: 'fixed', width: '100%' }}>
      <AppBar color='transparent' elevation={0}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Sidebar />
            <Link href='/'>
            <Box component='img' src={Logo} sx={{marginTop: 1, height: '85px'}} className='logo' />
            </Link>
            <Button color="inherit" disableRipple disableFocusRipple>
                <ShoppingCartIcon sx={{color:'#FFC363'}}/>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}