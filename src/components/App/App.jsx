import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx';
import './App.css';
import AddItem from "../AddItem/AddItem.jsx";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";
import ShoppingItem from '../ShoppingItem/ShoppingItem.jsx';
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
                //console.log(response);
                console.log(response.data);
                setItemListArray(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(fetchList, []);

    return (

        <div className="App">
            <Header />
            <AddItem addItem={AddItem} fetchList={fetchList}/>           
            <ShoppingList itemListArray={itemListArray} fetchList={fetchList} />
        </div>
    );
}

export default App;