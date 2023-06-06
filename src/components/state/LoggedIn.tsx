import {useState} from "react"

type AuthUser = {
    name: string,
    email: string
}

const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const [user,setUser] = useState<AuthUser | null>(null);
    const handleLogin = ()=>{
        setIsLoggedIn(true);
        setUser({
            name: "John",
            email: "john@gmail.com"
        });
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
            <div>Username: {user?.name}</div>
            <div>Email: {user?.email}</div>
        </div>
    </div>
  )
}

export default LoggedIn