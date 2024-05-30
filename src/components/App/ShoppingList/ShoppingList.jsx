import React from "react"
import ShoppingItem from "../ShoppingItem/ShoppingItem"
function ShoppingList(){
    const items = [{
   name:"Apples",
   quantity: 5,
   unit: "lbs",
   purchased: true     
    }]
 return <div>
    <h2>Shopping List</h2>
    <div>
        <button>Reset</button>
        <button>Clear</button>
    </div>
{items.map((item)=>(
    <ShoppingItem/>
))}
 </div>   
}

export default ShoppingList