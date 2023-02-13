import {
    Grid,
    Typography,
    Button
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../App.js';

function RightPanel() {
    return (
        <ThemeProvider theme={theme}>
            <Grid container justifyContent='center' py='30px' gap='30px'>
                <Grid item>
                    <Button variant='outlined'>
                        Logout
                    </Button>
                </Grid>
                <Grid item height='100%'>
                    <Grid container alignItems='center' p='20px 30px' gap='20px'>
                        <Grid item>
                            <Typography variant='h6' fontFamily='Josefin Sans' fontSize='18px'>
                                SAVED ACTIVITIES
                            </Typography>
                        </Grid>
                        <Grid item height='2px' width='100%' sx={{ backgroundColor: '#DFDFDF' }} />
                        <Grid item xs={12}>
                            <Typography textAlign='center' fullWidth sx={{ color: '#252525' }}>
                                No Trip Selected
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default RightPanel;