import { useAuth } from "../hooks/useAuth";
import type { AppView } from "../types";

interface NavbarProps {
  onNavigate: (view: AppView) => void;
  onSearchChange?: (value: string) => void;
  searchValue?: string;
  compact?: boolean;
}

const Navbar = ({
  onNavigate,
  onSearchChange,
  searchValue = "",
  compact = false
}: NavbarProps) => {
  const { user, logout } = useAuth();

  const handleBrowse = () => {
    onNavigate(user ? "browse" : "signup");
  };

  return (
    <header className={`navbar ${compact ? "navbar--compact" : ""}`}>
      <button className="brand" onClick={() => onNavigate("home")}>
        NETFLIX
      </button>

      <nav className="navbar__actions">
        {user && onSearchChange ? (
          <input
            aria-label="Search titles"
            className="navbar__search"
            placeholder="Titles, genres, people"
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        ) : null}

        <button className="ghost-button" onClick={handleBrowse}>
          Browse
        </button>

        {user ? (
          <>
            <span className="profile-badge">{user.avatar}</span>
            <button className="solid-button" onClick={logout}>
              Sign Out
            </button>
          </>
        ) : (
          <button className="solid-button" onClick={() => onNavigate("login")}>
            Sign In
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
