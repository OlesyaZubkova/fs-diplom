import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { showPopup } from "../../../reducers/createPopupSlice";
import { getHalls } from "../../../reducers/createAdminSlice";
import Button from "../Buttons/btn";
import HallDeleteBtn from "../Buttons/hallDeleteBtn";

export default function CinemaHallControl()
{
    const { cinemaHalls } = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHalls());
    },[]);

    return (
        <div className="conf-step__wrapper">
            <p className="conf-step__paragraph">Доступные залы:</p>
            <ul className="conf-step__list">
                {cinemaHalls.map((cinemaHall) =>
                    <HallDeleteBtn
                        id={cinemaHall.id}
                        name={cinemaHall.name}
                        key={cinemaHall.id}
                    />
                )}
            </ul>
            <Button text={"Создать зал"} callback={() => dispatch(showPopup({form: "addHall"}))}/>
        </div>
    );
}
