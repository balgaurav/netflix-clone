import type { Movie } from "../types";

interface BannerProps {
  movie: Movie | null;
  onPlay: (movie: Movie) => void;
  onMoreInfo: (movie: Movie) => void;
}

const Banner = ({ movie, onPlay, onMoreInfo }: BannerProps) => {
  if (!movie) {
    return null;
  }

  return (
    <section
      className="banner"
      style={{
        backgroundImage: movie.image
      }}
    >
      <div className="banner__overlay">
        <p className="banner__label">Now streaming</p>
        <h1 className="banner__title">{movie.logo}</h1>
        <p className="banner__meta">
          <span>{movie.match}% Match</span>
          <span>{movie.year}</span>
          <span>{movie.maturityRating}</span>
          <span>{movie.duration}</span>
        </p>
        <p className="banner__description">{movie.synopsis}</p>
        <div className="banner__actions">
          <button className="light-button" onClick={() => onPlay(movie)}>
            Play
          </button>
          <button className="ghost-button" onClick={() => onMoreInfo(movie)}>
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
