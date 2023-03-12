import { 
    AppBar,
    Box,
    Button,
    Link,
    Toolbar,
    Tooltip,
} from '@mui/material'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Sidebar from './Sidebar';
import Logo from '../../assets/cleanlogo.png'
import { SiGmail } from 'react-icons/si'
import { IoMdSchool } from 'react-icons/io'


export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1, left: 0, top: 0, width: 'auto', zIndex: 1}}>
      <AppBar elevation={0} sx={{backgroundColor: '#FFFFE8' }}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', paddingX: '10%', width: 'auto'}}>
            
            <Sidebar />

            <Link href='/register'>
                <Button color="inherit" className='cart'>
                    <IoMdSchool style={{color:'#FFC363'}} size={30}/>
                </Button>
            </Link>

            <Link href='/'>
                <Box component='img' src={Logo} sx={{marginTop: 1, height: '85px'}} className='logo' />
            </Link>

            <Link href='/contact'>
            <Button color="inherit" className='cart'>
                <SiGmail style={{color:'#FFC363'}} size={30}/>
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