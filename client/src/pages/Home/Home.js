function Home() {
  const fetchYelp = async (location, term) => {
    const response = await fetch(`http://localhost:3000/api/yelp?location=${location}&term=${term}`);

    const data = await response.json();

    console.log(data);
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => fetchYelp('fountain valley ca', 'viet')}>Fetch Yelp</button>
    </div>
  );
}

export default Home;
