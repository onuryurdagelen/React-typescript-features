import './App.css';
// import {UserSearch} from './classes/UserSearch';
import EventComponent from './events/EventComponent';
import UserSearch from './refs/UserSearch';
import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';

function App() {
  const users = [
    {name: "Sarah",age:20},
    {name: "Alex",age:19},
    {name: "Michael",age:20}
]
  return (
    <div className="App">
      {/* <GuestList/> */}
      {/* <UserSearch/> */}
      {/* <EventComponent/> */}
      {/* <UserSearch users={users}/> */}
    <UserSearch/>
    </div>
  );
}

export default App;
