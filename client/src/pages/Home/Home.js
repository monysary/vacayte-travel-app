import {
  Grid,
  Paper,
  Typography,
  Box
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from '../Login';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#569597',
    },
  },
});

function Home() {

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" wrap='nowrap' sx={{
        height: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
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
            <Login />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Home;
