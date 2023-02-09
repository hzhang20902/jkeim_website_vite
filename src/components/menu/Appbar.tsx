import { 
    AppBar,
    Box,
    Button,
    Link,
    Toolbar,
    Tooltip,
    Typography
} from '@mui/material'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Sidebar from './Sidebar';
import Logo from '../../assets/cleanlogo.png'
import { GiDrum, GiSandwich, GiMusicalScore, GiDrumKit } from 'react-icons/gi'
import { SiGmail } from 'react-icons/si'
import { IoMdSchool } from 'react-icons/io'


export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1, top: 0, left: 0, position: 'fixed', width: '100%', zIndex: 1 }}>
      <AppBar color='transparent' elevation={0}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', paddingX: '20%'}}>
            
            <Sidebar />

            <Link href='/about'>
                <Button color="inherit" className='cart'>
                    <IoMdSchool style={{color:'#FFC363'}} size='medium'/>
                </Button>
            </Link>

            <Link href='/'>
                <Box component='img' src={Logo} sx={{marginTop: 1, height: '85px'}} className='logo' />
            </Link>

            <Link href='/contact'>
                <Button color="inherit" className='cart'>
                    <SiGmail style={{color:'#FFC363'}} size='medium'/>    
                </Button>
            </Link>
            <Button color="inherit" className='cart'>
                <Tooltip title='Coming soon!'>
                <ShoppingCartIcon sx={{color:'#FFC363'}}/>
                </Tooltip>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}