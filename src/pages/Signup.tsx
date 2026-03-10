import { useState } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../hooks/useAuth";
import type { AppView } from "../types";

interface SignupProps {
  onNavigate: (view: AppView) => void;
}

const Signup = ({ onNavigate }: SignupProps) => {
  const { signup } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="page page--auth">
      <Navbar onNavigate={onNavigate} compact />
      <main className="auth-layout">
        <section className="auth-panel">
          <p className="marketing__eyebrow">Step 1 of 1</p>
          <h1>Create your membership.</h1>
          <p className="auth-panel__copy">
            No backend here. This clone stores your profile locally so the UI behaves
            like a real streaming account.
          </p>
          <label>
            Full name
            <input
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </label>
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
            onClick={() => signup({ fullName, email, password })}
          >
            Start Watching
          </button>
          <button className="text-link" onClick={() => onNavigate("login")}>
            Already have an account? Sign in.
          </button>
          <button className="text-link" onClick={() => onNavigate("home")}>
            Back to home
          </button>
        </section>
      </main>
    </div>
  );
};

export default Signup;
