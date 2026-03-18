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
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=1200&fit=crop",
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
      "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800&h=1200&fit=crop",
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
      "https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=800&h=1200&fit=crop",
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
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&h=1200&fit=crop",
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
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=1200&fit=crop",
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
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&h=1200&fit=crop",
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
