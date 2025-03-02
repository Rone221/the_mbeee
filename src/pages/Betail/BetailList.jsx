import { useEffect, useState } from "react";
import { getAllBetails } from "../../api/betailService";
import BetailCard from "../../components/BetailCard";

const BetailList = () => {
  const [betails, setBetails] = useState([]); // Déclare un tableau vide par défaut
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBetails = async () => {
      try {
        const data = await getAllBetails(); // Appel API
        console.log("✅ Bétails récupérés :", data);

        if (Array.isArray(data)) {
          setBetails(data);
          console.log("📦 Bétails envoyés à BetailCard :", data); // Ajout ici
        } else {
          setError("Données incorrectes reçues du serveur.");
        }
      } catch (error) {
        console.error("❌ Erreur lors du chargement des bétails :", error);
        setError("Impossible de charger les bétails.");
      } finally {
        setLoading(false); // Assurer que le chargement se termine toujours
      }
    };

    fetchBetails();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Liste des Bétails</h2>

      {loading ? (
        <p className="text-center text-gray-500">Chargement en cours...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : betails.length === 0 ? (
        <p className="text-center text-gray-500">Aucun bétail disponible.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {betails.map((betail) => (
            <BetailCard key={betail._id} betail={betail} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BetailList;
