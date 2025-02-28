import axios from "axios";

const API_URL = "http://localhost:3000/api/users";
// Inscription d'un nouvel utilisateur
export const register = (userData) =>
  axios.post(`${API_URL}/register`, userData);

// Connexion d'un utilisateur
export const login = (userData) => axios.post(`${API_URL}/login`, userData);

// Récupération du profil utilisateur
export const getProfile = (token) =>
  axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
