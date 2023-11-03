import {useState} from "react";


function RegisterPage(){
const [username,setUserName]=useState('');
const [password,setPassword]=useState('');
    async function Register(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register',{
                            method: 'POST',
                            body:JSON.stringify({username,password}),
                            headers:{'Content-Type':'application/json'},
                        })
        if(response.ok === false){
            alert("Registration Faield")
        }else{
            alert("regstration sucsess");
        }

    }

    
    return(
        <div className="formdiv">
            <form onSubmit={Register} className="mainformdiv">
                <input 
                    type="text" 
                    placeholder="username" 
                    value={username}
                    onChange={ev=>setUserName(ev.target.value)}   
                />
                <input 
                    type="password" 
                    placeholder="password"
                    value={password}
                    onChange={ev=>setPassword(ev.target.value)} 
                />
                <input type="password" placeholder="Confrom password" />
                <button>Register</button>
            </form>
        </div>
    );
}
export default RegisterPage;