import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <main className="home">
  <section className="hero">
    <h1>Explore the world, your way.</h1>
    <p>Plan your next adventure with Roamly</p>

    <SearchBar />
  </section>
</main>
  );
}

export default Home;