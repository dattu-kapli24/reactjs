import { Fragment } from "react";
import { MouseEvent } from "react";
import{useState} from "react";

interface Props{
    items:String[] ;
    heading :String;
    onSelectItem:(item:String)=>void;
}


function ListGroup({items,heading,onSelectItem}:Props){
    //Hook
    const [selectedIndex,setSelectedIndex] =useState(-1);

    return (
        <Fragment>
  <h1>{heading}</h1>
  {items.length==0&&<p>No items found</p>}
  <ul className="list-group">
     {
      items.map((item,index)=>(
        <li className={selectedIndex===index
        ?"list-group-item active":
        "list-group-item"} 
        key={item}
        onClick={()=>
        setSelectedIndex(index)
    }
        
        >{item}</li>
      ))
     }
   </ul>
  </Fragment>
    )
}
export default ListGroup;