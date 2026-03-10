import type { Movie } from "../types";

interface VideoModalProps {
  movie: Movie | null;
  onClose: () => void;
}

const VideoModal = ({ movie, onClose }: VideoModalProps) => {
  if (!movie) {
    return null;
  }

  return (
    <div className="video-modal" role="dialog" aria-modal="true">
      <div className="video-modal__backdrop" onClick={onClose} />
      <div className="video-modal__panel">
        <button className="video-modal__close" onClick={onClose}>
          Close
        </button>
        <div
          className="video-modal__hero"
          style={{ backgroundImage: movie.image, borderColor: movie.accent }}
        >
          <div className="video-modal__hero-copy">
            <p className="banner__label">Featured title</p>
            <h2>{movie.title}</h2>
            <p>{movie.preview}</p>
          </div>
        </div>
        <div className="video-modal__body">
          <p>{movie.synopsis}</p>
          <p>
            <strong>Cast:</strong> {movie.cast.join(", ")}
          </p>
          <p>
            <strong>Genres:</strong> {movie.genres.join(" • ")}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.duration}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
