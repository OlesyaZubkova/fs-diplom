import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../../../reducers/createAdminSlice";
import { showPopup } from "../../../reducers/createPopupSlice";
import Button from "../Buttons/btn";
import DeleteMovieAction from "./deleteMovieAction";

export default function AddMovieAction() {
    const { movies } = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <>
            <p className="conf-step__paragraph">
                <Button text={"Добавить фильм"}
                        callback={() => dispatch(showPopup({title: "Добавление фильма", form: "addMovie"}))}
                />
            </p>
            <div className="conf-step__movies">
                {movies.map((movie) =>
                    <DeleteMovieAction
                        id={movie.id}
                        img={movie.poster}
                        title={movie.title}
                        duration={movie.duration}
                        key={movie.id}
                    />
                )}
            </div>
        </>
    );
}
