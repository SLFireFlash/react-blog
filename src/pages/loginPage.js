export default function LoginPage(){
    return(
        <form className="login">
            <input type="text" placeholder="userName" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="formBtn">Login</button>
        </form>

    );
}