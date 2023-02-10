import { useState } from 'react'

function Home() {
  // Console logging your location using the browser
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      console.error(`Your browser doesn't support Geolocation`);
    } else {
      const onSuccess = position => {
        const {
          latitude,
          longitude
        } = position.coords;

        console.log(`Your location: (${latitude},${longitude})`);
      }

      const onError = () => {
        console.log(`Failed to get your location!`);
      }

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }

  // Handle form logic
  const [formState, setFormState] = useState({
    location: '',
    term: ''
  })

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value })
  }

  // Fetch Yelp data
  const yelpFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/yelp?location=${formState.location}&term=${formState.term}`);

      const data = await response.json();

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  // Fetch weather data
  const weatherFormSubmit = async (event) => {
    event.preventDefault();

    try {

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <button onClick={getCurrentLocation}>Get My Location</button>
      <hr />
      <h1>Yelp Fetch</h1>
      <form onSubmit={yelpFormSubmit}>
        <div>Location:</div>
        <input
          name='location'
          placeholder='Location'
          value={formState.location}
          onChange={handleInputChange}
        />
        <div>Term:</div>
        <input
          name='term'
          placeholder='Keyword'
          value={formState.term}
          onChange={handleInputChange}
        />
        <button type='submit'>Fetch Yelp</button>
      </form>
      <hr />
      <h1>Weather Data Fetch</h1>
      <form onSubmit={weatherFormSubmit}>

        <button type='submit'>Fetch Weather</button>
      </form>
    </div>
  );
}

export default Home;
