import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";
import Browse from "./pages/Browse";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import type { AppView } from "./types";

const AppShell = () => {
  const { user } = useAuth();
  const [view, setView] = useState<AppView>(user ? "browse" : "home");

  const goTo = (nextView: AppView) => {
    setView(nextView);
  };

  if (user || view === "browse") {
    return <Browse onNavigate={goTo} />;
  }

  if (view === "login") {
    return <Login onNavigate={goTo} />;
  }

  if (view === "signup") {
    return <Signup onNavigate={goTo} />;
  }

  return <Home onNavigate={goTo} />;
};

const App = () => {
  return (
    <AuthProvider>
      <AppShell />
    </AuthProvider>
  );
};

export default App;
