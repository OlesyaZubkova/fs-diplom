import { useSelector } from "react-redux";

export default function MovieInfo(props)
{
    const { films } = useSelector((state) => state.calendar);
    const { id } = props;
    const film = films.find((film) => film.id === id)
    console.log(film);

    function getNoun(number) {
        let n = Math.abs(number);
        n %= 100;
        if (n >= 5 && n <= 20) {
            return 'минут';
        }
        n %= 10;
        if (n === 1) {
            return 'минута';
        }
        if (n >= 2 && n <= 4) {
            return 'минуты';
        }
        return 'минут';
    }

    return (
        <div className="movie__info">
            <div className="movie__poster">
                <img className="movie__poster-image" alt={`${film.title} постер`} src={film.poster}/>
            </div>
            <div className="movie__description">
                <h2 className="movie__title">{film.title}</h2>
                <p className="movie__synopsis">{film.description}</p>
                <p className="movie__data">
                    <span className="movie__data-duration">{film.duration} {getNoun(film.duration)}</span>
                    {" "}
                    <span className="movie__data-origin">{film.country}</span>
                </p>
            </div>
        </div>
    );
}
