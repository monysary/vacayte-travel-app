import { useEffect, useState } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import { useMutation, useLazyQuery, useQuery } from "@apollo/client";
import { SAVE_ACTIVITY, DELETE_ACTIVITY } from "../../utils/mutations.js";
import { BOOKMARKED } from "../../utils/queries.js";

import placeholder from "../../assets/images/placeholder.png";

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
  loadTrip,
  bookmarked,
  setBookmarked,
}) {
  const categoryArr = [];
  categories.map((c) => categoryArr.push(c.title));

  const [saveActivity] = useMutation(SAVE_ACTIVITY);
  const [deleteActivity] = useMutation(DELETE_ACTIVITY);

  let existingTrips = JSON.parse(localStorage.getItem(tripID));
  if (existingTrips == null) {
    existingTrips = [];
  }

  const [isBookmarked, setIsBookmarked] = useState(
    bookmarked.findIndex((activity) => activity.businessID === yelpID) < 0
  );

  const bookmarkYelp = async () => {
    if (isBookmarked) {
      setBookmarked((prev) => [...prev, { businessID: yelpID }]);
      console.log("bookmark added", yelpID);
      //   localStorage.setItem("bookmarks", yelpID);
      existingTrips.push(yelpID);
      localStorage.setItem(tripID, JSON.stringify(existingTrips));
      try {
        await saveActivity({
          variables: {
            tripId: tripID,
            activityName: activityName,
            businessID: yelpID,
            businessName: name,
            businessCategory: categoryArr.join(", "),
            businessRating: rating,
            businessURL: url,
          },
        });
      } catch (err) {
        console.log(err);
      } finally {
        setIsBookmarked(false);
      }
    } else {
      console.log("bookmark removed", yelpID);
      //   localStorage.removeItem("bookmarks", yelpID);
      let newExistingTrips = existingTrips.filter((x) => x !== yelpID);
      localStorage.setItem(tripID, JSON.stringify(newExistingTrips));

      try {
        await deleteActivity({
          variables: {
            tripId: tripID,
            activityName: activityName,
            businessID: yelpID,
          },
        });
      } catch (err) {
        console.log(err);
      } finally {
        setIsBookmarked(true);
      }
    }
  };

  return (
    <Box maxWidth="200px">
      <a href={url} target="_blank">
        <img
          src={image ? `${image}` : placeholder}
          alt={name}
          width="200px"
          height="200px"
          style={{ borderRadius: "10px", cursor: "pointer" }}
        />
      </a>
      <Grid container wrap="nowrap" justifyContent="space-between">
        <Typography fontSize="14px" fontFamily={font} fontWeight="bold">
          {name} • {rating}★
        </Typography>
        <Grid
          item
          xs={4}
          fontSize="12px"
          fontFamily={font}
          color={fontColor.grey}
          textAlign="right"
        >
          <Grid container direction="column" alignItems="flex-end">
            {Math.round(distance * 0.000621371 * 10) / 10} mi
            {
              <IconButton
                disableRipple
                sx={{ padding: 0 }}
                onClick={bookmarkYelp}
              >
                {!isBookmarked || existingTrips.includes(yelpID) ? (
                  <BookmarkIcon
                    sx={{
                      color: fontColor.primary,
                    }}
                  />
                ) : (
                  <BookmarkBorderIcon
                    sx={{
                      color: fontColor.primary,
                    }}
                  />
                )}
              </IconButton>
            }
          </Grid>
        </Grid>
      </Grid>
      <Typography fontSize="14px" fontFamily={font} color={fontColor.grey}>
        {price} • {categoryArr.join(", ")}
      </Typography>
    </Box>
  );
}

export default YelpEntry;
