import React from "react"
import ShoppingItem from "../ShoppingItem/ShoppingItem"
function ShoppingList({itemListArray, fetchList}){
//     const items = [{
//    name:"Apples",
//    quantity: 5,
//    unit: "lbs",
//    purchased: true     
//     }]

// let shoppingList = props.itemListArray;
 return( <div>
    <h2>Shopping List</h2>
    <div>
        <button>Reset</button>
        <button>Clear</button>
    </div>
    
{itemListArray.map((item)=>(
    <ShoppingItem item={item} fetchList = {fetchList}/>
))}

 </div>
 )   
}

export default ShoppingList