import {
    Grid,
    Typography,
    Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../App.js'

function LeftPanel({ font, fontColor }) {
    return (
        <ThemeProvider theme={theme}>
            <Grid container justifyContent='center' py='30px' gap='30px'>
                <Grid item>
                    <Typography textAlign='center'>
                        <span style={{
                            fontFamily: 'satisfy',
                            fontSize: '40px',
                            color: `${fontColor.primary}`,
                        }}>Vacay</span>
                        <span style={{
                            fontFamily: 'zilla slab',
                            fontSize: '30px',
                            color: `${fontColor.darkGrey}`
                        }}>te</span>
                    </Typography>
                </Grid>
                <Grid item height='100%'>
                    <Grid container alignItems='center' p='20px 30px' gap='20px'>
                        <Grid item>
                            <Typography variant='h6' fontFamily={font} fontSize='18px'>
                                MY TRIPS
                            </Typography>
                        </Grid>
                        <Grid item height='2px' width='100%' sx={{ backgroundColor: '#DFDFDF' }} />
                        <Grid item xs={12}>
                            <Button startIcon={<AddIcon />} variant='contained' fullWidth sx={{ borderRadius: '20px' }}>
                                ADD TRIP
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant='text' fullWidth>
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