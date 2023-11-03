import { Link } from "react-router-dom";

function HeaderNav(){
    
    return(
        <header>
        <Link to="/" className='logo'>Mix Cafe</Link>
        <nav>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
    )
}
export default HeaderNav;