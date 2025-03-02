import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 Récupérer le rôle depuis l'URL
  const searchParams = new URLSearchParams(location.search);
  const roleFromURL = searchParams.get("role") || "client";

  const [userData, setUserData] = useState({
    nomComplet: "",
    email: "",
    password: "",
    role: roleFromURL, // 🎯 Prérenseigner le rôle depuis l'URL
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // 🔥 Mise à jour du rôle si l'URL change après le premier rendu
  useEffect(() => {
    setUserData((prev) => ({ ...prev, role: roleFromURL }));
  }, [roleFromURL]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      console.log("📩 Inscription avec :", userData);

      // 🔥 Envoi des données au serveur
      const response = await axios.post("http://localhost:5001/api/users/register", {
        nomComplet: userData.nomComplet,
        email: userData.email.toLowerCase().trim(),
        password: userData.password,
        role: userData.role,
      });

      setSuccess("Compte créé avec succès !");
      console.log("✅ Inscription réussie :", response.data);

      // 🔥 Connexion automatique après l'inscription
      const loginResponse = await axios.post("http://localhost:5001/api/users/login", {
        email: userData.email.toLowerCase().trim(),
        password: userData.password,
      });

      login(loginResponse.data.user);
      navigate(userData.role === "vendeur" ? "/vendeur/mes-betails" : "/");
    } catch (err) {
      console.error("❌ Erreur d'inscription ou de connexion :", err.response?.data?.message);
      setError(err.response?.data?.message || "Erreur lors de l'inscription. Vérifiez vos informations.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#fefae0]">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-[#283618] mb-4">Inscription</h2>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#606c38] font-semibold">Nom complet</label>
            <input
              type="text"
              name="nomComplet"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-gray-100"
              value={userData.nomComplet}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#606c38] font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-gray-100"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#606c38] font-semibold">Mot de passe</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-gray-100"
              value={userData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#606c38] font-semibold">Je suis :</label>
            <select
              name="role"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-gray-100"
              value={userData.role}
              onChange={handleChange}
              required
            >
              <option value="client">Client</option>
              <option value="vendeur">Vendeur</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-[#bc6c25] text-white py-2 rounded-lg hover:bg-[#dda15e] transition">
            S'inscrire
          </button>
        </form>

        <p className="mt-4 text-center text-[#606c38]">
          Déjà un compte ? <Link to="/login" className="text-[#bc6c25] font-bold hover:underline">Se connecter</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
