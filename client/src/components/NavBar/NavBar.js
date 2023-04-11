import {
    Button,
    Grid,
} from '@mui/material'

function NavBar({ selectTrip }) {


    return (
        <Grid item>
            <Grid container gap={4} sx={{
                display: selectTrip === '' ? 'none' : 'flex'
            }}>
                <Button color='secondary'
                    variant='contained'
                >Create Itinerary</Button>
            </Grid>
        </Grid>
    )
}

export default NavBar;