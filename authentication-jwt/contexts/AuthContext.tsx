import Router from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { setCookie, parseCookies, destroyCookie } from "nookies";

interface AuthProviderProps {
  children: ReactNode;
}
type User = {
  email: string;
  permissions: string[];
  roles: string[];
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  user: User;
};

export function SignOut() {
  destroyCookie({}, "nextauth.token");
  destroyCookie({}, "nextauth.refreshtoken");
  Router.push("/");
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const cookies = parseCookies();
    const { "nextauth.token": token } = cookies;

    if (token) {
      api
        .get("/me")
        .then((response) => {
          const { email, permissions, roles } = response.data;
          setUser({ email, permissions, roles });
        })
        .catch(() => {
          SignOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("/sessions", {
        email,
        password,
      });
      const { token, refreshToken, permissions, roles } = response.data;

      setCookie({}, "nextauth.token", token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });
      setCookie({}, "nextauth.refreshtoken", refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      setUser({
        email,
        permissions,
        roles,
      });
      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      Router.push("/dashboard");
    } catch (err) {
      alert({ err: err.message });
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}
