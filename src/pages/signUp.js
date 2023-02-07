export default function SignUp(){
    return(
        <form className="signUp">
            <h2>Sign Up</h2>
            <input type="text" placeholder="userName" />
            <input type="password" placeholder="Password" />  
            <input type="password" placeholder="Re Enter Password" />
            <button type="submit" className="formBtn">sign Up</button>
            
        </form>

    );
}