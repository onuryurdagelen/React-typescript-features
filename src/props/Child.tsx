interface ChilProps {
    color:string;
    onClick:()=>void;
}

//the most straightforward way to define props
export const Child = ({color,onClick}: ChilProps)=>{
    return <div>
        {color}
        <button onClick={onClick}>Click Me</button>
        </div>
}

//Explicit Component Type Annotations
export const ChildAsFC:React.FC<ChilProps> = ({color,onClick,children}) =>{
    return <div>
        {color}
        {children}
        <button onClick={onClick}>Click Me</button>
        </div>
}

ChildAsFC.displayName = "Onur";