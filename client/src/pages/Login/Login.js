import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  Container,
  CssBaseline
} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../Home/Home.js'
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth.js";

function Login({ displayState, setLoginDisplay, setRegisterDisplay }) {

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
            Sign In
          </Typography>
          <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
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
              </Grid>
            </Grid>
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
                <Link
                  variant="body2"
                  sx={{ '&:hover': { cursor: 'pointer' } }}
                  onClick={() => {
                    setLoginDisplay(false)
                    setRegisterDisplay(true)
                  }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
