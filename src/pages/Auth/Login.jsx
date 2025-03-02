import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Login = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log("🔄 Redirection automatique car utilisateur déjà connecté :", user);
      if (user.role) {
        navigate(user.role === "vendeur" ? "/vendeur" : "/");
      } else {
        console.warn("⚠️ L'utilisateur est connecté mais son rôle est manquant !");
      }
    }
  }, [user, navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      console.log("📩 Tentative de connexion avec :", email, password);

      const response = await axios.post("http://localhost:5001/api/users/login", {
        email: email.toLowerCase().trim(),
        password,
      });

      console.log("✅ Réponse reçue de l'API :", response.data);

      if (!response.data.user || !response.data.user.role) {
        console.warn("⚠️ Le rôle de l'utilisateur est manquant dans la réponse !");
        throw new Error("Problème lors de la récupération du rôle utilisateur.");
      }

      // 🔥 Stocker l'utilisateur avec son rôle
      await login(response.data);

      console.log("🚀 Utilisateur stocké après connexion :", response.data.user);

      setTimeout(() => {
        console.log("🔄 Vérification après stockage :", localStorage.getItem("user"));
        navigate(response.data.user.role === "vendeur" ? "/vendeur" : "/");
      }, 300);

    } catch (err) {
      console.error("❌ Erreur de connexion :", err.message);
      setError(err.response?.data?.message || "Identifiants incorrects !");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#fefae0]">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-[#283618] mb-4">Connexion</h2>

        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#606c38] font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-gray-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#606c38] font-semibold">Mot de passe</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-gray-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#bc6c25] text-white py-2 rounded-lg hover:bg-[#dda15e] transition"
            disabled={loading}
          >
            {loading ? "Connexion en cours..." : "Se connecter"}
          </button>
        </form>

        <p className="mt-4 text-center text-[#606c38]">
          Pas encore de compte ?{" "}
          <Link to="/register" className="text-[#bc6c25] font-bold hover:underline">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
