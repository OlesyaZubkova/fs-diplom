import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSeance } from "../../../reducers/createSeanceSlice";
import Main from "../Main";
import SeanceInfo from "./seanceInfo";
import BuyingScheme from "./buyingScheme";

export default function MainSeance() {
    const { session, seats } = useSelector((state) => state.seance);
    const seanceId = useParams().seanceId;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSeance(seanceId));
    }, []);

    return (
        <Main>
            <section className="buying">
                <SeanceInfo/>
                <BuyingScheme/>
                <button className="acceptin-button" onClick="location.href='payment.html'">Забронировать</button>
            </section>
        </Main>
    );
}
