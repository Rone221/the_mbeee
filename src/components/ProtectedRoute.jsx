import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ roleRequired }) => {
  const { user } = useAuth();

  if (!user || user.role !== roleRequired) {
    console.log("🚫 Accès refusé. Rôle manquant ou utilisateur non connecté.");
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
