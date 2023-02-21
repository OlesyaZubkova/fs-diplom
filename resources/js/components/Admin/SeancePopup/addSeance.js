import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { closePopup } from "../../../reducers/createPopupSlice";
import { createSeance, getSeances } from "../../../reducers/createAdminSlice";
import AcceptBtn from "../Buttons/acceptBtn";

export default function AddSeance()
{
    const {id} = useSelector((state) => state.popup);
    const {cinemaHalls, movies} = useSelector((state) => state.admin);
    const EMPTY_STATE = {time: "00:00", cinemaHall: id, movie: movies[0].id};
    const [form, setForm] = useState(EMPTY_STATE);
    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.value;
        setForm((prevState) => ({...prevState, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createSeance({
            time: form.time,
            cinema_hall_id: form.cinemaHall,
            film_id: form.movie,
        }));
        dispatch(closePopup());
        dispatch(getSeances());
    };

    return (
        <form acceptCharset="utf-8" onSubmit={handleSubmit}>
            <label className="conf-step__label conf-step__label-fullsize" htmlFor="cinemaHall">
                Название зала
                <select className="conf-step__input"
                        name="cinemaHall"
                        defaultValue={id}
                        onChange={handleChange}
                        required>
                    {cinemaHalls.map((cinemaHall) =>
                        <option value={cinemaHall.id}
                                key={cinemaHall.id}>
                            {cinemaHall.name}
                        </option>)}
                </select>
            </label>
            <label className="conf-step__label conf-step__label-fullsize" htmlFor="time">
                Время начала
                <input className="conf-step__input"
                       type="time"
                       value={form.time}
                       onChange={handleChange}
                       name="time"
                       required/>
            </label>

            <label className="conf-step__label conf-step__label-fullsize" htmlFor="movie">
                Название фильма
                <select className="conf-step__input"
                        name="movie"
                        onChange={handleChange}
                        required>
                    {movies.map((movie) =>
                        <option value={movie.id}
                                key={movie.id}>
                            {movie.title}
                        </option>)}
                </select>
            </label>

            <AcceptBtn text={"Добавить"}/>
        </form>
    );
}
