import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "../MobileMenu";

export default function MobileHeader({
  font,
  fontColor,
  isDisplayed,
  setIsDisplayed,
  setSelectTrip,
  tripName,
  loadTrip,
}) {
  return (
    <Box className="hide-md" sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <MobileMenu
            font={font}
            fontColor={fontColor}
            isDisplayed={isDisplayed}
            setIsDisplayed={setIsDisplayed}
            setSelectTrip={setSelectTrip}
            tripName={tripName}
            loadTrip={loadTrip}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
