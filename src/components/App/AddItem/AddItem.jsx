import React from "react"

function AddItem(){
 return <div>
  <h2>Add an Item</h2>
  <form>
    <div>
    <label htmlFor="name">Name</label> 
    <input type="text"  name="name"/>   
    </div>
    <div>
        <div>
        <label htmlFor="quantity">Quantity</label> 
    <input type="text"  name="quantity"/>  
        </div>
        <div>
        <label htmlFor="unit">Unit</label> 
    <input type="text"  name="unit"/>  
        </div>
    </div>
    <button>Save</button>
    </form>  
 </div>   
}

export default AddItem