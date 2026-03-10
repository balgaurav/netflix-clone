import { useState } from "react";
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
    <main>
      <h1>Create Account</h1>
      <input
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
      />
      <input value={email} onChange={(event) => setEmail(event.target.value)} />
      <input
        value={password}
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={() => signup({ fullName, email, password })}>
        Start Watching
      </button>
      <button onClick={() => onNavigate("home")}>Back</button>
    </main>
  );
};

export default Signup;
