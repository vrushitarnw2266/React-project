import {Link, useNavigate, useParams} from "react-router";

const Setting = ({isAdmin}) => {

  const { username } = useParams();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isAdmin) {
      navigate(`/admin`);
    } else {
      alert("/page404");
    }
  };

  return (
    <div>
      <h1>Setting Page {username}</h1>
      <p>This is the setting page of our application.</p>
      <button onClick={handleButtonClick}>Go to User Page</button>
      <br />
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

export default Setting;