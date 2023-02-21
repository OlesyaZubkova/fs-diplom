import { useState } from "react";
import { useDispatch } from "react-redux";
import { createMovie, getMovies } from "../../../reducers/createAdminSlice";
import { closePopup } from "../../../reducers/createPopupSlice";
import AcceptBtn from "../Buttons/acceptBtn";

export default function AddMovie()
{
    const EMPTY_STATE = {title: "", description: "", duration: "", country: ""};
    const [form, setForm] = useState(EMPTY_STATE);
    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.value;
        setForm((prevState) => ({...prevState, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createMovie({
            title: form.title,
            description: form.description,
            duration: form.duration,
            country: form.country
        }));
        dispatch(closePopup());
        dispatch(getMovies());
    };

    return (
        <form acceptCharset="utf-8" onSubmit={handleSubmit}>
            <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Название фильма
                <input className="conf-step__input"
                       type="text"
                       placeholder="Например, &laquo;Гражданин Кейн&raquo;"
                       name="title"
                       value={form.title}
                       onChange={handleChange}
                       required
                />
            </label>

            <label className="conf-step__label conf-step__label-fullsize" htmlFor="description">
                Описание фильма
                <input className="conf-step__input"
                       type="text"
                       name="description"
                       value={form.description}
                       onChange={handleChange}
                       required
                />
            </label>

            <label className="conf-step__label conf-step__label-fullsize" htmlFor="duration">
                Длительность фильма
                <input className="conf-step__input"
                       type="text"
                       placeholder="Например, 130 минут"
                       name="duration"
                       value={form.duration}
                       onChange={handleChange}
                       required
                />
            </label>

            <label className="conf-step__label conf-step__label-fullsize" htmlFor="country">
                Страна
                <input className="conf-step__input"
                       type="text"
                       placeholder="Например, Англия"
                       name="country"
                       value={form.country}
                       onChange={handleChange}
                       required
                />
            </label>

            <AcceptBtn text={"Добавить фильм"}/>
        </form>
    );
}
