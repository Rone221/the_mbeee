import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (!parsedUser.role) {
          console.warn("⚠️ Alerte : L'utilisateur stocké n'a pas de rôle !");
        } else {
          console.log("✅ Utilisateur récupéré après rafraîchissement :", parsedUser);
        }
        setUser(parsedUser);
      } catch (error) {
        console.error("❌ Erreur lors du parsing de l'utilisateur depuis le localStorage :", error);
      }
    }
    setLoading(false);
  }, []);

  const login = async ({ token, user }) => {
    try {
      console.log("🔐 Stockage des informations de connexion :", user);

      if (!user.role) {
        console.warn("⚠️ Le rôle de l'utilisateur est absent !");
        throw new Error("Impossible de récupérer le rôle.");
      }

      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      console.log("✅ Utilisateur et token stockés avec succès !");
    } catch (err) {
      console.error("❌ Erreur lors du stockage des données utilisateur :", err.message);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
