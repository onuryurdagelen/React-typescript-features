import React, { Component } from "react";

interface User{
    name:string;
    age:number;
}

interface UserSearchProps {
    users: User[];
}
interface UserSearchState {
    name: string;
    user: User | undefined;
}

export class UserSearch extends Component<UserSearchProps>{
    state: UserSearchState = {
    name: '',
    user: undefined   
    };

    onClick =() =>{
        console.log(this.props.users);
        const foundUser = this.props.users.find((user) =>{
            return user.name === this.state.name;
        });
        this.setState({user : foundUser})
    }

    render(){
        const {user,name} = this.state;
       return (
        <div>
        <h3>User Search</h3>
        <input value={name} name='name' onChange={e => this.setState({name : e.target.value})} />
        <button onClick={this.onClick}>Find User</button>
        <div>
            {user && user.name}
            {user && user.age}
        </div>
    </div>
       )
    }
}

