import { isThrowStatement } from "typescript";

type ListProps<T> = {
    items: T[];
    onClick: (value:T) => void;
}
type itemsObj = {
    id:number;
    first:string;
    last:string;
}
const List = <T extends itemsObj>({items,onClick}: ListProps<T>) => {
  return (
    <div>
        <h2>List of items</h2>
        {items.map((item,index)=>{
            return (
                <div key={index} onClick={()=> onClick(item)}>{item.first}</div>
            )
        })}
    </div>
  )
}

export default List;