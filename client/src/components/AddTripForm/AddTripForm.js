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

function AddTripForm({ font }) {
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
                <Box
                    sx={{
                        display: 'flex',
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
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="firstName"
                                    required
                                    fullWidth
                                    label="First Name"
                                    type='text'
                                    value={formState.firstName}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Last Name"
                                    name="lastName"
                                    type='text'
                                    value={formState.lastName}
                                    onChange={handleInputChange}
                                />
                            </Grid>
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
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={formState.password}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    value={formState.confirmPassword}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Create Account
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default AddTripForm;