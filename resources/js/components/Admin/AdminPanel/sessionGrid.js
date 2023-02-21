import AddMovieAction from "../Actions/addMovieAction";
import SeancesHall from "../Seances/seancesHall";

export default function SessionGrid()
{

    return (
        <div className="conf-step__wrapper">
            <AddMovieAction/>
            <SeancesHall/>
        </div>
    )
}
