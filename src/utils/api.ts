import { catalog } from "../data/catalog";
import type { Movie, MovieRow, UserProfile } from "../types";

const delay = async (ms: number) =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });

export const fetchRows = async (): Promise<MovieRow[]> => {
  await delay(180);
  return catalog.rows;
};

export const fetchFeaturedMovie = async (): Promise<Movie> => {
  await delay(120);
  return catalog.movies.find((movie) => movie.featured) ?? catalog.movies[0];
};

export const fetchProfiles = async (): Promise<UserProfile[]> => {
  await delay(80);
  return catalog.profiles;
};

export const searchCatalog = async (query: string): Promise<Movie[]> => {
  await delay(90);

  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    return catalog.movies;
  }

  return catalog.movies.filter((movie) => {
    const genreMatch = movie.genres.some((genre) =>
      genre.toLowerCase().includes(normalizedQuery)
    );

    return (
      movie.title.toLowerCase().includes(normalizedQuery) ||
      movie.synopsis.toLowerCase().includes(normalizedQuery) ||
      genreMatch
    );
  });
};
