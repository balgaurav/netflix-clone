import { useState } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../hooks/useAuth";
import type { AppView } from "../types";

interface LoginProps {
  onNavigate: (view: AppView) => void;
}

const Login = ({ onNavigate }: LoginProps) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("ava@streambox.dev");
  const [password, setPassword] = useState("password123");

  return (
    <div className="page page--auth">
      <Navbar onNavigate={onNavigate} compact />
      <main className="auth-layout">
        <section className="auth-panel">
          <p className="marketing__eyebrow">Welcome back</p>
          <h1>Sign in to keep watching.</h1>
          <p className="auth-panel__copy">
            Use the seeded demo account or enter any email to create a local session.
          </p>
          <label>
            Email
            <input value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <label>
            Password
            <input
              value={password}
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <button
            className="solid-button solid-button--large"
            onClick={() => login({ email, password })}
          >
            Continue
          </button>
          <button className="text-link" onClick={() => onNavigate("signup")}>
            Need an account? Start your membership.
          </button>
          <button className="text-link" onClick={() => onNavigate("home")}>
            Back to home
          </button>
        </section>
      </main>
    </div>
  );
};

export default Login;
