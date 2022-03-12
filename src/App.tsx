import './App.css';
import { Box } from './context/Box';
import { ThemeContextProvider } from './context/ThemeContext';
import { UserContext, UserContextProvider } from './context/UserContext';
// import {UserSearch} from './classes/UserSearch';
import EventComponent from './events/EventComponent';
import UserSearch from './refs/UserSearch';
import Counter from './classes/Counter';
import GuestList from './state/GuestList';
// import { User } from './state/User';
import { User } from './context/User';
import UseStateHook from "./state/UseState";
import { MutableRef } from './ref/MutableRef';
import Private from './auth/Private';
import Profile from './auth/Profile';
import List from './generics/List';
import { RandomNumber } from './restriction/RandomNumber';
import { Toast } from './templateliterals/Toast';
import CustomButton from './html/Button';
import CustomInput from './html/Input';
import { Text } from './polymorphic/Text';
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
    {/* <UserSearch/> */}
    {/* <UseStateHook/> */}
    {/* <User/> */}
    {/* <Counter/> */}

    {/* <ThemeContextProvider>
    <Box/>
    </ThemeContextProvider>

    <UserContextProvider>
      <User/>
    </UserContextProvider>

    <MutableRef/>

    <Counter message='Hello'/> */}

    <Private isLoggedIn={true} component={Profile}/>
    {/* <List items={["Batman","Superman","Wonder Woman"]} onClick={(item) => console.log(item)}/>
    <List items={[1,2,3]} onClick={(item) => console.log(item)}/> */}
    <List items={[
      {
        id: 1,
        first: "Onur",
        last: "Yurdagelen"
      },
      {
        id:2,
        first: "Bekir",
        last: "Yurdagelen"
      },
      {
        id:3,
        first: "Princess",
        last: "Diana"
      }
    ]} 
    onClick={(item) => console.log(item)}/>

    <RandomNumber value={10} isPositive/>
    <Toast position="center"/>
    <CustomButton variant='primary' onClick={() => console.log("Clicked!")}>
     Primary Color
    </CustomButton>
    <CustomInput onFocus={() => console.log("focused")}/>

    <Text as='h1' size='lg'>Heading</Text>
    <Text as='p' size='md'>Paragraph</Text>
    <Text size='md'>Division</Text>
    <Text as ='label' size='sm' htmlFor='someId' color='primary'>Label</Text>
    </div>
  );
}

export default App;
