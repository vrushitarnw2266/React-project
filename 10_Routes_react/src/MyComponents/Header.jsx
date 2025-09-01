import { useRef,useState } from "react";
import { Link, NavLink } from "react-router";


const Header = () => {
  const [data, setData] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

  return (
  <>
    <form onSubmit={handleFormSubmit} style={{ marginBottom: "20px"}}>
      <input type="text"
            value={data} 
            onChange={(e)=>{
              setData(e.target.value);
            }}/>
      </form>
     
    <NavLink to="/" style={{ marginRight: "10px",textDecoration:"none"}}>
        HOME
    </NavLink>

    <NavLink to="/about" style={{ marginRight: "10px" , textDecoration:"none"}}>
        ABOUT 
     </NavLink>

     <NavLink to={`user/${data}`} style={{textDecoration:"none", color:"white", padding:"4px", background:"gray" , borderRadius:"5px"}} >
            TYPED USER  
     </NavLink>
  </>
  

  )
}
export default Header;