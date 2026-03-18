import type { Movie } from "../types";

interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
  index?: number;
}

const MovieCard = ({ movie, onSelect, index = 0 }: MovieCardProps) => {
  return (
    <article
      className="movie-card"
      style={{
        backgroundImage: movie.image,
        borderColor: movie.accent,
        animationDelay: `${index * 80}ms`,
      }}
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
