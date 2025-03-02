import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ roleRequired }) => {
    const { user } = useAuth();
    const location = useLocation();

    // 🔥 Vérifie si l'utilisateur est connecté et a le bon rôle
    if (!user || (roleRequired && user.role !== roleRequired)) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
