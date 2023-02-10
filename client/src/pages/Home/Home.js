const yelp = require('yelp-fusion');

function Home() {

  // Place holder for Yelp Fusion's API Key. Grab them
  // from https://www.yelp.com/developers/v3/manage_app
  const apiKey = 'CMiHXkPSeoA-06TyOgnomn9oYzTCgPxcfxmXRDSYrh-rg_4dXn0WRKvQEQOvztJywtFIgC77WBZh4qDpXIZETqcKWIbe-aq4LjnJf6iwrjjOhXQYJaU_moDdr7vlY3Yx';

  const searchRequest = {
    term: 'Four Barrel Coffee',
    location: 'san francisco, ca'
  };

  const client = yelp.client(apiKey);

  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);
  }).catch(e => {
    console.log(e);
  });

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
