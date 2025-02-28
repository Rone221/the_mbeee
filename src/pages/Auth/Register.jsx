import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/userService";

function Register() {
  const [nomComplet, setNomComplet] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ nomComplet, email, password, role });
      navigate("/login");
    } catch (error) {
      console.error(
        "Erreur d'inscription",
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
        type="text"
        placeholder="Nom complet"
        value={nomComplet}
        onChange={(e) => setNomComplet(e.target.value)}
        required
        className="w-full p-3 border border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A86FF]"
      />
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
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
        className="w-full p-3 border border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A86FF]"
      >
        <option value="client">Client</option>
        <option value="vendeur">Vendeur</option>
      </select>
      <button
        type="submit"
        className="w-full p-3 bg-[#4CAF50] text-white rounded-md hover:bg-[#6B4226] transition duration-300"
      >
        Sinscrire
      </button>
    </form>
  );
}

export default Register;
