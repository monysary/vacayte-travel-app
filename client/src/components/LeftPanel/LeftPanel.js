import { useEffect, useState } from 'react';
import {
    Grid,
    Typography,
    Button,
    Link,
    Box
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../App.js'

import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_MY_TRIPS } from '../../utils/queries.js';

function LeftPanel({ font, fontColor, isDisplayed, setIsDisplayed, setSelectTrip, tripName }) {
    const [tripList, setTripList] = useState([]);

    const [loadGetMyTrips, { loading, data }] = useLazyQuery(GET_MY_TRIPS);
    const myTrips = data?.getMyTrips.trips || {};

    useEffect(async () => {
        await loadGetMyTrips()
        setTripList(myTrips)

    }, [myTrips, loadGetMyTrips])

    function TripsButton() {
        if (!loading && tripList.length > 0) {
            return tripList.map((trip) =>
                <Grid key={trip._id} item xs={12}>
                    <Button
                        variant={trip.tripName === tripName ? 'outlined' : 'text'}
                        fullWidth
                        sx={{
                            color: `${fontColor.black}`,
                            padding: '10px 0px',
                            border: trip.tripName === tripName ? `2px solid ${fontColor.primary}` : 'none'
                        }}
                        onClick={() => setSelectTrip(`${trip._id}`)}
                    >
                        {trip.tripName}
                    </Button>
                </Grid>
            )
        } else {
            return (<></>)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ height: '100vh' }}>
                <Grid container justifyContent='center' py='30px' gap='30px'>
                    <Grid item>
                        <Link sx={{ textDecoration: 'none', '&:hover': { cursor: 'pointer' } }}
                            onClick={() => {
                                setIsDisplayed({
                                    welcome: true,
                                    addTripForm: false
                                })
                            }}
                        >
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
                        </Link>
                    </Grid>
                    <Grid item height='100%'>
                        <Grid container alignItems='center' p='20px 30px' gap='20px' height='100%'>
                            <Grid item>
                                <Typography variant='h6' fontFamily={font} fontSize='18px'>
                                    MY TRIPS
                                </Typography>
                            </Grid>
                            <Grid item height='2px' width='100%' sx={{ backgroundColor: '#DFDFDF' }} />
                            <Grid item xs={12}>
                                <Button
                                    startIcon={<AddIcon />}
                                    variant='contained'
                                    fullWidth sx={{ borderRadius: '20px' }}
                                    onClick={() => {
                                        setIsDisplayed({
                                            ...isDisplayed,
                                            welcome: false,
                                            addTripForm: true,
                                        })
                                    }}
                                >ADD TRIP</Button>
                            </Grid>
                            <Grid item xs={12} overflow='auto'>
                                <TripsButton />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )
}

export default LeftPanel;