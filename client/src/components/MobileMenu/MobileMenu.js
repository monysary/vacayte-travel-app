import * as React from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import { Grid, Typography, Button, Link, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../App.js";

import { useQuery } from "@apollo/client";
import { GET_MY_TRIPS } from "../../utils/queries.js";

import { Link as RouterLink } from "react-router-dom";

export default function MobileDrawer({
  font,
  fontColor,
  isDisplayed,
  setIsDisplayed,
  setSelectTrip,
  tripName,
  loadTrip,
}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { loading, data } = useQuery(GET_MY_TRIPS);
  const myTrips = data?.getMyTrips.trips || [];

  function TripsButton() {
    if (!loading) {
      return myTrips.map((trip) => (
        <Grid key={trip._id} item xs={12}>
          <Button
            variant={trip.tripName === tripName ? "outlined" : "text"}
            fullWidth
            sx={{
              color: `${fontColor.black}`,
              padding: "10px 0px",
              border:
                trip.tripName === tripName
                  ? `2px solid ${fontColor.primary}`
                  : "none",
            }}
            onClick={() => {
              setSelectTrip(`${trip._id}`);
              setIsDisplayed({
                ...isDisplayed,
                welcome: false,
                viewTrip: true,
              });
              loadTrip();
            }}
          >
            {trip.tripName}
          </Button>
        </Grid>
      ));
    } else {
      return <></>;
    }
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ThemeProvider theme={theme}>
        <Box sx={{ height: "100vh", overflow: "auto" }}>
          <Grid container justifyContent="center" py="30px" gap="30px">
            <Grid item>
              <Link
                sx={{
                  textDecoration: "none",
                  "&:hover": { cursor: "pointer" },
                }}
                onClick={() => {
                  setIsDisplayed({
                    welcome: true,
                  });
                }}
              >
                <Typography textAlign="center">
                  <span
                    style={{
                      fontFamily: "satisfy",
                      fontSize: "40px",
                      color: `${fontColor.primary}`,
                    }}
                  >
                    Vacay
                  </span>
                  <span
                    style={{
                      fontFamily: "zilla slab",
                      fontSize: "30px",
                      color: `${fontColor.darkGrey}`,
                    }}
                  >
                    te
                  </span>
                </Typography>
              </Link>
            </Grid>
            <Grid item height="100%">
              <Grid
                container
                alignItems="center"
                p="20px 30px"
                gap="20px"
                height="100%"
              >
                <Grid item>
                  <Typography variant="h6" fontFamily={font} fontSize="18px">
                    MY TRIPS
                  </Typography>
                </Grid>
                <Grid
                  item
                  height="2px"
                  width="100%"
                  sx={{ backgroundColor: "#DFDFDF" }}
                />
                <Grid item xs={12}>
                  <RouterLink
                    to={"/add-trip"}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      startIcon={<AddIcon />}
                      variant="contained"
                      fullWidth
                      sx={{ borderRadius: "20px" }}
                    >
                      ADD TRIP
                    </Button>
                  </RouterLink>
                </Grid>
                <Grid item xs={12}>
                  <Grid container direction="column-reverse">
                    <TripsButton />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="hide-md">
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              sx={{ backgroundColor: "white" }}
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon sx={{ color: "black" }} />
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </ThemeProvider>
  );
}
