import { useContext } from "react"
import {ThemeContext} from "./ThemeContext";

export const Box = () =>{
    const theme = useContext(ThemeContext);
    console.log(theme);
    return <div style={{backgroundColor: theme.primary.main,color:theme.primary.text}}>Theme Context</div>
}