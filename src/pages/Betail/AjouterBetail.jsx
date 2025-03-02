import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const AjouterBetail = () => {
    const { user } = useAuth(); // 🔹 Récupération de l'utilisateur connecté
    const [formData, setFormData] = useState({
        nom: "",
        espece: "mouton", // Par défaut
        race: "",
        age: "",
        poids: "",
        prix: "",
        disponibilite: true,
        image: null,
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // 🔹 Gestion des inputs texte & nombres
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    // 🔹 Gestion de l'upload d'image
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    // 🔥 Soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        // 🛑 Vérification si l'utilisateur est bien connecté
        if (!user || !user._id) {
            setMessage("⚠️ Erreur : utilisateur non identifié. Veuillez vous reconnecter.");
            console.error("❌ Aucun utilisateur connecté.");
            setLoading(false);
            return;
        }

        // 🔹 Création du FormData
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            if (formData[key]) data.append(key, formData[key]);
        });

        // 🔥 Ajout du vendeur ID
        data.append("vendeur", user._id);

        // 🔹 Récupération du token d'authentification
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("❌ Aucun token trouvé !");
            setMessage("⚠️ Erreur d'authentification. Veuillez vous reconnecter.");
            setLoading(false);
            return;
        }

        try {
            console.log("📡 Envoi des données avec token :", token);

            const response = await axios.post(
                "http://localhost:5001/api/betails",
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": `Bearer ${token}`, // ✅ Ajout du token ici
                    }
                }
            );

            console.log("✅ Bétail ajouté :", response.data);
            setMessage("✅ Bétail ajouté avec succès !");
            setFormData({ nom: "", espece: "mouton", race: "", age: "", poids: "", prix: "", disponibilite: true, image: null });

        } catch (error) {
            console.error("❌ Erreur lors de l'ajout :", error.response?.data || error);
            setMessage("❌ Erreur lors de l'ajout du bétail.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-[#fefae0] p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-3xl font-bold text-[#283618] mb-6 text-center">Ajouter un Bétail</h2>

            {message && <p className="text-center text-[#bc6c25]">{message}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-[#606c38] font-semibold">Nom</label>
                    <input type="text" name="nom" value={formData.nom} onChange={handleChange} className="w-full p-2 border border-[#606c38] rounded-md" required />
                </div>

                <div>
                    <label className="block text-[#606c38] font-semibold">Espèce</label>
                    <select name="espece" value={formData.espece} onChange={handleChange} className="w-full p-2 border border-[#606c38] rounded-md">
                        <option value="mouton">Mouton</option>
                        <option value="vache">Vache</option>
                        <option value="chèvre">Chèvre</option>
                    </select>
                </div>

                <div>
                    <label className="block text-[#606c38] font-semibold">Race</label>
                    <input type="text" name="race" value={formData.race} onChange={handleChange} className="w-full p-2 border border-[#606c38] rounded-md" required />
                </div>

                <div>
                    <label className="block text-[#606c38] font-semibold">Âge (années)</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full p-2 border border-[#606c38] rounded-md" required />
                </div>

                <div>
                    <label className="block text-[#606c38] font-semibold">Poids (kg)</label>
                    <input type="number" name="poids" value={formData.poids} onChange={handleChange} className="w-full p-2 border border-[#606c38] rounded-md" required />
                </div>

                <div>
                    <label className="block text-[#606c38] font-semibold">Prix (FCFA)</label>
                    <input type="number" name="prix" value={formData.prix} onChange={handleChange} className="w-full p-2 border border-[#606c38] rounded-md" required />
                </div>

                <div className="flex items-center space-x-2">
                    <input type="checkbox" name="disponibilite" checked={formData.disponibilite} onChange={handleChange} className="w-5 h-5" />
                    <label className="text-[#606c38] font-semibold">Disponible</label>
                </div>

                <div>
                    <label className="block text-[#606c38] font-semibold">Image</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-2 border border-[#606c38] rounded-md" />
                </div>

                <button type="submit" className="w-full bg-[#bc6c25] text-white py-3 rounded-md font-semibold hover:bg-[#dda15e]" disabled={loading}>
                    {loading ? "Ajout en cours..." : "Ajouter"}
                </button>
            </form>
        </div>
    );
};

export default AjouterBetail;
