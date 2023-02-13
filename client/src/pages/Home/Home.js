import { useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../App.js'
import Login from '../../components/Login';
import Register from '../../components/Register';
import homeBackground from '../../assets/images/home-background.jpg'


function Home() {
  if (localStorage.getItem("auth_token")) {
    window.location.assign("/dashboard");
  }

  const [loginDisplay, setLoginDisplay] = useState(true);
  const [registerDisplay, setRegisterDisplay] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" wrap='nowrap' sx={{
        height: '100vh',
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: 'cover',
      }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
        >
          <Box p='100px 50px' >
            <Grid container direction='column' borderRadius='50px' gap={8} p='30px' position='relative'>
              <Box
                position='absolute'
                right={0}
                left={0}
                top={0}
                bottom={0}
                borderRadius='50px'
                sx={{ backdropFilter: 'blur(3px)' }}
              />
              <Typography component='h1' variant='h1' zIndex={5}>
                <span style={{
                  fontFamily: 'satisfy',
                  color: '#569597',
                }}>Vacay</span>
                <span style={{
                  fontFamily: 'zilla slab',
                  fontSize: '70px',
                  color: '#F5F5F5'
                }}>te</span>
              </Typography>
              <Typography component='h1' variant='h3' color='#F5F5F5' fontFamily='Josefin Sans' zIndex={5}>
                Create your next memory here
              </Typography>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ borderRadius: '50px 0px 0px 50px' }}>
          <Grid container height={1} justifyContent='center' alignItems='center'>
            <Grid item>
              <Login displayState={loginDisplay} setLoginDisplay={setLoginDisplay} setRegisterDisplay={setRegisterDisplay} />
              <Register displayState={registerDisplay} setLoginDisplay={setLoginDisplay} setRegisterDisplay={setRegisterDisplay} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Home;
