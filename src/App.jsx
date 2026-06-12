import { Outlet } from 'react-router';
import { useState } from 'react';
import Header from "./components/Header.jsx";

function App() {
    const {items, setItems} = useState([]);
    return (
        <>
            <Header qty={items.length}/>
            <Outlet />
        </>
    ); //do i needa use an outletcontext arg in outlet to get setItems down into the screens?
}

export default App;
