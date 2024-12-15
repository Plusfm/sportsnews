import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <h2>TED SPORT NEWS</h2>
          </div>
          <ul className="nav-links">
             <li><Link to='/'>Home </Link></li>
            <li><Link to='/aboutus'>About </Link></li>
            <li><Link to='/contact'> Contact</Link></li>
            <li><Link className="link_to_login" to='/signup'> Signup</Link></li>
          </ul>
          
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  