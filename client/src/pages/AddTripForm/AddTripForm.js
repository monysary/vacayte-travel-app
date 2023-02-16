import { useEffect, useState } from 'react';
import {
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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import dashboardBackground from '../../assets/images/dashboard-background.png'

import { useMutation } from '@apollo/client';
import { ADD_TRIP } from '../../utils/mutations.js';

import { font } from '../Dashboard/Dashboard.js'
import { Link as RouterLink } from 'react-router-dom';

function AddTripForm() {
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

        await addingTrip();

        setFinishForm(true)
        clearButton();

        setTimeout(() => {
            document.location.assign('/dashboard')
        }, 1000);
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

        return addedTrip;
    };

    function ActivityChoices({ activityName, icon, selected, setActivity, setFormState }) {
        const handleClick = () => {
            if (!selected) {
                setFormState({ ...formState, activities: [...formState.activities, activityName] })
                setActivity(activity.map((activity) => {
                    if (activity.name === activityName) {
                        return { ...activity, selected: true }
                    } else {
                        return activity
                    }
                }))
            } else {
                setFormState({ ...formState, activities: formState.activities.filter((activity) => activity !== activityName) })
                setActivity(activity.map((activity) => {
                    if (activity.name === activityName) {
                        return { ...activity, selected: false }
                    } else {
                        return activity
                    }
                }))
            }
        }

        return (
            <Grid item xs={3}>
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

    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        if (
            formState.tripName &&
            formState.location &&
            formState.startDate &&
            formState.endDate &&
            formState.activities.length > 0
        ) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }

    }, [formState])

    const [finishForm, setFinishForm] = useState(false)

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                paddingX: '300px',
                backgroundImage: `url(${dashboardBackground})`,
                backgroundPosition: 'center'
            }}>
                <Box
                    component='form'
                    noValidate
                    onSubmit={handleFormSubmit}
                    sx={{
                        backgroundColor: '#F5F5F5',
                        width: '100%',
                        height: '100vh',
                        overflow: 'auto',
                    }}>
                    <CssBaseline />
                    <Box padding='10px 40px 0px'>
                        <RouterLink to='/dashboard' style={{ textDecoration: 'none' }}>
                            <Typography textAlign='left'>
                                <span style={{
                                    fontFamily: 'satisfy',
                                    fontSize: '40px',
                                    color: `${font.color.primary}`,
                                }}>Vacay</span>
                                <span style={{
                                    fontFamily: 'zilla slab',
                                    fontSize: '30px',
                                    color: `${font.color.darkGrey}`
                                }}>te</span>
                            </Typography>
                        </RouterLink>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '0 200px 40px',
                            gap: '10px'
                        }}
                    >
                        <Typography component="h2" variant="h5" fontFamily={font.primary}>
                            Trip Information
                        </Typography>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography fontFamily={font.primary}>Trip Name</Typography>
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
                                    <Typography fontFamily={font.primary}>Where are you going?</Typography>
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
                                    <Typography fontFamily={font.primary}>Start Date</Typography>
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
                                    <Typography fontFamily={font.primary}>End Date</Typography>
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
                        </Box>
                        <Typography component="h2" variant="h5" fontFamily={font.primary} mt='20px'>
                            Activities
                        </Typography>
                        <Typography variant='subtitle1' fontFamily={font.primary} color={font.color.grey} textAlign='center'>
                            {/* Some message to let them know they can customize their trip later */}
                        </Typography>
                        <Box>
                            <Grid container direction='column' gap='10px'>
                                {activity.map((activity) => <ActivityChoices
                                    key={activity.name}
                                    activityName={activity.name}
                                    icon={activity.icon}
                                    selected={activity.selected}
                                    setActivity={setActivity}
                                    setFormState={setFormState}
                                />)}
                            </Grid>
                            <Grid container justifyContent='center' mt='40px' gap={6}>
                                <RouterLink to='/dashboard' style={{ textDecoration: 'none' }}>
                                    <Button
                                        startIcon={<ArrowBackIcon />}
                                        type="submit"
                                        variant="outlined"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Back
                                    </Button>
                                </RouterLink>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    disabled={isDisabled}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Box>
                        <Typography
                            display={finishForm ? 'block' : 'none'}
                            fontFamily={font.primary}
                            color={font.color.primary}
                            variant='h4'
                        >
                            New trip created!
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider >
    )
}

export default AddTripForm;