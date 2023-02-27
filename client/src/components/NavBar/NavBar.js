import {
    Button,
    Grid,
} from '@mui/material'

function NavBar({ isDisplayed, setIsDisplayed, selectTrip }) {


    return (
        <Grid item>
            <Grid container gap={4} sx={{
                display: selectTrip === '' ? 'none' : 'flex'
            }}>
                <Button color='secondary'
                    sx={{
                        borderBottom: isDisplayed.viewTrip ? '2px solid' : 'none',
                        borderRadius: '0'
                    }}
                    onClick={() => {
                        if (!isDisplayed.viewTrip) {
                            setIsDisplayed({
                                ...isDisplayed,
                                viewTrip: true
                            })
                        }
                    }}
                >Overview</Button>
                <Button color='secondary'
                    sx={{
                        borderBottom: isDisplayed.savedActivities ? '2px solid' : 'none',
                        borderRadius: '0'
                    }}
                >Saved Activities</Button>
                <Button color='secondary'
                    sx={{
                        borderBottom: isDisplayed.itinerary ? '2px solid' : 'none',
                        borderRadius: '0'
                    }}
                >Itinerary</Button>
            </Grid>
        </Grid>
    )
}

export default NavBar;