import {
    Grid,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../App.js';
import dashboardBackground from '../../assets/images/dashboard-background.png';

import LeftPanel from '../../components/LeftPanel';
import RightPanel from '../../components/RightPanel';
import SearchBar from '../../components/SearchBar';

function Dashboard() {
    if (!localStorage.getItem('auth_token')) {
        window.location.assign('/');
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" wrap='nowrap' sx={{ height: '100vh' }}>
                <Grid item md={2}>
                    <LeftPanel />
                </Grid>
                <Grid item md={8}
                    sx={{
                        height: '100%',
                        backgroundImage: `url(${dashboardBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    {/* -----Dashboard----- */}
                    <Grid container justifyContent='center' wrap='nowrap' sx={{ height: '100vh' }} py='30px' gap='10px'>
                        <Grid item xs={8}>
                            <SearchBar />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={2}>
                    <RightPanel />
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Dashboard;