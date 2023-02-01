import MovieInfo from "./movieInfo";
import MovieHall from "./movieHall";

function Movie()
{
    return (
        <>
            <section className="movie">
                <MovieInfo/>
                <MovieHall/>
            </section>
        </>
    );
}

export default Movie;
