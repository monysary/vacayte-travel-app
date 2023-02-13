import { useState } from 'react';
import {
    Container,
    CssBaseline,
    Box,
    Typography,
    Grid,
    TextField,
    Button,
} from '@mui/material'
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
            </Container>
        </ThemeProvider>
    )
}

export default AddTripForm;