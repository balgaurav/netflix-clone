export type AppView = "home" | "login" | "signup" | "browse";

export type Genre =
  | "Action"
  | "Sci-Fi"
  | "Drama"
  | "Thriller"
  | "Comedy"
  | "Documentary"
  | "Animation";

export interface Movie {
  id: string;
  title: string;
  year: number;
  maturityRating: string;
  duration: string;
  genres: Genre[];
  synopsis: string;
  cast: string[];
  accent: string;
  image: string;
  logo: string;
  preview: string;
  match: number;
  featured?: boolean;
}

export interface MovieRow {
  id: string;
  title: string;
  description: string;
  movies: Movie[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  plan: "Basic" | "Standard" | "Premium";
}

export interface AuthFormState {
  email: string;
  password: string;
  fullName?: string;
}
