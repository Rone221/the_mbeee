import { useState } from "react";
import { createBetail, updateBetail } from "../../api/betailService";

const BetailForm = ({ initialData = null, onSubmitSuccess }) => {
  const [formData, setFormData] = useState(
    initialData || {
      nom: "",
      espece: "",
      race: "",
      age: "",
      poids: "",
      prix: "",
      disponibilite: true,
    }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData._id) {
        await updateBetail(formData._id, formData);
      } else {
        await createBetail(formData);
      }
      onSubmitSuccess();
    } catch (error) {
      console.error("Erreur lors de lenregistrement du bétail:", error);
    }
  };

  return (
    <form className="p-4 border rounded" onSubmit={handleSubmit}>
      <input
        type="text"
        name="nom"
        value={formData.nom}
        onChange={handleChange}
        placeholder="Nom"
        className="block mb-2 p-2 border rounded"
        required
      />
      <input
        type="text"
        name="espece"
        value={formData.espece}
        onChange={handleChange}
        placeholder="Espèce"
        className="block mb-2 p-2 border rounded"
        required
      />
      <input
        type="text"
        name="race"
        value={formData.race}
        onChange={handleChange}
        placeholder="Race"
        className="block mb-2 p-2 border rounded"
        required
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Âge"
        className="block mb-2 p-2 border rounded"
        required
      />
      <input
        type="number"
        name="poids"
        value={formData.poids}
        onChange={handleChange}
        placeholder="Poids"
        className="block mb-2 p-2 border rounded"
        required
      />
      <input
        type="number"
        name="prix"
        value={formData.prix}
        onChange={handleChange}
        placeholder="Prix"
        className="block mb-2 p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-primary text-white p-2 rounded hover:bg-primary-dark"
      >
        {formData._id ? "Modifier" : "Ajouter"} le bétail
      </button>
    </form>
  );
};

export default BetailForm;
