import { useEffect, useState } from "react";
import {
    Box,
    Grid,
    Typography,
} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../App.js'

function ViewTrip({ font, fontColor, isDisplayed, setIsDisplayed, tripInfo, loading }) {
    // Creating object with trip data
    const tripData = {
        tripName: tripInfo?.tripName || '',
        location: tripInfo?.location || '',
        startDate: tripInfo?.startDate || '',
        endDate: tripInfo?.endDate || '',
        activities: tripInfo?.activities || [],
    };

    // Fetch Yelp data by location and term
    const yelpLocationTerm = async (term) => {
        const response = await fetch(`http://localhost:3000/api/yelp?location=${tripData.location}&term=${term}`);

        const data = await response.json();

        return data;
    }

    function ActivityCard({ activityName }) {
        const [yelpData, setYelpData] = useState(null)

        useEffect(() => {
            const fetchYelp = async () => {
                const data = await yelpLocationTerm(activityName)
                setYelpData(data? data : null)
            };

            fetchYelp()

        }, [activityName])

        if (yelpData) {
            console.log(yelpData);
        }

        if (tripData.activities.length > 0) {
            return (
                <Grid item
                    sx={{
                        backgroundColor: '#F5F5F5',
                        borderRadius: '20px',
                        padding: '10px 20px'
                    }}
                >
                    <Typography component="h2" variant="h5" fontFamily={font}>
                        {activityName}
                    </Typography>
                    <Grid container wrap="nowrap" overflow='auto'>
                        <Typography>
                            {yelpData ? yelpData.businesses.map((business) => business.name) : ''}
                        </Typography>
                    </Grid>
                </Grid>
            )
        } else {
            return (<></>)
        }
    }

    function YelpEntry() {
        return(
            <Grid>
                
            </Grid>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                marginX: '40px',
                display: isDisplayed.viewTrip ? 'flex' : 'none',
                flexDirection: 'column',
                gap: '20px'
            }}>
                {tripData.activities.map((activity) => <ActivityCard key={activity} activityName={activity} />)}
            </Box>
        </ThemeProvider>
    )
}

export default ViewTrip;