import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const AjouterBetail = () => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        nom: "",
        espece: "mouton",
        race: "",
        age: "",
        poids: "",
        prix: "",
        disponibilite: true,
        image: null,
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            if (formData[key]) data.append(key, formData[key]);
        });

        try {
            const response = await axios.post("http://localhost:5001/api/betails", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setMessage("✅ Bétail ajouté avec succès !");
            setFormData({ nom: "", espece: "mouton", race: "", age: "", poids: "", prix: "", disponibilite: true, image: null });
        } catch (error) {
            console.error("❌ Erreur lors de l'ajout :", error);
            setMessage("❌ Erreur lors de l'ajout du bétail.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Ajouter un Bétail</h2>

            {message && <p>{message}</p>}

            <form onSubmit={handleSubmit}>
                <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
                <select name="espece" value={formData.espece} onChange={handleChange}>
                    <option value="mouton">Mouton</option>
                    <option value="vache">Vache</option>
                    <option value="chèvre">Chèvre</option>
                </select>
                <input type="text" name="race" value={formData.race} onChange={handleChange} required />
                <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                <input type="number" name="poids" value={formData.poids} onChange={handleChange} required />
                <input type="number" name="prix" value={formData.prix} onChange={handleChange} required />
                <input type="checkbox" name="disponibilite" checked={formData.disponibilite} onChange={handleChange} />
                <input type="file" accept="image/*" onChange={handleFileChange} />

                <button type="submit" disabled={loading}>
                    {loading ? "Ajout en cours..." : "Ajouter"}
                </button>
            </form>
        </div>
    );
};

export default AjouterBetail;
