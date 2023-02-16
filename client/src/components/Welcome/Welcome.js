import {
    Container,
    CssBaseline,
    Box,
    Typography,
    Grid,
    Button,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../App.js';

import { Link as RouterLink } from 'react-router-dom';

function Welcome({ font, fontColor, isDisplayed, setIsDisplayed }) {
    return (
        <ThemeProvider theme={theme}>
            <Container
                maxWidth="sm"
                sx={{
                    backgroundColor: '#F5F5F5',
                    borderRadius: '20px'
                }}>
                <CssBaseline />
                <Box
                    sx={{
                        display: isDisplayed.welcome ? 'flex' : 'none',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '40px 20px'
                    }}
                >
                    <Typography component="h2" variant="h3" fontFamily={font}>
                        Welcome!
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2} my='10px'>
                            <Typography textAlign='center' lineHeight='30px'>
                                Thank you for using <span style={{
                                    fontFamily: 'satisfy',
                                    fontSize: '24px',
                                    color: `${fontColor.primary}`,
                                }}>Vacay</span><span style={{
                                    fontFamily: 'zilla slab',
                                    fontSize: '18px',
                                    color: `${fontColor.darkGrey}`,
                                }}>te</span>! <br />
                                This web app was designed to be a one stop shop location for users to search for places to eat or things to do on their next vacation,
                                then create an itinerary with ease.
                                The app is powered by Yelp, with searches and information being pulled from their database for display.
                                Start making memories by clicking on the button below or clicking the ADD TRIP button to create your next trip!
                            </Typography>
                        </Grid>
                        <Grid container justifyContent='center'>
                            <RouterLink to='/add-trip' style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Create Trip
                                </Button>
                            </RouterLink>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Welcome;