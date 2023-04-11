# Vacayte Travel App
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <br/>
![vacayte-title](./images/Vacayte%20Title.png)

<a href='https://obscure-fjord-08413.herokuapp.com/' target='_blank'>Click here</a> to check out the web app!

## Description
The Vacayte web app was designed as a way for adventurers who are usually not very good at creating an itinerary to easily make one! After users have created an account, they can add a trip which takes in a few keywords like Restaurants, Beaches, or Drink and will generate the top rated places to go and things to do based on Yelp's API. Users will then be able to quickly create an itinerary by bookmarking their favorite entries and adding it onto the specifics dates they would like to do those activities. Users should then be able to download a PDF copy of their itinerary and share it with their friends!

## Usage
Users are prompted to login. If they don't have a login they can create a new account. Once logged in users are greeted with a welcome page and prompted to add a new trip by submitting some information. Trips require the following information:
- Trip Name
- Location
- Start Date
- End Date
- Activities Keyword

Once the information is added, they are redirected back to the dashboard with the new trip populated on the left panel. Selecting the trip will populate the top rated (according to Yelp) activities based on the selected Activities Keyword. Clicking the bookmark button will save the activities to be added into the user's itinerary at a later time. Users can navigate their dashboard by clicking on the buttons on the navbar.

## Features in Progress
### - Creating an itinerary
The Itinerary page on the dashboard is still being built. Users can view the list of dates on their trip, but are currently not able to add any activities to each date

### - Itinerary PDF
Users are not able to download a PDF of their finished itinerary. Users should be able to select from a list of templates to generate their itinerary PDF.

## Technologies used
- React
- Node.js
- Express.js
- MongoDB

## How to contribute
If you'd like to contribute to this template, please contact me at sary.mony@gmail.com and let's collaborate!
