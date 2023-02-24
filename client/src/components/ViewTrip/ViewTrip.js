import { useEffect, useState } from "react";
import {
    Box,
    Grid,
    Typography,
    CircularProgress,
} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../App.js'

import YelpEntry from "./YelpEntry.js";

function ViewTrip({ font, fontColor, isDisplayed, setIsDisplayed, tripInfo }) {
    // Creating object with trip data
    const tripData = {
        tripID: tripInfo?._id || '',
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

    function ActivityCard({ activityName, activitySaved }) {
        const [yelpData, setYelpData] = useState(null);

        useEffect(() => {
            const fetchYelp = async () => {
                const data = await yelpLocationTerm(activityName)
                setYelpData(data?.businesses || null)
            };

            fetchYelp()

        }, [activityName]);

        if (tripData.activities.length > 0) {
            return (
                <Grid item
                    sx={{
                        backgroundColor: '#F5F5F5',
                        borderRadius: '20px',
                        padding: '10px 20px'
                    }}
                >
                    <Grid container justifyContent='space-between' wrap='nowrap'>
                        <Typography component="h2" variant="h5" fontFamily={font} color={fontColor.primary} >
                            {activityName}
                        </Typography>
                    </Grid>
                    <Grid container wrap="nowrap" overflow='auto'>
                        <Grid container wrap="nowrap" gap={3}>
                            {yelpData ? yelpData.map((business) =>
                                <YelpEntry
                                    key={business.id}
                                    yelpID={business.id}
                                    name={business.name}
                                    image={business.image_url}
                                    rating={business.rating}
                                    price={business.price}
                                    categories={business.categories}
                                    distance={business.distance}
                                    url={business.url}
                                    font={font}
                                    fontColor={fontColor}
                                    activityName={activityName}
                                    activitySaved={activitySaved}
                                    tripData={tripData}
                                />
                            ) : <CircularProgress />}
                        </Grid>
                    </Grid>
                </Grid>
            )
        } else {
            return (<></>)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                marginX: '40px',
                paddingBottom: '40px',
                display: isDisplayed.viewTrip ? 'flex' : 'none',
                flexDirection: 'column',
                gap: '20px'
            }}>
                {tripData.activities.map((activity) =>
                    <ActivityCard
                        key={activity.name}
                        activityName={activity.name}
                        activitySaved={activity.saved}
                    />)}
            </Box>
        </ThemeProvider>
    )
}

export default ViewTrip;