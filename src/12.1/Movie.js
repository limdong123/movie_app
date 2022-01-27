import React from "react";
import propTypes from "prop-types";

function Movie({id, year, title, summary, poster}) {
    return <h5>{title}</h5>
}

Movie.propTypes ={
    id: propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster:propTypes.string.isRequired,
    year:propTypes.number.isRequired,
}

export default Movie