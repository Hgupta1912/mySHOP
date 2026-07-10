import { Outlet } from 'react-router';
import { useState } from 'react';
import Header from "./components/Header.jsx";
import useCatalog from "./hooks/useCatalog.js";


function App() {
    const { catalog, error, loading } = useCatalog();
    const [items, setItems] = useState([]);

    function addItem(name, qty) {
        let newCart = [...items];
        if(items.findIndex(item => item.name===name) === -1) {
            newCart = [...newCart, {name: name, qty: qty}];
        }
        else {
            newCart = newCart.map(item => item.name===name ? {name: item.name, qty: Number(qty)}: item);
        }
        setItems(newCart);
    }

    function removeItem(name) {
        let newCart = [...items];
        const index = items.findIndex(item => item.name===name);
        if( index === -1) {
            console.log("Error: this item name is not in cart");
            return;
        }
        else {
            newCart.splice(index, 1);
        }
        setItems(newCart);
    }

    return (
        <main className='flex flex-col'>
            <Header qty={items.reduce((accumulator, curr) => {return accumulator + curr.qty;}, 0)}/>
            <Outlet context={{ catalog, error, loading, items, addItem, removeItem }}/>
        </main>
    ); 
}

export default App;
