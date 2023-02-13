import { useSelector } from "react-redux";
import Main from "../Main";
import TicketHeader from "../Header/ticketHeader";
import Button from "../Button/btn";
import PaymentInfo from "./paymentInfo";

export default function MainPayment() {
    const { session, seats, ticket } = useSelector((state) => state.seance);

    const seatsNum = seats.filter((seat) => ticket.seats.includes(seat.id)).map((seat) => seat.number);

    return (
        <Main>
            <section className="ticket">
                <TicketHeader text={"Вы выбрали билеты:"}/>
                <div className="ticket__info-wrapper">
                    <PaymentInfo
                        film={session.title}
                        seats={seatsNum.join(', ')}
                        cinemaHall={session.hall_title}
                        time={session.time}
                        cost={ticket.cost}
                    />
                    <Button text={"Получить код бронирования"} link={"/ticket"}/>
                    <p className="ticket__hint">После оплаты билет будет доступен в этом окне, а также придёт вам на
                        почту. Покажите QR-код нашему контроллёру у входа в зал.</p>
                    <p className="ticket__hint">Приятного просмотра!</p>
                </div>
            </section>
        </Main>
    );
}
