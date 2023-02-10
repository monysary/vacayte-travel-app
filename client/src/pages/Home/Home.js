import { useState } from 'react'

function Home() {
  // Console logging your location using the browser
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

  // Handle form logic
  const [formState, setFormState] = useState({
    location: '',
    term: ''
  })

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/yelp?location=${formState.location}&term=${formState.term}`);

      const data = await response.json();

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={handleFormSubmit}>
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
    </div>
  );
}

export default Home;
