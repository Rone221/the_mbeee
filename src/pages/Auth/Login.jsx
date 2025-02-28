import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/userService";
import useAuth from "../../hooks/useAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login: authenticate } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      authenticate(response.data.user, response.data.token);
      navigate("/home");
    } catch (error) {
      console.error(
        "Erreur de connexion",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-[#FAF3E0] shadow-md rounded-lg space-y-4"
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-3 border border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A86FF]"
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-3 border border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A86FF]"
      />
      <button
        type="submit"
        className="w-full p-3 bg-[#4CAF50] text-white rounded-md hover:bg-[#6B4226] transition duration-300"
      >
        Connexion
      </button>
    </form>
  );
}

export default Login;
