import { useSelector} from "react-redux";
import Main from "../Main";
import TicketHeader from "../Header/ticketHeader";
import TicketInfo from "./ticketInfo";
import qrcode from "../../Images/qrcode.png";

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
                        cinemaHall={session.name}
                        time={session.datetime}
                        cost={ticket.cost}
                    />
                    <p className="ticket__hint">Покажите QR-код нашему контроллеру для подтверждения бронирования.</p>
                    <p className="ticket__hint">Приятного просмотра!</p>
                    <a>
                        <img className="ticket__hint_img" src={qrcode} alt="QR-code"/>
                    </a>
                </div>
            </section>
        </Main>
    );
}
