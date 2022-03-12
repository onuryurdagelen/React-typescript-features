import { useState } from "react";

type AuthUser = {
    name:string;
    email:string;
}


export const User:React.FC = () =>{
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // setIsLoggedIn(true)
        setUser({
            name: "Onur",
            email : "onur123@test.com"
        })
    }
    // const handleLogout = () => {
    //     // setIsLoggedIn(false)
    //     setUser(null);
    // }

    return <div>
        <button onClick={handleLogin}>Login</button>
        {/* <button onClick={handleLogout}>Logout</button> */}
        <div>User name is {user.name}</div>
        <div>User email is {user.email}</div>
    </div>
}