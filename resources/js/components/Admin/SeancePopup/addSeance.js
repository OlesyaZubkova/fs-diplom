import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { closePopup } from "../../../reducers/createPopupSlice";
import { createSeance, getSeances } from "../../../reducers/createAdminSlice";
import AcceptBtn from "../Buttons/acceptBtn";

export default function AddSeance()
{
    const {id} = useSelector((state) => state.popup);
    const {cinemaHalls, movies, chosenDate} = useSelector((state) => state.admin);
    const today = new Date();
    const EMPTY_STATE = {date: chosenDate, time: "00:00", cinemaHall: id, movie: movies[0].id};
    const [form, setForm] = useState(EMPTY_STATE);
    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.value;
        setForm((prevState) => ({...prevState, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const datetime = new Date(form.date);
        dispatch(createSeance({
            datetime: `${datetime.getFullYear()}-${('0' + (datetime.getMonth() + 1)).slice(-2)}-${('0' + datetime.getDate()).slice(-2)} ${form.time}`,
            cinema_hall_id: form.cinemaHall,
            film_id: form.movie,
        })).then(() => {
            dispatch(closePopup());
            dispatch(getSeances());
        });
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

            <label className="conf-step__label conf-step__label-fullsize" htmlFor="date">
                Дата сеанса
                <input className="conf-step__input"
                       type="date"
                       value={form.date}
                       onChange={handleChange}
                       name="date"
                       pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                       min={`${today.getFullYear()}-${('0' + (today.getMonth() + 1)).slice(-2)}-${('0' + today.getDate()).slice(-2)}`}
                       required/>
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
