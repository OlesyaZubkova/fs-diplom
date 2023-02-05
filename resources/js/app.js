import React from 'react';
import Main from "./components/Client/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
        </Routes>
    </BrowserRouter>

    );
}

export default App;
