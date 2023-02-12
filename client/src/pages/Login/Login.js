import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../Home/Home.js'
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth.js";

function Login() {

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [Login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // try {
    //   const { data } = await Login({
    //     variables: { ...formState },
    //   });

    //   Auth.login(data.login.token);
    // } catch (err) {
    //   console.error(err);
    // }

    console.log('Logged In!');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'none',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h2" variant="h4" fontFamily='Josefin Sans'>
          Sign In
        </Typography>
        <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email Address"
            type='text'
            value={formState.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={formState.password}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <RouterLink to='/register' style={{ textDecoration: 'none' }}>
                <Typography variant="body2">
                  {"Don't have an account? Sign Up"}
                </Typography>
              </RouterLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Login;
