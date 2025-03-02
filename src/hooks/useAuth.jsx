import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Vérifie ce chemin !

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;
