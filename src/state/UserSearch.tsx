import { useState } from "react";

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
    const [name, setName] = useState("");
    const [existsUser, setExistsUser] = useState<UserSearchProps | undefined>();
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
    <input value={name} onChange={e => setName(e.target.value)} />
    <button onClick={onClick}>Find User</button>
    <div>
        {existsUser && existsUser.name}
        {existsUser && existsUser.age}
    </div>
</div>
};

export default UserSearch;