import React from "react"
import ShoppingItem from "../ShoppingItem/ShoppingItem"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
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
    
    
    <ButtonGroup variant="outlined" aria-label="Basic button group">
      
      <Button>Reset</Button>
      <Button>Clear</Button>
    </ButtonGroup>
    
{itemListArray.map((item)=>(
    <ShoppingItem item={item} fetchList = {fetchList}/>
))}

 </div>
 )   
}

export default ShoppingList