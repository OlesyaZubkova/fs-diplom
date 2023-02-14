export default function TicketInfo(props) {
    const {film, seats, cinemaHall, time} = props;

    return (
        <>
            <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{film}</span></p>
            <p className="ticket__info">Места: <span className="ticket__details ticket__chairs">{seats}</span></p>
            <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{cinemaHall}</span></p>
            <p className="ticket__info">Начало сеанса: <span className="ticket__details ticket__start">{time}</span></p>
        </>
    );
}
