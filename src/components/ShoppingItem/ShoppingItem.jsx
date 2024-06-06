//import React from "react"

function ShoppingItem({item, fetchList}){
  // let item = props.item
  let {id, name, unit, quantity} = item
  return (
  <div>
    <h3 key={id}>{name}</h3>
    <p>{quantity} {unit}</p>
    <div>
        <button>Buy</button>
        <button>Remove</button>
    </div>
  </div>
  ); 
  //callfetchlist
}

export default ShoppingItem