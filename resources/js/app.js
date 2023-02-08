import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieCard from './components/Client/MovieCard';
import SeanceCard from './components/Client/SeanceCard';

function App() {
    return (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MovieCard/>}/>
            <Route path="cinemaHall/:seanceId" element={<SeanceCard/>}/>
        </Routes>
    </BrowserRouter>

    );
}

export default App;
