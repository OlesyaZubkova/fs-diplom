import { useDispatch } from "react-redux";
import { showPopup } from "../../../reducers/createPopupSlice";
import ChooseHallBtn from "../Buttons/chooseHallBtn";

export default function AddSeanceAction(props)
{
    const { id, name } = props;
    const dispatch = useDispatch();

    return (
        <div className="conf-step__seances-hall">
            <div className="conf-step__selectors-box">
                <ChooseHallBtn
                    name={name}
                    checked={false}
                    callback={() => dispatch(showPopup({title: "Добавление сеанса", form: "addSeance", id}))}
                />
            </div>
        </div>
    );
}
