import { useRef, useState,useEffect } from "react";

const users = [
    {name: "Sarah",age:20},
    {name: "Alex",age:19},
    {name: "Michael",age:20}
]

interface UserSearchProps {
    name:string;
    age:number;
}

const UserSearch:React.FC = () =>{
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState("");
    const [existsUser, setExistsUser] = useState<UserSearchProps | undefined>();

    useEffect(()=>{
        if (!inputRef.current) {
            return;
        }
        inputRef.current.focus();
    },[])
    const onClick = () =>{
        
        const foundUser = users.find((user) =>{
            return user.name === name;
        });
        console.log(foundUser);
        setExistsUser(foundUser);
        setName("");
        
    }
return <div>
    <h3>User Search</h3>
    <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
    <button onClick={onClick}>Find User</button>
    <div>
        {existsUser && existsUser.name}
        {existsUser && existsUser.age}
    </div>
</div>
};

export default UserSearch;