import { useSelector} from "react-redux";
import Main from "../Main";
import TicketHeader from "../Header/ticketHeader";
import TicketInfo from "./ticketInfo";

export default function MainTicket() {
    const { session, seats, ticket } = useSelector((state) => state.seance);
    const seatsNum = seats.filter((seat) => ticket.seats.includes(seat.id)).map((seat) => seat.number);

    return (
        <Main>
            <section className="ticket">
                <TicketHeader text={"Электронный билет"}/>
                <div className="ticket__info-wrapper">
                    <TicketInfo
                        film={session.title}
                        seats={seatsNum.join(', ')}
                        cinemaHall={session.hall_title}
                        time={session.time}
                    />
                    <p className="ticket__hint">Покажите QR-код нашему контроллеру для подтверждения бронирования.</p>
                    <p className="ticket__hint">Приятного просмотра!</p>
                </div>
            </section>
        </Main>
    );
}
