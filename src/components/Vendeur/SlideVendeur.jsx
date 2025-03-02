import { motion } from "framer-motion";
import bgImage from "../../../public/betail/bghomeVendeur.jpg"; // ✅ Import correct de l'image

const SlideVendeur = () => {
    return (
        <div
            className="relative w-[100%] h-[689px] flex items-center justify-center bg-cover bg-center "
            style={{ backgroundImage: `url(${bgImage})` }} // ✅ Correction du chemin de l'image
        >
            {/* Overlay pour améliorer la lisibilité */}
            <div className="absolute inset-0 bg-[#283618]/50"></div>

            {/* Contenu */}
            <div className="relative z-10 text-center text-white px-4">
                <motion.h1
                    className="text-5xl font-bold"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    Bienvenue sur <span className="text-[#dda15e]">The Mbeee Vendeur</span>
                </motion.h1>

                <motion.p
                    className="mt-4 text-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    Vendez du bétail en toute simplicité et sécurité !
                </motion.p>

                <motion.a
                    href="/vendeur/dashboard"
                    className="inline-block mt-6 bg-[#606c38] text-white px-6 py-3 rounded-md text-lg hover:bg-[#283618] transition"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    Gérer sa boutique
                </motion.a>
            </div>
        </div>
    );
};

export default SlideVendeur;
