import { useSelector } from "react-redux";

export default function PaymentInfo() {
    const {session, seats, ticket} = useSelector((state) => state.seance);

    const seatsNum = seats.filter((seat) => ticket.seats.includes(seat.id)).map((seat) => seat.number);

    function getNoun(number) {
        let n = Math.abs(number);
        n %= 100;
        if (n >= 5 && n <= 20) {
            return 'рублей';
        }
        n %= 10;
        if (n === 1) {
            return 'рубль';
        }
        if (n >= 2 && n <= 4) {
            return 'рубля';
        }
        return 'рублей';
    }

    return (
        <>
            <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{session.title}</span></p>
            <p className="ticket__info">Места: <span className="ticket__details ticket__chairs">{seatsNum.join(', ')}</span></p>
            <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{session.name}</span></p>
            <p className="ticket__info">Начало сеанса: <span className="ticket__details ticket__start">{session.time}</span></p>
            <p className="ticket__info">Стоимость: <span className="ticket__details ticket__cost">{ticket.cost}</span> { } {getNoun(ticket.cost)}</p>
        </>
    );
}
