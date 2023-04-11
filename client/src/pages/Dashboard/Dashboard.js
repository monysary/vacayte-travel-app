import { useState } from 'react';
import {
    Grid,
    Typography,
    Box,
    Button
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../App.js';
import dashboardBackground from '../../assets/images/dashboard-background.png';

import auth from '../../utils/auth.js';

import LeftPanel from '../../components/LeftPanel';
import NavBar from '../../components/NavBar';
import Welcome from '../../components/Welcome';
import ViewTrip from '../../components/ViewTrip';
import CreateItinerary from '../../components/CreateItinerary';

import { useLazyQuery } from '@apollo/client';
import { SELECT_TRIP } from '../../utils/queries.js';

export const font = {
    primary: 'Josefin Sans',
    color: {
        primary: '#569597',
        secondary: '#D9BEAA',
        white: '#F5F5F5',
        black: '#252525',
        grey: '#B2B2B2',
        darkGrey: '#606060',
        link: '#2070CB'
    }
}

function Dashboard() {
    if (!localStorage.getItem('auth_token')) {
        window.location.assign('/');
    } else if (auth.tokenExpired()) {
        auth.logout();
    }

    const { data: { firstName } } = auth.getProfile();

    // setState for displaying different components in dashboard
    const [isDisplayed, setIsDisplayed] = useState({
        welcome: true,
        viewTrip: false,
        createItinerary: false,
    })

    // Populating currently selected trip information on dashboard with lazy query
    const [selectTrip, setSelectTrip] = useState('');
    const [loadTrip, { loading: lazyLoading, data: lazyData }] = useLazyQuery(SELECT_TRIP, {
        variables: { _id: selectTrip }
    });
    const lazyTrip = lazyData?.selectTrip || {}
    const lazyStartDate = new Date(lazyTrip.startDate).toLocaleDateString('en-us', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',

    })
    const lazyEndDate = new Date(lazyTrip.endDate).toLocaleDateString('en-us', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',

    })

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" wrap='nowrap' sx={{ height: '100vh' }}>
                <Grid item md={2}>
                    <LeftPanel
                        font={font.primary}
                        fontColor={font.color}
                        isDisplayed={isDisplayed}
                        setIsDisplayed={setIsDisplayed}
                        setSelectTrip={setSelectTrip}
                        tripName={!lazyLoading && lazyTrip.tripName}
                        loadTrip={loadTrip}
                    />
                </Grid>
                <Grid item md={10}
                    sx={{
                        height: '100%',
                        backgroundImage: `url(${dashboardBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <Box height='100vh' overflow='auto'>
                        <Grid container p='30px 40px 20px' wrap='nowrap' justifyContent='space-between'>
                            {/* <SearchBar font={font.primary} fontColor={font.color} /> */}
                            <NavBar
                                selectTrip={selectTrip}
                                isDisplayed={isDisplayed}
                                setIsDisplayed={setIsDisplayed}
                            />
                            <Button variant='outlined' color='secondary' onClick={() => auth.logout()}>
                                Logout
                            </Button>
                        </Grid>
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
                                <Box sx={{ display: selectTrip === '' ? 'none' : 'block' }}>
                                    <Typography variant='h4' fontFamily={font.primary} color={`${font.color.white}`} textAlign='right'>
                                        {!lazyLoading && `${lazyTrip.tripName}`}
                                    </Typography>
                                    <Typography variant='subtitle1' fontFamily={font.primary} color={`${font.color.grey}`} textAlign='right'>
                                        {!lazyLoading && `${lazyTrip.location}`}
                                    </Typography>
                                    <Typography variant='subtitle1' fontFamily={font.primary} color={`${font.color.grey}`} textAlign='right'>
                                        {!lazyLoading && `${lazyStartDate} - ${lazyEndDate}`}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box pt='40px' >
                            <Welcome
                                font={font.primary}
                                fontColor={font.color}
                                isDisplayed={isDisplayed}
                            />
                            <ViewTrip
                                font={font.primary}
                                fontColor={font.color}
                                isDisplayed={isDisplayed}
                                tripInfo={lazyTrip}
                                loadTrip={loadTrip}
                            />
                            <CreateItinerary 
                                font={font.primary}
                                fontColor={font.color}
                                isDisplayed={isDisplayed}
                                lazyStartDate={lazyStartDate}
                                lazyEndDate={lazyEndDate}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Dashboard;