import type { AppView } from "../types";
import { useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import VideoModal from "../components/VideoModal";
import { useMovies } from "../hooks/useMovies";
import type { Movie } from "../types";

interface BrowseProps {
  onNavigate: (view: AppView) => void;
}

const Browse = ({ onNavigate }: BrowseProps) => {
  const { rows, featuredMovie, searchResults, searchQuery, setSearchQuery, isLoading } =
    useMovies();
  const [activeMovie, setActiveMovie] = useState<Movie | null>(null);

  const hasSearch = searchQuery.trim().length > 0;

  return (
    <div className="page page--browse">
      <Navbar
        onNavigate={onNavigate}
        onSearchChange={setSearchQuery}
        searchValue={searchQuery}
      />
      <main className="browse">
        <Banner
          movie={featuredMovie}
          onPlay={setActiveMovie}
          onMoreInfo={setActiveMovie}
        />

        <section className="browse__summary">
          <div>
            <p className="marketing__eyebrow">Your evening queue</p>
            <h2>{hasSearch ? `Results for "${searchQuery}"` : "Curated for you"}</h2>
          </div>
          <p className="browse__copy">
            {hasSearch
              ? `${searchResults.length} titles matched your query.`
              : "A premium-looking streaming home built from local data and reusable components."}
          </p>
        </section>

        {isLoading ? (
          <section className="loading-panel">
            <div className="loading-panel__pulse" />
            <p>Loading catalog...</p>
          </section>
        ) : hasSearch ? (
          searchResults.length > 0 ? (
            <section className="search-grid">
              {searchResults.map((movie, index) => (
                <button
                  key={movie.id}
                  className="search-grid__item"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%), url(${movie.image})`,
                    borderColor: movie.accent,
                    animationDelay: `${index * 60}ms`,
                  }}
                  onClick={() => setActiveMovie(movie)}
                >
                  <span>{movie.title}</span>
                </button>
              ))}
            </section>
          ) : (
            <section className="loading-panel">
              <p>No titles matched your search. Try a genre like "Sci-Fi" or "Drama".</p>
            </section>
          )
        ) : (
          rows.map((row) => (
            <Row key={row.id} row={row} onSelect={(movie) => setActiveMovie(movie)} />
          ))
        )}
      </main>
      <Footer />
      <VideoModal movie={activeMovie} onClose={() => setActiveMovie(null)} />
    </div>
  );
};

export default Browse;
