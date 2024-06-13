// import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './AddItem.css'


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
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Item" variant="filled" name="name" onChange={(event) => setNewShoppingListItemName(event.target.value)} value={newShoppingListItemName}/>
      <TextField id="filled-basic" label="Quantity" variant="filled" name="quantity" onChange={(event) => setNewShoppingListItemQuantity(event.target.value)} value={newShoppingListItemQuantity}/>
      <TextField id="standard-basic" label="Unit" variant="filled" name="unit" onChange={(event) => setNewShoppingListItemUnit(event.target.value)} value={newShoppingListItemUnit}/>
    </Box>
    {/* <label htmlFor="name">Name</label> 
    <input type="text"   />    */}
    </div>
    {/* <div>
        <div>
        <label htmlFor="quantity">Quantity</label> 
    <input type="text"  />  
        </div>
        <div>
        <label htmlFor="unit">Unit</label> 
    <input type="text"  />  
        </div>
    </div> */}
    <Button type="submit"variant="outlined">Add to List</Button>
    </form>  
 </div>   
)}

export default AddItem