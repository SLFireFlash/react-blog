import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
        <Link to={"/"} className='logo'>TeamHiru Blog</Link>
        <nav>
          <Link to={'/login'}>LOG IN</Link>
          <Link to={'/signUp'}>SIGN UP</Link>
        </nav>
      </header>
    );
}