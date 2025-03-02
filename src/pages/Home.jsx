import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import BetailCard from "../components/BetailCard";
import betailService from "../api/betailService.js";
import Slide from "../components/Slide";

const Home = () => {
  const [betails, setBetails] = useState([]); // Initialisation avec un tableau vide
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBetails = async () => {
      try {
        const response = await betailService.getAllBetails();
        console.log("✅ Réponse API Home :", response); // Vérification du retour

        if (response && response.data && Array.isArray(response.data)) {
          setBetails(response.data);
        } else {
          console.warn("⚠️ Réponse inattendue, mise à jour à un tableau vide.");
          setBetails([]);
        }
      } catch (error) {
        console.error("❌ Erreur lors du chargement des bétails :", error);
        setError("Impossible de charger les bétails.");
      } finally {
        setLoading(false);
      }
    };

    fetchBetails();
  }, []);

  return (
    <div className="bg-[#fefae0] text-[#283618]">
      <Slide />
      <HeroSection />
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Découvrez nos Bétails
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Chargement des bétails...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : betails.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {betails.map((betail) => (
              <BetailCard key={betail._id} betail={betail} />
            ))}
          </div>
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            Aucun bétail disponible pour le moment.
          </p>
        )}
      </div>
    </div>);
};

export default Home;
