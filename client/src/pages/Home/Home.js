import {
  Grid,
  Paper,
} from '@mui/material';
import Login from '../Login';

function Home() {
  return (
    <Grid container component="main" wrap='nowrap' sx={{ height: '100vh', 
    backgroundImage: 'url(https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: (t) =>
      t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
    backgroundSize: 'cover',
    }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ borderRadius: '50px 0px 0px 50px' }}>
        <Grid container height={1} justifyContent='center' alignItems='center'>
          <Login />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
