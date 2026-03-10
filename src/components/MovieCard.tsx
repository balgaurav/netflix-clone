import type { Movie } from "../types";

interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}

const MovieCard = ({ movie, onSelect }: MovieCardProps) => {
  return (
    <article
      className="movie-card"
      style={{ backgroundImage: movie.image, borderColor: movie.accent }}
      onClick={() => onSelect(movie)}
    >
      <div className="movie-card__content">
        <p className="movie-card__match">{movie.match}% Match</p>
        <h3>{movie.title}</h3>
        <p>{movie.preview}</p>
      </div>
    </article>
  );
};

export default MovieCard;
