import { useEffect, useState } from "react";
import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../App.js";

import YelpEntry from "./YelpEntry.js";

function ViewTrip({ font, fontColor, isDisplayed, tripInfo, loadTrip }) {
  // Creating object with trip data
  const tripData = {
    tripID: tripInfo?._id || "",
    tripName: tripInfo?.tripName || "",
    location: tripInfo?.location || "",
    startDate: tripInfo?.startDate || "",
    endDate: tripInfo?.endDate || "",
    activities: tripInfo?.activities || [],
  };

  function ActivityCard({ tripID, activityName, activitySaved }) {
    const [yelpData, setYelpData] = useState(null);

    useEffect(() => {
      const fetchYelp = async () => {
        try {
          fetch(
            `/api/yelp?location=${tripData.location}&term=${activityName}&cache=false`
          )
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setYelpData(data?.businesses || null);
            });
        } catch (err) {
          console.log("Yelp Fetch Error:", err);
        }
      };

      fetchYelp();
    }, []);

    const [bookmarked, setBookmarked] = useState(activitySaved);
    // console.log("bookmarked", bookmarked)

    if (tripData.activities.length > 0) {
      return (
        <Grid
          item
          sx={{
            backgroundColor: "#F5F5F5",
            borderRadius: "20px",
            padding: "10px 20px",
          }}
        >
          <Grid container justifyContent="space-between" wrap="nowrap">
            <Typography
              component="h2"
              variant="h5"
              fontFamily={font}
              color={fontColor.primary}
            >
              {activityName}
            </Typography>
          </Grid>
          <Grid container wrap="nowrap" overflow="auto">
            <Grid container wrap="nowrap" gap={3}>
              {yelpData ? (
                yelpData.map((business) => (
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
                    tripID={tripID}
                    loadTrip={loadTrip}
                    bookmarked={bookmarked}
                    setBookmarked={setBookmarked}
                  />
                ))
              ) : (
                <CircularProgress />
              )}
            </Grid>
          </Grid>
        </Grid>
      );
    } else {
      return <></>;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          marginX: "40px",
          paddingBottom: "40px",
          display: isDisplayed.viewTrip ? "flex" : "none",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {tripData.activities.map((activity) => (
          <ActivityCard
            key={activity.name}
            tripID={tripData.tripID}
            activityName={activity.name}
            activitySaved={activity.saved}
          />
        ))}
      </Box>
    </ThemeProvider>
  );
}

export default ViewTrip;
