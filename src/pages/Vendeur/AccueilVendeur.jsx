import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SlideVendeur from "../../components/Vendeur/SlideVendeur";

const AccueilVendeur = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#fefae0] text-[#283618]">
            {/* 🔥 Slide de bienvenue */}
            <SlideVendeur />

            {/* 🔥 Section de navigation (Inspirée de HeroSection) */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-16 gap-6">
                {/* Card Gérer Bétails */}
                <motion.div
                    className="md:w-1/2 bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-xl font-bold mb-4">Gérer vos bétails</h2>
                    <p>Ajoutez, modifiez et supprimez vos annonces.</p>

                    <motion.img
                        src="/betail/gestion-betail.jpg"
                        alt="Gérer les bétails"
                        className="w-full max-w-sm rounded-lg shadow-lg my-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                    />

                    <motion.button
                        onClick={() => navigate("/vendeur/dashboard")}
                        className="mt-4 bg-[#606c38] text-white px-6 py-3 rounded-lg hover:bg-[#283618] transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Accéder au tableau de bord
                    </motion.button>
                </motion.div>

                {/* Card Voir Ventes */}
                <motion.div
                    className="md:w-1/2 bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-xl font-bold mb-4">Voir vos ventes</h2>
                    <p>Consultez l’historique de vos transactions.</p>

                    <motion.img
                        src="/betail/vente.jpeg" // Remplace par une image adaptée
                        alt="Historique des ventes"
                        className="w-full max-w-sm rounded-lg shadow-lg my-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                    />

                    <motion.button
                        onClick={() => navigate("/vendeur/ventes")}
                        className="mt-4 bg-[#bc6c25] text-white px-6 py-3 rounded-lg hover:bg-[#dda15e] transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Voir les ventes
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default AccueilVendeur;
