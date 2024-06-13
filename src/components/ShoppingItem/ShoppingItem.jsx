//import React from "react"
import Button from '@mui/material/Button';

function ShoppingItem({item, fetchList}){
  // let item = props.item
  let {id, name, unit, quantity} = item
  return (
  <div>
    <h3 key={id}>{name}</h3>
    <p>{quantity} {unit}</p>
    <div>
    <Button variant='contained'>Buy</Button>
    <Button variant='outlined' color='error'>Remove</Button>
    </div>
  </div>
  ); 
  //callfetchlist
}

export default ShoppingItem