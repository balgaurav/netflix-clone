import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import type { AppView } from "../types";

interface HomeProps {
  onNavigate: (view: AppView) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  return (
    <div className="page page--home">
      <div className="hero-shell">
        <Navbar onNavigate={onNavigate} />
        <main className="marketing">
          <section className="marketing__hero">
            <div className="marketing__copy">
              <p className="marketing__eyebrow">Unlimited films, series, and more</p>
              <h1>All of Netflix energy, rebuilt as a React + TypeScript clone.</h1>
              <p className="marketing__lede">
                Browse polished rows, open title details, search the catalog, and move
                through a complete streaming-style interface without leaving the page.
              </p>
              <div className="marketing__actions">
                <button
                  className="solid-button solid-button--large"
                  onClick={() => onNavigate("signup")}
                >
                  Get Started
                </button>
                <button
                  className="ghost-button ghost-button--large"
                  onClick={() => onNavigate("login")}
                >
                  Sign In
                </button>
              </div>
            </div>

            <div className="marketing__panel">
              <div className="marketing__card">
                <span className="pill">Now trending</span>
                <h2>Atlas 9</h2>
                <p>A cinematic sci-fi thriller with a full-screen hero treatment.</p>
              </div>
              <div className="marketing__card marketing__card--offset">
                <span className="pill pill--muted">New</span>
                <h2>Velvet Heist</h2>
                <p>Streaming shelves, gradients, and responsive details built from scratch.</p>
              </div>
            </div>
          </section>

          <section className="feature-grid">
            <article>
              <h3>Smart browse flow</h3>
              <p>Hero section, horizontal rows, title modal, and quick search.</p>
            </article>
            <article>
              <h3>Mock auth state</h3>
              <p>Local sign in and sign up flows backed by provider state.</p>
            </article>
            <article>
              <h3>Intentional styling</h3>
              <p>Dark cinematic gradients, sharp typography, and responsive spacing.</p>
            </article>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
