import type { Movie, MovieRow, UserProfile } from "../types";

const profiles: UserProfile[] = [
  {
    id: "p1",
    name: "Ava",
    email: "ava@streambox.dev",
    avatar: "A",
    plan: "Premium"
  },
  {
    id: "p2",
    name: "Kai",
    email: "kai@streambox.dev",
    avatar: "K",
    plan: "Standard"
  }
];

const movies: Movie[] = [
  {
    id: "atlas-9",
    title: "Atlas 9",
    year: 2026,
    maturityRating: "16+",
    duration: "2h 08m",
    genres: ["Sci-Fi", "Thriller"],
    synopsis:
      "A defiant orbital mechanic uncovers a buried signal that points to a missing colony ship and a cover-up back on Earth.",
    cast: ["Nia Sol", "Theo March", "Mina Vale"],
    accent: "#6e7dff",
    image:
      "linear-gradient(135deg, rgba(3,7,18,0.8), rgba(110,125,255,0.35)), radial-gradient(circle at top, #4f46e5 0%, #0b1120 65%)",
    logo: "ATLAS 9",
    preview: "Signal found. Orbit compromised. Trust no one below.",
    match: 98,
    featured: true
  },
  {
    id: "velvet-heist",
    title: "Velvet Heist",
    year: 2025,
    maturityRating: "13+",
    duration: "1h 49m",
    genres: ["Action", "Comedy"],
    synopsis:
      "An ex-getaway driver assembles a crew of washed-up magicians to rob a casino where every camera knows their faces.",
    cast: ["Jules Hart", "Parker Sun", "Lena Cruz"],
    accent: "#ff7b54",
    image:
      "linear-gradient(135deg, rgba(31,12,3,0.8), rgba(255,123,84,0.35)), radial-gradient(circle at top, #f97316 0%, #1c0f0a 72%)",
    logo: "VELVET HEIST",
    preview: "One last score. Zero clean exits.",
    match: 95
  },
  {
    id: "northwind-files",
    title: "Northwind Files",
    year: 2024,
    maturityRating: "16+",
    duration: "8 Episodes",
    genres: ["Drama", "Thriller"],
    synopsis:
      "A climate scientist leaks sealed recordings from an Arctic station and sparks a transnational conspiracy hunt.",
    cast: ["Rina Lo", "Carter Pryce", "Mads Venn"],
    accent: "#66d9e8",
    image:
      "linear-gradient(135deg, rgba(5,20,32,0.82), rgba(102,217,232,0.32)), radial-gradient(circle at top, #0891b2 0%, #071924 72%)",
    logo: "NORTHWIND FILES",
    preview: "What thawed should have stayed buried.",
    match: 97
  },
  {
    id: "midnight-district",
    title: "Midnight District",
    year: 2026,
    maturityRating: "18+",
    duration: "10 Episodes",
    genres: ["Drama", "Action"],
    synopsis:
      "A rookie prosecutor and a nightclub fixer forge a dangerous alliance after a blackout exposes the city's parallel economy.",
    cast: ["Iris Quinn", "Dante Cole", "Mara Reeve"],
    accent: "#ef4444",
    image:
      "linear-gradient(135deg, rgba(32,5,5,0.82), rgba(239,68,68,0.32)), radial-gradient(circle at top, #b91c1c 0%, #150606 72%)",
    logo: "MIDNIGHT DISTRICT",
    preview: "Every debt is due by sunrise.",
    match: 94
  },
  {
    id: "paper-moons",
    title: "Paper Moons",
    year: 2023,
    maturityRating: "7+",
    duration: "1h 34m",
    genres: ["Animation", "Comedy"],
    synopsis:
      "Two siblings build a cardboard spaceship and discover their hand-drawn planets are appearing in the night sky.",
    cast: ["Milo Reed", "June Rhee", "Amara Fox"],
    accent: "#facc15",
    image:
      "linear-gradient(135deg, rgba(37,24,3,0.82), rgba(250,204,21,0.32)), radial-gradient(circle at top, #eab308 0%, #181102 72%)",
    logo: "PAPER MOONS",
    preview: "Imagination has escape velocity.",
    match: 92
  },
  {
    id: "last-signal",
    title: "Last Signal",
    year: 2026,
    maturityRating: "13+",
    duration: "1h 58m",
    genres: ["Sci-Fi", "Drama"],
    synopsis:
      "During a global communications collapse, a radio archivist searches abandoned frequencies for her vanished brother.",
    cast: ["Sara Voss", "Elian Frost", "Noah Flint"],
    accent: "#22c55e",
    image:
      "linear-gradient(135deg, rgba(4,22,9,0.82), rgba(34,197,94,0.32)), radial-gradient(circle at top, #16a34a 0%, #061308 72%)",
    logo: "LAST SIGNAL",
    preview: "When everything goes dark, listen harder.",
    match: 93
  }
];

const rows: MovieRow[] = [
  {
    id: "trending",
    title: "Trending Now",
    description: "Fresh releases pulling big watch time tonight.",
    movies: [movies[0], movies[1], movies[3], movies[5]]
  },
  {
    id: "mind-bending",
    title: "Mind-Bending Sci-Fi",
    description: "High-concept stories with beautiful chaos.",
    movies: [movies[0], movies[2], movies[5]]
  },
  {
    id: "binge-worthy",
    title: "Binge-Worthy Series",
    description: "Long-form drama built for one more episode.",
    movies: [movies[2], movies[3], movies[5]]
  },
  {
    id: "family-night",
    title: "Family Night Picks",
    description: "Lighter, warmer titles for a shared screen.",
    movies: [movies[4], movies[1], movies[5]]
  }
];

export const catalog = {
  movies,
  rows,
  profiles
};
