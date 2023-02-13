import { useState } from 'react';
import {
    Container,
    CssBaseline,
    Box,
    Typography,
    Grid,
    TextField,
    Button,
} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SpaIcon from '@mui/icons-material/Spa';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import TourIcon from '@mui/icons-material/Tour';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import HikingIcon from '@mui/icons-material/Hiking';
import LandscapeIcon from '@mui/icons-material/Landscape';
import LiquorIcon from '@mui/icons-material/Liquor';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../App.js';

function AddTripForm({ font, fontColor }) {
    const [formState, setFormState] = useState({
        tripName: "",
        location: "",
        startDate: "",
        endDate: "",
        activities: [],
    });

    const handleInputChange = ({ target: { name, value } }) => {
        setFormState({ ...formState, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        console.log('Form Submitted!');
    };

    const activity = [
        {
            name: 'Restaurant',
            icon: <RestaurantIcon />
        },
        {
            name: 'Relaxation',
            icon: <SpaIcon />
        },
        {
            name: 'Shopping',
            icon: <LocalMallIcon />
        },
        {
            name: 'Tours',
            icon: <TourIcon />
        },
        {
            name: 'Beaches',
            icon: <BeachAccessIcon />
        },
        {
            name: 'Hiking',
            icon: <HikingIcon />
        },
        {
            name: 'Sight Seeing',
            icon: <LandscapeIcon />
        },
        {
            name: 'Drinks',
            icon: <LiquorIcon />
        },
        {
            name: 'Fine Dining',
            icon: <DinnerDiningIcon />
        },
    ]

    function ActivityButton({ name, icon }) {
        return (
            <Grid item xs={7}>
                <Button
                    fullWidth
                    startIcon={icon}
                    endIcon
                    variant='outlined'
                    color='info'
                    sx={{ justifyContent: 'space-between' }}
                >{name}</Button>
            </Grid>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" sx={{ backgroundColor: '#F5F5F5', borderRadius: '20px' }}>
                <CssBaseline />
                {/* -----Trip Information----- */}
                <Box
                    sx={{
                        display: 'none',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '40px 20px'
                    }}
                >
                    <Typography component="h2" variant="h4" fontFamily={font}>
                        Trip Information
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography fontFamily={font}>Trip Name</Typography>
                                <TextField
                                    required
                                    fullWidth
                                    placeholder="Trip Name"
                                    name="tripName"
                                    type='text'
                                    value={formState.tripName}
                                    onChange={handleInputChange}
                                    inputProps={{
                                        style: {
                                            padding: '10px'
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography fontFamily={font}>Where are you going?</Typography>
                                <TextField
                                    required
                                    fullWidth
                                    placeholder="Location"
                                    name="location"
                                    type='text'
                                    value={formState.location}
                                    onChange={handleInputChange}
                                    inputProps={{
                                        style: {
                                            padding: '10px'
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography fontFamily={font}>Start Date</Typography>
                                <TextField
                                    required
                                    fullWidth
                                    placeholder="MM/DD/YYYY"
                                    name="startDate"
                                    type='text'
                                    value={formState.startDate}
                                    onChange={handleInputChange}
                                    inputProps={{
                                        style: {
                                            padding: '10px'
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography fontFamily={font}>End Date</Typography>
                                <TextField
                                    required
                                    fullWidth
                                    placeholder="MM/DD/YYYY"
                                    name="endDate"
                                    type='text'
                                    value={formState.endDate}
                                    onChange={handleInputChange}
                                    inputProps={{
                                        style: {
                                            padding: '10px'
                                        }
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent='center' gap='40px'>
                            <Button
                                type="submit"
                                variant="outlined"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Clear
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Next
                            </Button>
                        </Grid>
                    </Box>
                </Box>
                {/* -----Trip Activities----- */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '40px 20px'
                    }}
                >
                    <Typography component="h2" variant="h4" fontFamily={font}>
                        Activities
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2} justifyContent='center'>
                            {activity.map((activity) => <ActivityButton name={activity.name} icon={activity.icon} />)}
                        </Grid>
                        <Grid container justifyContent='center' gap='40px'>
                            <Button
                                type="submit"
                                variant="outlined"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Back
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Finish
                            </Button>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default AddTripForm;