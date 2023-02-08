import { useState } from "react";

export default function SignUp(){
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    async function register(ev){
        ev.preventDefault();
        await fetch("http://localhost:4000/signUp",{
            method: 'POST',
            body:JSON.stringify({username,password}),
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
            },
        })
        .then(()=>{
            alert('You have been added to the system!');
        })
    }

    return(
        <form className="signUp" onSubmit={register}>
            <h2>Sign Up</h2>
            <input type="text" placeholder="userName" value={username}onChange={ev =>setUsername(ev.target.value)} />
            <input type="password" placeholder="Password" value={password}onChange={ev=>setPassword(ev.target.value)} />  
            <button type="submit" className="formBtn">sign Up</button>
            
        </form>

    );
}
