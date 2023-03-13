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
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School'

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1, left: 0, top: 0, width: 'auto', zIndex: 1}}>
      <AppBar elevation={0} sx={{backgroundColor: '#FFFFE8' }}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', paddingX: '10%', width: 'auto'}}>
            
            <Sidebar />

            <Link href='/register'>
                <Tooltip title='Sign Up!'>
                <Button color="inherit" className='cart'>
                    <SchoolIcon style={{color:'#FFC363'}} fontSize='large'/>
                </Button>
                </Tooltip>
            </Link>

            <Link href='/'>
                <Tooltip title='Home'>
                <Box component='img' src={Logo} sx={{marginTop: 1, height: '85px'}} className='logo' />
                </Tooltip>
            </Link>

            <Link href='/contact'>
            <Button color="inherit" className='cart'>
                <Tooltip title='Contact'>
                <EmailIcon style={{color:'#FFC363'}} fontSize='large'/>
                </Tooltip>
            </Button>
            </Link>
            <Link href='/shop'>
            <Button color="inherit" className='cart'>
                <Tooltip title='Transcriptions & more'>
                <ShoppingCartIcon sx={{color:'#FFC363'}}/>
                </Tooltip>
            </Button>
            </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}