import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const HeroSection = () => {
    return (
        <section className="bg-[#fefae0]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-16">
                {/* Contenu Texte (Gauche) */}
                <div className="md:w-1/2 text-left">
                    <motion.h1
                        className="text-5xl font-bold text-[#283618]"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Achetez et vendez du bétail facilement !
                    </motion.h1>

                    <motion.p
                        className="mt-4 text-lg text-[#606c38]"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        Trouvez des moutons, vaches et chèvres en toute simplicité.
                    </motion.p>

                    <motion.div
                        className="mt-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <Link
                            to="/betails"
                            className="bg-[#606c38] text-white px-6 py-3 rounded-md text-lg hover:bg-[#283618] transition"
                        >
                            Explorer les bétails
                        </Link>
                    </motion.div>
                </div>

                {/* Image (Droite) */}
                <motion.div
                    className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <img
                        src="./public/betail/hero-image.png" // Remplace par ton image
                        alt="Bétails en vente"
                        className="w-full max-w-md rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
        </section>

    );
};

export default HeroSection;
