import { useSelector } from "react-redux";

export default function MovieInfo(props)
{
    const { films } = useSelector((state) => state.calendar);
    console.log(films);
    const { id } = props;
    const film = films.find((film) => film.id === id)
    console.log(film);

    return (
        <div className="movie__info">
            <div className="movie__poster">
                <img className="movie__poster-image" alt={`${film.title} постер`} src={'images/poster1.jpg'}/>
            </div>
            <div className="movie__description">
                <h2 className="movie__title">{film.title}</h2>
                <p className="movie__synopsis">{film.description}</p>
                <p className="movie__data">
                    <span className="movie__data-duration">{film.duration}</span>
                    {" "}
                    <span className="movie__data-origin">{film.country}</span>
                </p>
            </div>
        </div>
    );
}
