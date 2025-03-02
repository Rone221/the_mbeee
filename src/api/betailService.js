import axios from "axios";
import api from "./axiosConfig"; 

// 🔹 Définition de l'URL de base de l'API
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001/api/betails";

// 🔹 Fonction pour récupérer le token et le rôle stockés
// 🔹 Fonction pour récupérer le token d'authentification
// 🔹 Fonction pour récupérer et formater correctement le token
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");

  if (!token) {
      console.warn("⚠️ Aucun token trouvé !");
      return {};
  }

  const headers = { Authorization: `Bearer ${token}` };
  console.log("🚀 Headers envoyés :", headers);
  return headers;
};


// 🔹 Vérifier si le token est bien chargé
console.log("🚀 Token récupéré :", localStorage.getItem("token"));
console.log("🚀 Envoi du token dans les headers :", getAuthHeaders());


// 🔹 Vérification des headers envoyés
console.log("🚀 Envoi du token dans les headers :", getAuthHeaders());



// 🟢 **Récupérer tous les bétails disponibles**
// 🟢 **Récupérer tous les bétails**
export const getAllBetails = async () => {
  try {
    console.log("📡 Récupération des bétails...");
    const response = await axios.get(API_URL, { headers: getAuthHeaders() });
    console.log("✅ Bétails récupérés :", response.data);
    return response.data || [];
  } catch (error) {
    console.error("❌ Erreur lors de la récupération des bétails :", error.response?.data || error);
    return [];
  }
};

// 🟢 **Récupérer les bétails du vendeur connecté**
// 🔹 **Récupérer les bétails du vendeur connecté**
export const getBetailsByVendeur = async () => {
  try {
    console.log("📡 Récupération des bétails du vendeur...");
    const headers = getAuthHeaders();
    console.log("🔍 Headers envoyés :", headers);
    
    const response = await api.get("/betails", { headers });
    
    console.log("✅ Bétails du vendeur récupérés :", response.data);
    return response.data || [];
  } catch (error) {
    console.error("❌ Erreur lors de la récupération des bétails du vendeur :", error.response?.data || error);
    return [];
  }
};

// 🟢 **Récupérer un bétail par son ID**
export const getBetailById = async (id) => {
    try {
        console.log(`📡 Récupération du bétail ID : ${id}`);
        const response = await api.get(`/betails/${id}`, { headers: getAuthHeaders() });
        console.log(`✅ Bétail ID ${id} récupéré :`, response.data);
        return response.data;
    } catch (error) {
        console.error(`❌ Erreur lors de la récupération du bétail ID ${id} :`, error.response?.data || error);
        return null;
    }
};

// 🟢 **Ajouter un bétail avec image**
// 🔹 **Ajouter un bétail avec image**
// 🟢 **Ajouter un bétail avec image**
export const createBetail = async (data) => {
  try {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (data[key]) formData.append(key, data[key]);
    });

    console.log("📡 Envoi des données pour ajout de bétail :", Object.fromEntries(formData.entries()));

    const headers = getAuthHeaders();
    headers["Content-Type"] = "multipart/form-data"; 

    const response = await axios.post(API_URL, formData, { headers });

    console.log("✅ Bétail ajouté :", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Erreur lors de l'ajout du bétail :", error.response?.data || error);
    return null;
  }
};




// 🟢 **Modifier un bétail existant avec image**
export const updateBetail = async (id, data) => {
    try {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            if (data[key]) formData.append(key, data[key]); 
        });

        console.log(`📡 Modification du bétail ID ${id} :`, Object.fromEntries(formData.entries()));

        const headers = getAuthHeaders();
        headers["Content-Type"] = "multipart/form-data";

        const response = await api.put(`/betails/${id}`, formData, { headers });

        console.log(`✅ Bétail ID ${id} mis à jour :`, response.data);
        return response.data;
    } catch (error) {
        console.error(`❌ Erreur lors de la mise à jour du bétail ID ${id} :`, error.response?.data || error);
        return null;
    }
};

// 🟢 **Supprimer un bétail existant**
export const deleteBetail = async (id) => {
    try {
        console.log(`🗑️ Suppression du bétail ID : ${id}`);
        await api.delete(`/betails/${id}`, { headers: getAuthHeaders() });
        console.log(`✅ Bétail ID ${id} supprimé`);
        return true;
    } catch (error) {
        console.error(`❌ Erreur lors de la suppression du bétail ID ${id} :`, error.response?.data || error);
        return false;
    }
};

// 🟢 **Récupérer les bétails (utilisé dans plusieurs composants)**
export const fetchBetails = async () => {
    try {
        console.log("📡 Chargement des bétails...");
        const response = await axios.get(API_URL);
        console.log("✅ Bétails récupérés via fetchBetails :", response.data);
        return response.data || [];
    } catch (error) {
        console.error("❌ Erreur lors du chargement des bétails :", error.response?.data || error);
        return [];
    }
};

// 🟢 **Exportation sous forme d'objet pour une utilisation simplifiée**
const betailService = {
    getAllBetails,
    getBetailsByVendeur,
    getBetailById,
    createBetail,
    updateBetail,
    deleteBetail,
};

export default betailService;
