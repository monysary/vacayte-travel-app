import {
    Grid,
    Typography,
    Box
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../App.js';
import dashboardBackground from '../../assets/images/dashboard-background.png';

import auth from '../../utils/auth.js';

import LeftPanel from '../../components/LeftPanel';
import RightPanel from '../../components/RightPanel';
import SearchBar from '../../components/SearchBar';
import AddTripForm from '../../components/AddTripForm';

function Dashboard() {
    if (!localStorage.getItem('auth_token')) {
        window.location.assign('/');
    } else if (auth.tokenExpired()) {
        auth.logout();
    }

    const font = {
        primary: 'Josefin Sans',
        color: {
            primary: '#569597',
            secondary: '#D9BEAA',
            white: '#F5F5F5',
            black: '#252525',
            grey: '#B2B2B2',
            darkGrey: '#606060'
        }
    }

    const { data: { firstName } } = auth.getProfile();

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" wrap='nowrap' sx={{ height: '100vh' }}>
                <Grid item md={2}>
                    <LeftPanel font={font.primary} fontColor={font.color}/>
                </Grid>
                <Grid item md={8}
                    sx={{
                        height: '100%',
                        backgroundImage: `url(${dashboardBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <Box height='100vh' overflow='auto'>
                        <Box p='30px 20% 20px'>
                            <SearchBar font={font.primary} fontColor={font.color}/>
                        </Box>
                        <Grid container wrap='nowrap' justifyContent='space-between' px='40px'>
                            <Grid item>
                                <Typography variant='h4' fontFamily={font.primary} color={`${font.color.white}`}>
                                    Hello, {firstName}
                                </Typography>
                                <Typography variant='subtitle1' fontFamily={font.primary} color={`${font.color.grey}`}>
                                    Let's make some memories!
                                </Typography>
                            </Grid>
                            <Grid item> 
                                <Typography variant='h4' fontFamily={font.primary} color={`${font.color.white}`} textAlign='right'>
                                    Philippines Trip    
                                </Typography>
                                <Typography variant='subtitle1' fontFamily={font.primary} color={`${font.color.grey}`} textAlign='right'>
                                    Manila, Philippines
                                </Typography>
                                <Typography variant='subtitle1' fontFamily={font.primary} color={`${font.color.grey}`} textAlign='right'>
                                    March 12, 2023 - March 31, 2023
                                </Typography>
                            </Grid>
                        </Grid>
                        <Box pt='40px' >
                            <AddTripForm font={font.primary} fontColor={font.color}/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={2}>
                    <RightPanel font={font.primary} fontColor={font.color}/>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Dashboard;