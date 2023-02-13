import {
    Grid,
    Typography,
    Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../App.js'

function LeftPanel() {
    return (
        <ThemeProvider theme={theme}>
            <Grid container alignItems='center' py='30px' gap='30px'>
                <Grid item xs={12}>
                    <Typography textAlign='center'>
                        <span style={{
                            fontFamily: 'satisfy',
                            fontSize: '40px',
                            color: '#569597',
                        }}>Vacay</span>
                        <span style={{
                            fontFamily: 'zilla slab',
                            fontSize: '30px',
                            color: '#606060'
                        }}>te</span>
                    </Typography>
                </Grid>
                <Grid item height='100%'>
                    <Grid container alignItems='center' p='20px 30px' gap='20px'>
                        <Grid item>
                            <Typography variant='h6' fontFamily='Josefin Sans' fontSize='20px'>
                                MY TRIPS
                            </Typography>
                        </Grid>
                        <Grid item height='2px' width='100%' sx={{ backgroundColor: '#DFDFDF' }} />
                        <Grid item xs={12}>
                            <Button startIcon={<AddIcon />} variant='contained' fullWidth sx={{borderRadius: '20px'}}>
                                ADD TRIP
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant='text' fullWidth sx={{color: '#252525'}}>
                                Philippines Trip
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default LeftPanel;