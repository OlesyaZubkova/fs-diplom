import {useDispatch, useSelector} from "react-redux";
import {deleteSeance, getSeances} from "../../../reducers/createAdminSlice";
import {closePopup} from "../../../reducers/createPopupSlice";
import AcceptBtn from "../Buttons/acceptBtn";

export default function DeleteSeance() {
    const {id} = useSelector((state) => state.popup);
    const {seances, movies} = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    const seance = seances.find((seance) => +seance.id === id);
    const title = movies.find((movie) => movie.id === +seance.film_id).title;

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(deleteSeance(id)).then(() => {
            dispatch(closePopup());
            dispatch(getSeances());
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className="conf-step__paragraph">Вы действительно хотите снять с сеанса фильм <span>{title}</span>?</p>
            <AcceptBtn text={"Удалить"}/>
        </form>
    );
}
