import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header(){
    // useEffect(()=>{
    //   fetch("http://localhost:4000/proC",{
    //     credentials: 'include'
    //   })
    // },[]);
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