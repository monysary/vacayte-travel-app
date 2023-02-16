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
                setYelpData(data?.businesses || null)
            };

            fetchYelp()

        }, [activityName])

        if (yelpData) {
            console.log(yelpData);
        }

        function YelpEntry({ name, image, rating, price, categories }) {
            const categoryArr = [];
            categories.map((c) => categoryArr.push(c.title))
            console.log(categoryArr);

            return (
                <Box maxWidth='200px'>
                    <img src={`${image}`} width='200px' height='200px' />
                    <Typography
                        fontSize='14px'
                        fontFamily={font}
                        fontWeight='bold'
                    >{name} • {rating}★</Typography>
                    <Typography
                        fontSize='14px'
                        fontFamily={font}
                        color={fontColor.grey}
                    >{price} • {categoryArr.join(', ')}</Typography>
                </Box>
            )
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
                        <Grid container wrap="nowrap" gap={3}>
                            {yelpData ? yelpData.map((business) =>
                                <YelpEntry
                                    key={business.id}
                                    name={business.name}
                                    image={business.image_url}
                                    rating={business.rating}
                                    price={business.price}
                                    categories={business.categories}
                                />
                            ) : ''}
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