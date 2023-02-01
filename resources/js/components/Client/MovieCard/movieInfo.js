function MovieInfo()
{
    return (
        <div className="movie__info">
            <div className="movie__poster">
                <img className="movie__poster-image" alt="Звёздные войны постер" src={require('/images/poster1.jpg').default}/>
            </div>
            <div className="movie__description">
                <h2 className="movie__title">{'Звёздные войны XXIII: Атака клонированных клонов'}</h2>
                <p className="movie__synopsis">{'Две сотни лет назад малороссийские хутора разоряла шайка нехристей-ляхов во главе с могущественным колдуном.'}</p>
                <p className="movie__data">
                    <span className="movie__data-duration">{'130 минут '}</span>
                    <span className="movie__data-origin">{'США'}</span>
                </p>
            </div>
        </div>
    );
}

export default MovieInfo;
