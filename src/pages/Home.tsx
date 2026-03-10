import type { AppView } from "../types";

interface HomeProps {
  onNavigate: (view: AppView) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  return (
    <main>
      <h1>Netflix Clone</h1>
      <button onClick={() => onNavigate("login")}>Sign In</button>
      <button onClick={() => onNavigate("signup")}>Get Started</button>
    </main>
  );
};

export default Home;
