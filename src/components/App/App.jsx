//import React from 'react';
import { useEffect, useState } from 'react';
//import Header from '../Header/Header.jsx';
import './App.css';
//import AddItem from "./AddItem/AddItem.jsx";
//import ShoppingList from "./ShoppingList/ShoppingList.jsx";
import axios from 'axios';
function App() {

    let [itemName, setItemName] = useState('');
    let [itemQuantity, setItemQuantity] = useState('');
    let [itemListArray, setItemListArray] = useState([]);

    const fetchList = () => {
        axios({
            method: 'GET',
            url: '/api/shoppingList'
        })
            .then((response) => {
                console.log(response);
                setItemListArray(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(fetchList, []);

    return (
    
        <div className="App">
            <header className="banner-header">
            <h1>My Shopping List</h1>
            </header>
            <section className="add-item">
                <div>
                    <h2>Add an Item</h2>
                    <form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="quantity">Quantity</label>
                                <input type="text" name="quantity" />
                            </div>
                            <div>
                                <label htmlFor="unit">Unit</label>
                                <input type="text" name="unit" />
                            </div>
                        </div>
                        <button>Save</button>
                    </form>
                </div>
            </section>

            <main>
                {/* <AddItem/>
                <ShoppingList /> */}
            </main>
        </div>
    );
}

export default App;
