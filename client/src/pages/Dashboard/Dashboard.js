import {
    Grid,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../Home/Home.js';
import dashboardBackground from '../../assets/images/dashboard-background.png';

function Dashboard() {
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" wrap='nowrap' sx={{ height: '100vh' }}>
                {/* Left Panel */}
                <Grid item md={2}>

                </Grid>
                {/* Dashboard */}
                <Grid item md={8}
                    sx={{
                        height: '100%',
                        backgroundImage: `url(${dashboardBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >

                </Grid>
                {/* Right Panel */}
                <Grid item md={2}>

                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Dashboard;