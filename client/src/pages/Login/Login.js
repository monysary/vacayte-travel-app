import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Link
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from "../../utils/auth.js";

function Login() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#569597',
      },
      // secondary: {
      //   main: '',
      // },
    },
  });

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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4">
          Sign In
        </Typography>
        <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
            autoComplete="current-password"
            value={formState.password}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color='primary'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Login;
