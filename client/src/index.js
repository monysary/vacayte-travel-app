import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// ----------Saved code----------

// Console logging your location using the browser
// const getCurrentLocation = () => {
//   if (!navigator.geolocation) {
//     console.error(`Your browser doesn't support Geolocation`);
//   } else {
//     const onSuccess = position => {
//       const {
//         latitude,
//         longitude
//       } = position.coords;

//       console.log(`Your location: (${latitude},${longitude})`);
//     }

//     const onError = () => {
//       console.log(`Failed to get your location!`);
//     }

//     navigator.geolocation.getCurrentPosition(onSuccess, onError);
//   }
// }

// Fetch Yelp data by business alias
// const yelpBusinessAlias = async (event) => {
//   event.preventDefault();

//   try {
//     const response = await fetch(`http://localhost:3000/api/yelp/${formState.alias}`);

//     const data = await response.json();

//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }