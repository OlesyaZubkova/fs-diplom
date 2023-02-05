import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCalendar } from "../../../reducers/createCalendarSlice";
import Movie from "./movie";

export default function MainMovie()
{
    const { films } = useSelector((state) => state.calendar);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCalendar());
    }, []);

    return (
        <main>
            {films.map((film) =>
                <Movie
                    id={film.id}
                    key={film.id}
                />
            )}
        </main>
    );
}
