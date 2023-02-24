import { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    IconButton
} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { useMutation } from "@apollo/client";
import { SAVE_ACTIVITY, DELETE_ACTIVITY } from "../../utils/mutations.js";

function YelpEntry({
    yelpID,
    name,
    image,
    rating,
    price,
    categories,
    distance,
    url,
    font,
    fontColor,
    activityName,
    activitySaved,
    tripID,
}) {
    const categoryArr = [];
    categories.map((c) => categoryArr.push(c.title))

    const [saveActivity, { error: saveError, data: saveData }] = useMutation(SAVE_ACTIVITY);
    const [deleteActivity, { error: deleteError, data: deleteData }] = useMutation(DELETE_ACTIVITY);

    const [isBookmarked, setIsBookmarked] = useState(
        activitySaved.findIndex((activity) => activity.businessID === yelpID) < 0
    );

    const bookmarkYelp = async () => {
        if (isBookmarked) {
            setIsBookmarked(false)
            try {
                await saveActivity({
                    variables: {
                        tripId: tripID,
                        activityName: activityName,
                        businessID: yelpID,
                        businessName: name,
                        businessCategory: categoryArr.join(', '),
                        businessRating: rating,
                        businessURL: url
                    }
                })
            } catch (err) {
                console.log(err);
            }
        } else {
            setIsBookmarked(true)
            try {
                await deleteActivity({
                    variables: {
                        tripId: tripID,
                        activityName: activityName,
                        businessID: yelpID,
                    }
                })
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <Box maxWidth='200px'>
            <img
                src={`${image}`}
                width='200px'
                height='200px'
                style={{ borderRadius: '10px', cursor: 'pointer' }}
                onClick={() => window.open(`${url}`, '_blank')}
            />
            <Grid container wrap="nowrap" justifyContent='space-between'>
                <Typography
                    fontSize='14px'
                    fontFamily={font}
                    fontWeight='bold'
                >{name} • {rating}★</Typography>
                <Grid
                    item
                    xs={4}
                    fontSize='12px'
                    fontFamily={font}
                    color={fontColor.grey}
                    textAlign='right'
                >
                    <Grid container direction='column' alignItems='flex-end'>
                        {Math.round(distance * 0.000621371 * 10) / 10} mi
                        {<IconButton
                            disableRipple
                            sx={{ padding: 0 }}
                            onClick={bookmarkYelp}>
                            {!isBookmarked ?
                                <BookmarkIcon sx={{
                                    color: fontColor.primary
                                }} /> :
                                <BookmarkBorderIcon sx={{
                                    color: fontColor.primary
                                }} />}
                        </IconButton>}
                    </Grid>
                </Grid>
            </Grid>
            <Typography
                fontSize='14px'
                fontFamily={font}
                color={fontColor.grey}
            >{price} • {categoryArr.join(', ')}</Typography>
        </Box>
    )
};

export default YelpEntry;