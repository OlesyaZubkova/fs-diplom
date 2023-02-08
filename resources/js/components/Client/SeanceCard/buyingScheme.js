import { useSelector } from "react-redux";

export default function BuyingScheme() {

    return (
        <div className="buying-scheme">
            <div className="buying-scheme__wrapper">
                <div className="buying-scheme__row">
                    <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                </div>

                <div className="buying-scheme__row">
                    <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_taken"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                </div>

                <div className="buying-scheme__row">
                    <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                </div>

                <div className="buying-scheme__row">
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_vip"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_vip"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                </div>

                <div className="buying-scheme__row">
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_vip"></span><span
                    className="buying-scheme__chair buying-scheme__chair_vip"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_vip"></span><span
                    className="buying-scheme__chair buying-scheme__chair_vip"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                </div>

                <div className="buying-scheme__row">
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_vip"></span><span
                    className="buying-scheme__chair buying-scheme__chair_taken"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_taken"></span><span
                    className="buying-scheme__chair buying-scheme__chair_taken"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                </div>

                <div className="buying-scheme__row">
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_vip"></span><span
                    className="buying-scheme__chair buying-scheme__chair_taken"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_taken"></span><span
                    className="buying-scheme__chair buying-scheme__chair_vip"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                </div>

                <div className="buying-scheme__row">
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_selected"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_selected"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span
                    className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                </div>

                <div className="buying-scheme__row">
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_taken"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_taken"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_taken"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                </div>

                <div className="buying-scheme__row">
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_taken"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_taken"></span><span
                    className="buying-scheme__chair buying-scheme__chair_taken"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span
                    className="buying-scheme__chair buying-scheme__chair_standart"></span>
                </div>
            </div>
            <div className="buying-scheme__legend">
                <div className="col">
                    <p className="buying-scheme__legend-price"><span
                        className="buying-scheme__chair buying-scheme__chair_standart"></span> Свободно (<span
                        className="buying-scheme__legend-value">250</span>руб)</p>
                    <p className="buying-scheme__legend-price"><span
                        className="buying-scheme__chair buying-scheme__chair_vip"></span> Свободно VIP (<span
                        className="buying-scheme__legend-value">350</span>руб)</p>
                </div>
                <div className="col">
                    <p className="buying-scheme__legend-price"><span
                        className="buying-scheme__chair buying-scheme__chair_taken"></span> Занято</p>
                    <p className="buying-scheme__legend-price"><span
                        className="buying-scheme__chair buying-scheme__chair_selected"></span> Выбрано</p>
                </div>
            </div>
        </div>
    );
}
