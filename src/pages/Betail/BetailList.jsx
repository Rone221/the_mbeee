import { useEffect, useState } from "react";
import { getAllBetails } from "../../api/betailService";

const BetailList = () => {
  const [betails, setBetails] = useState([]);

  useEffect(() => {
    const fetchBetails = async () => {
      try {
        const response = await getAllBetails();
        setBetails(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des bétails:", error);
      }
    };
    fetchBetails();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Liste des bétails</h1>
      <ul>
        {betails.map((betail) => (
          <li key={betail._id} className="border p-3 mb-2 rounded">
            {betail.nom} - {betail.espece} - {betail.prix} FCFA
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BetailList;
