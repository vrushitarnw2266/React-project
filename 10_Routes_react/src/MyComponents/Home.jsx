import { Link, Route } from "react-router";


const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
      <Link to="/about" style={{ marginRight: "10px" }}>
        Go to About Page
      </Link>
    </div>
  );
}
export default Home;