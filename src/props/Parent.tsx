import { ChildAsFC } from "./Child"

export const Parent = () =>{
    return <ChildAsFC color="red" onClick={()=> console.log("Clicked")}>
        asdasdas
    </ChildAsFC>
}