import React from "react";
import propTypes from "prop-types";
import "./Movie.css"

function Movie({ id, year, title, summary, poster, genres }) {
    return <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movies_data">
            <h3 className="movie_title" >{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="movie_genres">
                {genres.map((item, index )=>
                    <li key={index} className="genres_genre">{index+1}.{item}
                    </li>)}
            </ul>
            <p className="movie_summary">{summary}</p>
        </div>
    </div>
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
}

export default Movie