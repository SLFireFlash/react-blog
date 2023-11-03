import {useContext, useState} from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

function Loginpage(){
    const[username,getuserName] = useState('');
    const[password,getPasswrod] =useState('');
    const [redirect, setRedirect] = useState(false);
    const{setUserInfo}=useContext(UserContext);

    

    async function login(ev){
        ev.preventDefault();
        const response = await fetch("http://localhost:4000/login",{
            method:'POST',
            body:JSON.stringify({username,password}),
            headers:{'content-Type':'application/json'},
            credentials:'include',
        });
        if(response.ok){
            response.json().then(userinfo=>{
                setUserInfo(userinfo);
                setRedirect(true);
            })
            
        }
    }
    if(redirect){
        return(<Navigate to={'/'}/> )
    }
    return(
        <div className="formdiv">
            <form onSubmit={login} className="mainformdiv">
                <input 
                    type="text" 
                    placeholder="username" 
                    value={username}
                    onChange={ev=>getuserName(ev.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="password" 
                    value={password}
                    onChange={ev=>getPasswrod(ev.target.value)}
                />
                <button>Login</button>
            </form>
        </div>
    );
}
export default Loginpage;