import type { Movie, MovieRow } from "../types";
import MovieCard from "./MovieCard";

interface RowProps {
  row: MovieRow;
  onSelect: (movie: Movie) => void;
}

const Row = ({ row, onSelect }: RowProps) => {
  return (
    <section className="content-row">
      <div className="content-row__header">
        <div>
          <h2>{row.title}</h2>
          <p>{row.description}</p>
        </div>
      </div>
      <div className="content-row__track">
        {row.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
};

export default Row;
