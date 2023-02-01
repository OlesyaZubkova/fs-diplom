import { useState } from "react";
import Navigation from "./index";

function Navigate()
{
    const [start, setStart] = useState(new Date());
    const [chosen, setChosen] = useState(new Date(start.getTime()));
    const today = new Date();

    const handleClick = (day) => {
        setChosen(new Date(day));
    }

    const handleStart = (day, arg) => {
        setStart(new Date(day.setDate(day.getDay() + arg)));
    }

    const days = [new Date(start.getTime())];
    for (let i = 0; i < 5; i++) {
        const next = new Date(days[i].getTime());
        next.setDate(next.getDate() + 1);
        days.push(next);
    }

    return (
        <nav className="page-nav">
            {start.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0) ||
            <a
                className="page-nav__day page-nav__day_prev" onClick={() => handleStart(start, -1)} href="#">
            </a>}
            {days.map((day) =>
                <Navigation
                date={day}
                chosen={chosen}
                handleClick={() => handleClick(day)}
                key={day}
                />
            )}
            <a
                className="page-nav__day page-nav__day_next" onClick={() => handleStart(start, 1)} href="#">
            </a>
        </nav>
    );
}

export default Navigate;
