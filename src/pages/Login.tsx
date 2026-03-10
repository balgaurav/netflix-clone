import { useState } from "react";
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
    <main>
      <h1>Sign In</h1>
      <input value={email} onChange={(event) => setEmail(event.target.value)} />
      <input
        value={password}
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={() => login({ email, password })}>Continue</button>
      <button onClick={() => onNavigate("home")}>Back</button>
    </main>
  );
};

export default Login;
