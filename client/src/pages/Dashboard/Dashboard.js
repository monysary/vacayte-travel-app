import {
    Grid,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../Home/Home.js';

function Dashboard() {
    return (
        <ThemeProvider theme={theme}>
            <Grid container>
                {/* Left Panel */}
                <Grid item md={2}>

                </Grid>
                {/* Dashboard */}
                <Grid item md={8}>

                </Grid>
                {/* Right Panel */}
                <Grid item md={2}>

                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Dashboard;