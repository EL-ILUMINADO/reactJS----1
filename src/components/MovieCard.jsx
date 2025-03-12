import React from "react";

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  return (
    <div className="movie-card" role="article">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt={`Poster for ${title}`}
        loading="lazy"
      />

      <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div
            className="rating"
            aria-label={`Rating: ${
              vote_average ? vote_average.toFixed(1) : "Not Available"
            }`}
          >
            <img src="star.svg" alt="" aria-hidden="true" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>

          <span aria-hidden="true">•</span>
          <p className="lang">{original_language?.toUpperCase() || "N/A"}</p>
          <span aria-hidden="true">•</span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
