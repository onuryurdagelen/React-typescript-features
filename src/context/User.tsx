import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () =>{
    const userContext = useContext(UserContext);
    const handleLogin = () => {
       
        userContext.setUser({email: "onur213@test.com",name: "onur yurdagelen"})
        
    }
    const handleLogout = () => {
        
        userContext.setUser(null);
        
    }

    return <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is {userContext.user?.name}</div>
        <div>User email is {userContext.user?.email}</div>
    </div>
}