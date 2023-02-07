export default function SignUp(){
    return(
        <form className="signUp">

            <label for="userName">userName</label>
            <input type="text" placeholder="userName" />

            <label for="password">Password</label>
            <input type="password" placeholder="Password" />  

            <label for="checkPassword">Re Enter Password</label>
            <input type="password" placeholder="Check Password" />

            <button type="submit" className="formBtn">sign Up</button>
            
        </form>

    );
}