import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import BetailCardVendeur from "../../components/Vendeur/BetailCardVendeur";

const DashboardVendeur = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [betails, setBetails] = useState([]);

    // Vérifie si l'utilisateur est bien un vendeur, sinon redirige
    useEffect(() => {
        if (!user || user.role !== "vendeur") {
            navigate("/");
        }
    }, [user, navigate]);

    // Charge les bétails appartenant au vendeur
    useEffect(() => {
        const fetchBetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/betails?vendeur=${user.id}`);
                setBetails(response.data);
            } catch (err) {
                console.error("❌ Erreur lors du chargement des bétails :", err);
            }
        };

        if (user?.id) {
            fetchBetails();
        }
    }, [user]);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-[#283618] mb-6">Gestion des Bétails</h1>

            {/* Bouton Ajouter un bétail */}
            <div className="flex justify-end mb-6">
                <button
                    onClick={() => navigate("/vendeur/betails/ajouter")}
                    className="bg-[#606c38] text-white px-4 py-2 rounded-lg hover:bg-[#283618] transition duration-300"
                >
                    Ajouter un Bétail
                </button>
            </div>

            {/* Liste des bétails du vendeur */}
            {betails.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {betails.map((betail) => (
                        <BetailCardVendeur key={betail.id} betail={betail} setBetails={setBetails} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">Aucun bétail trouvé.</p>
            )}
        </div>
    );
};

export default DashboardVendeur;
