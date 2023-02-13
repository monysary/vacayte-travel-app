import {
  Container,
  CssBaseline,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Link
} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../Home/Home.js';
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../utils/mutations";

import Auth from "../../utils/auth.js";

function Register({ displayState, setLoginDisplay, setRegisterDisplay }) {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isDisabled, setIsDisabled] = useState(true)

  const [register, { error, data }] = useMutation(REGISTER_USER);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    if (
      formState.firstName &&
      formState.lastName &&
      formState.email &&
      formState.password &&
      formState.confirmPassword &&
      formState.password.length >= 8 &&
      formState.password === formState.confirmPassword
    ) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [handleInputChange])

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await register({
        variables: { ...formState },
      });
      Auth.login(data.register.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: displayState ? 'flex' : 'none',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h2" variant="h4" fontFamily='Josefin Sans'>
            Sign up
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
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  type='email'
                  value={formState.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={formState.password.length < 8 && formState.password.length > 0}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={formState.password}
                  onChange={handleInputChange}
                />
                <Typography component='p' variant='caption' color='#B2B2B2'>
                  Password must be 8 characters long.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={formState.password !== formState.confirmPassword}
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
              disabled={isDisabled}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Account
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  variant="body2"
                  sx={{ '&:hover': { cursor: 'pointer' } }}
                  onClick={() => {
                    setLoginDisplay(true)
                    setRegisterDisplay(false)
                  }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Register;
