import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSeances } from "../../../reducers/createAdminSlice";
import AddSeanceAction from "../Actions/addSeanceAction";

export default function SeancesHall()
{
    const { seances, cinemaHalls } = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSeances());
    }, []);

    return (
        <div className="conf-step__seances">
            {cinemaHalls.map((cinemaHall) =>
                <AddSeanceAction
                    id={cinemaHall.id}
                    name={cinemaHall.name}
                    key={cinemaHall.id}
                />
            )}
        </div>
    );
}
