import { useSelector } from "react-redux";

export default function SeanceInfo() {
    const { session } = useSelector((state) => state.seance);

    return (
            <div className="buying__info">
                <div className="buying__info-description">
                    <h2 className="buying__info-title">Звёздные войны XXIII: Атака клонированных клонов</h2>
                    <p className="buying__info-start">Начало сеанса: 18:30</p>
                    <p className="buying__info-hall">Зал</p>
                </div>
            </div>
    );
}
