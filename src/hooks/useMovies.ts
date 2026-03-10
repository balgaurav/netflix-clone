import { useEffect, useState } from "react";
import type { Movie, MovieRow } from "../types";
import { fetchFeaturedMovie, fetchRows, searchCatalog } from "../utils/api";

export const useMovies = () => {
  const [rows, setRows] = useState<MovieRow[]>([]);
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);

      const [nextRows, nextFeatured] = await Promise.all([
        fetchRows(),
        fetchFeaturedMovie()
      ]);

      setRows(nextRows);
      setFeaturedMovie(nextFeatured);
      setSearchResults(nextRows.flatMap((row) => row.movies));
      setIsLoading(false);
    };

    void load();
  }, []);

  useEffect(() => {
    const search = async () => {
      const results = await searchCatalog(searchQuery);
      setSearchResults(results);
    };

    void search();
  }, [searchQuery]);

  return {
    rows,
    featuredMovie,
    searchResults,
    searchQuery,
    setSearchQuery,
    isLoading
  };
};
