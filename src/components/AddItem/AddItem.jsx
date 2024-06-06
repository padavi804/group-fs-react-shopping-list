import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function AddItem({fetchList}){


const [newShoppingListItemName, setNewShoppingListItemName] = useState('');
const [newShoppingListItemQuantity, setNewShoppingListItemQuantity] = useState('');
const [newShoppingListItemUnit, setNewShoppingListItemUnit] = useState('');
const [newShoppingListItemPurchased, setNewShoppingListItemPurchased] = useState(false);

const createItem = (event) => {
    event.preventDefault();
    axios({
        method: 'POST',
        url: '/api/shoppingList',
        data: {
            name: newShoppingListItemName,
            quantity: newShoppingListItemQuantity,
            unit: newShoppingListItemUnit,
            purchased: newShoppingListItemPurchased
        }
    })
    .then((response) => {
        fetchList();
    })
    .catch((error) => {
        console.log('error adding to list', error)
    })
}
 return ( <div>
  <h2>Add an Item</h2>
  <form onSubmit={createItem}>
    <div>
    <label htmlFor="name">Name</label> 
    <input type="text"  name="name" onChange={(event) => setNewShoppingListItemName(event.target.value)} value={newShoppingListItemName} />   
    </div>
    <div>
        <div>
        <label htmlFor="quantity">Quantity</label> 
    <input type="text"  name="quantity" onChange={(event) => setNewShoppingListItemQuantity(event.target.value)} value={newShoppingListItemQuantity}/>  
        </div>
        <div>
        <label htmlFor="unit">Unit</label> 
    <input type="text"  name="unit" onChange={(event) => setNewShoppingListItemUnit(event.target.value)} value={newShoppingListItemUnit}/>  
        </div>
    </div>
    <button type="submit">Add to List</button>
    </form>  
 </div>   
)}

export default AddItem