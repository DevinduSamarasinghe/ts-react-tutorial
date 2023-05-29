import {useState} from "react"

const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleLogin = ()=>{
        setIsLoggedIn(true);
    }
    const handleLogOut = () =>{
        setIsLoggedIn(false);
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogOut}>Logout</button>

        <div>
            {isLoggedIn ? <h1>Welcome User</h1> : <h1>Welcome Guest</h1>}
        </div>
    </div>
  )
}

export default LoggedIn