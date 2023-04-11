import {
    Button,
    Grid,
} from '@mui/material'

function NavBar({ selectTrip, isDisplayed, setIsDisplayed }) {


    return (
        <Grid item>
            <Grid container gap={2} sx={{
                display: selectTrip === '' ? 'none' : 'flex'
            }}>
                <Button color='secondary'
                    variant='contained'
                    onClick={() => {
                        setIsDisplayed({
                            ...isDisplayed,
                            viewTrip: true,
                            createItinerary: false
                        })
                    }}
                >Activities</Button>
                <Button color='secondary'
                    variant='contained'
                    onClick={() => {
                        setIsDisplayed({
                            ...isDisplayed,
                            viewTrip: false,
                            createItinerary: true
                        })
                    }}
                >Itinerary</Button>
            </Grid>
        </Grid>
    )
}

export default NavBar;