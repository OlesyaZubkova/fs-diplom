import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieCard from './components/Client/MovieCard';
import SeanceCard from './components/Client/SeanceCard';
import MainPayment from "./components/Client/PaymentCard";
import MainTicket from "./components/Client/TicketCard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MovieCard/>}/>
                <Route path="cinemaHall/:seanceId" element={<SeanceCard/>}/>
                <Route path="payment" element={<MainPayment/>}/>
                <Route path="ticket" element={<MainTicket/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
