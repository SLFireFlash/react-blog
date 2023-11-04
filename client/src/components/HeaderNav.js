import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";


function HeaderNav(){
  const {setUserInfo,userInfo}=useContext(UserContext)
  
  useEffect(()=>{
    fetch('http://localhost:4000/profile',{
      credentials:'include'
    }).then(response=>{
      response.json().then(info=>{
        setUserInfo(info);
      }) 
    });
  },[]);

  function logout(){
    fetch('http://localhost:4000/logout',{
      credentials:'include',
      method:'POST',
    })
    setUserInfo(null);
  }
  const username = userInfo?.username;
    return(
        <header>
        <Link to="/" className='logo'>Mix Cafe</Link>       
        <nav>
          {username &&(
            <>
              <a>Hi {userInfo.username}</a>
              <Link to='/newPost'>Post</Link>
              <a onClick={logout}>Logout</a>
            </>
          )}
          {!username &&(
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )
          }
        </nav>
      </header>
    )
}
export default HeaderNav;