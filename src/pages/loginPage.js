import { useState } from "react";

export default function LoginPage(){
    const[username,setUsername] =useState("");
    const[password,setPassword] =useState("");
    async function login(ev){
        ev.preventDefault();
            await fetch("http://localhost:4000/loginDb",{
                method: 'POST',
                body:JSON.stringify({username,password}),
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json',
                },
            })


    }
    return(
        <form className="login" onSubmit={login}>
            <h2>login</h2>
            <input type="text" placeholder="userName" value={username} onChange={ev=>setUsername(ev.target.value)} />
            <input type="password" placeholder="Password" value={password}onChange={ev=>setPassword(ev.target.value)} />  
        <button type="submit" className="formBtn">LogIn</button>

</form>

    );
}