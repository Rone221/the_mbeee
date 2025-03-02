import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ConnexionDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // 🔥 Ferme le menu si on clique en dehors
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-[#606c38] px-4 py-2 rounded-md relative z-50"
            >
                Connexion
            </button>

            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
                    <button
                        onClick={() => {
                            navigate("/login?role=client");
                            setDropdownOpen(false);
                        }}
                        className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                    >
                        Se connecter en tant que Client
                    </button>
                    <button
                        onClick={() => {
                            navigate("/login?role=vendeur");
                            setDropdownOpen(false);
                        }}
                        className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                    >
                        Se connecter en tant que Vendeur
                    </button>
                </div>
            )}
        </div>
    );
};

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <nav className="bg-[#283618] text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold">🐄 The Mbeee</Link>

                {/* 🔥 Navigation différenciée pour Client et Vendeur */}
                <div className="hidden md:flex space-x-6">
                    {user?.role === "vendeur" ? (
                        <>
                            <Link to="/vendeur">Accueil</Link>
                            <Link to="/vendeur/dashboard">Dashboard</Link>
                            <Link to="/vendeur/ventes">Ventes</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/">Accueil</Link>
                            <Link to="/betails">Nos Bétails</Link>
                            <Link to="/contact">Contact</Link>
                        </>
                    )}
                </div>

                {/* 🔥 Bouton Connexion / Déconnexion */}
                <div className="relative">
                    {user ? (
                        <button
                            onClick={logout}
                            className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                        >
                            Déconnexion
                        </button>
                    ) : (
                        <ConnexionDropdown />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
