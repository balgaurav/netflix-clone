import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren
} from "react";
import { catalog } from "../data/catalog";
import type { AuthFormState, UserProfile } from "../types";

interface AuthContextValue {
  user: UserProfile | null;
  login: (form: AuthFormState) => void;
  signup: (form: AuthFormState) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const storageKey = "netflix-clone-user";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (!stored) {
      return;
    }

    setUser(JSON.parse(stored) as UserProfile);
  }, []);

  const persistUser = (profile: UserProfile | null) => {
    setUser(profile);

    if (!profile) {
      window.localStorage.removeItem(storageKey);
      return;
    }

    window.localStorage.setItem(storageKey, JSON.stringify(profile));
  };

  const login = (form: AuthFormState) => {
    const existing =
      catalog.profiles.find((profile) => profile.email === form.email) ?? {
        id: "guest-profile",
        name: form.email.split("@")[0] || "Guest",
        email: form.email,
        avatar: (form.email[0] || "G").toUpperCase(),
        plan: "Standard" as const
      };

    persistUser(existing);
  };

  const signup = (form: AuthFormState) => {
    const profile: UserProfile = {
      id: `profile-${Date.now()}`,
      name: form.fullName || "New Member",
      email: form.email,
      avatar: (form.fullName?.[0] || form.email[0] || "N").toUpperCase(),
      plan: "Premium"
    };

    persistUser(profile);
  };

  const logout = () => {
    persistUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      login,
      signup,
      logout
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
