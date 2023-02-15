import { useEffect, useState } from 'react';
import {
    Container,
    CssBaseline,
    Box,
    Typography,
    Grid,
    TextField,
    Button,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../App.js';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SpaIcon from '@mui/icons-material/Spa';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import TourIcon from '@mui/icons-material/Tour';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import HikingIcon from '@mui/icons-material/Hiking';
import LandscapeIcon from '@mui/icons-material/Landscape';
import LiquorIcon from '@mui/icons-material/Liquor';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

import { useMutation } from '@apollo/client';
import { ADD_TRIP } from '../../utils/mutations.js';



function AddTripForm({ font, fontColor, isDisplayed, setIsDisplayed }) {
    const [formState, setFormState] = useState({
        tripName: '',
        location: '',
        startDate: '',
        endDate: '',
        activities: [],
    });

    const [activity, setActivity] = useState([
        {
            name: 'Restaurant',
            icon: <RestaurantIcon />,
            selected: false,
        },
        {
            name: 'Relaxation',
            icon: <SpaIcon />,
            selected: false,
        },
        {
            name: 'Shopping',
            icon: <LocalMallIcon />,
            selected: false,
        },
        {
            name: 'Tours',
            icon: <TourIcon />,
            selected: false,
        },
        {
            name: 'Beaches',
            icon: <BeachAccessIcon />,
            selected: false,
        },
        {
            name: 'Hiking',
            icon: <HikingIcon />,
            selected: false,
        },
        {
            name: 'Sight Seeing',
            icon: <LandscapeIcon />,
            selected: false,
        },
        {
            name: 'Drinks',
            icon: <LiquorIcon />,
            selected: false,
        },
        {
            name: 'Fine Dining',
            icon: <DinnerDiningIcon />,
            selected: false,
        },
    ]);

    const handleInputChange = ({ target: { name, value } }) => {
        setFormState({ ...formState, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // await addingTrip();

        clearButton();

        console.log(formState);
        console.log(activity);
    };

    // Adding a trip through the trip form
    const [addTrip] = useMutation(ADD_TRIP);
    const addingTrip = async () => {
        const addedTrip = await addTrip({
            variables: {
                tripName: formState.tripName,
                location: formState.location,
                startDate: formState.startDate,
                endDate: formState.endDate,
                activities: formState.activities,
            }
        })

    };

    function ActivityChoices({ activityName, icon, selected, setActivity, setFormState }) {
        const handleClick = () => {
            if (!selected) {
                setFormState({ ...formState, activities: [...formState.activities, activityName] })
                setActivity(activity.map((activity) => {
                    if (activity.name === activityName) {
                        return {...activity, selected: true}
                    } else {
                        return activity
                    }
                }))
            } else {
                setFormState({...formState, activities: formState.activities.filter((activity) => activity !== activityName)})
                setActivity(activity.map((activity) => {
                    if (activity.name === activityName) {
                        return {...activity, selected: false}
                    } else {
                        return activity
                    }
                }))
            }
        }

        return (
            <Grid item xs={7}>
                <Button
                    fullWidth
                    startIcon={icon}
                    endIcon={<></>}
                    sx={{ justifyContent: 'space-between' }}
                    variant={selected ? 'contained' : 'outlined'}
                    color={selected ? 'secondary' : 'info'}
                    onClick={handleClick}
                >{activityName}</Button>
            </Grid>
        )
    }

    const clearButton = () => {
        setFormState({
            ...formState,
            tripName: '',
            location: '',
            startDate: '',
            endDate: '',
            activities: [],
        })
    }

    const [next, setNext] = useState(true)

    return (
        <ThemeProvider theme={theme}>
            <Container
                component='form'
                noValidate
                onSubmit={handleFormSubmit}
                maxWidth="sm"
                sx={{
                    backgroundColor: '#F5F5F5',
                    borderRadius: '20px',
                }}>
                <CssBaseline />
                {/* -----Trip Information----- */}
                <Box sx={{ display: isDisplayed.addTripForm ? 'block' : 'none' }}>
                    <Box
                        sx={{
                            display: next ? 'flex' : 'none',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '40px 20px'
                        }}
                    >
                        <Typography component="h2" variant="h4" fontFamily={font}>
                            Trip Information
                        </Typography>
                        <Box sx={{ mt: 3 }}>
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
                                        placeholder="City, State, Country"
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
                                        type='date'
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
                                        type='date'
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
                                    onClick={() => clearButton()}
                                    variant="outlined"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Clear
                                </Button>
                                <Button
                                    onClick={() => setNext(!next)}
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
                            display: !next ? 'flex' : 'none',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '40px 20px'
                        }}
                    >
                        <Typography component="h2" variant="h4" fontFamily={font}>
                            Activities
                        </Typography>
                        <Box sx={{ mt: 3 }}>
                            <Grid container spacing={2} justifyContent='center'>
                                {activity.map((activity) => <ActivityChoices
                                    key={activity.name}
                                    activityName={activity.name}
                                    icon={activity.icon}
                                    selected={activity.selected}
                                    setActivity={setActivity}
                                    setFormState={setFormState}
                                />)}
                            </Grid>
                            <Grid container justifyContent='center' gap='40px'>
                                <Button
                                    onClick={() => setNext(!next)}
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
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default AddTripForm;