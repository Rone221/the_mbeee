import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BetailList from "./pages/Betail/BetailList";
import BetailDetail from "./pages/Betail/BetailDetail";
import AjouterBetail from "./pages/Betail/AjouterBetail";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Contact from "./pages/Contact";
import AccueilVendeur from "./pages/Vendeur/AccueilVendeur";
import DashboardVendeur from "./pages/Vendeur/DashboardVendeur";
// import VenteVendeur from "./pages/Vendeur/VenteVendeur";
import ProtectedRoute from "./utils/ProtectedRoute"; // 🔥 Sécurisation des routes
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* Routes Client */}
          <Route path="/" element={<Home />} />
          <Route path="/betails" element={<BetailList />} />
          <Route path="/betails/:id" element={<BetailDetail />} />
          <Route path="/contact" element={<Contact />} />

          {/* Authentification */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Routes Vendeur (Protégées) */}
          <Route element={<ProtectedRoute roleRequired="vendeur" />}>
            <Route path="/vendeur" element={<AccueilVendeur />} />
            <Route path="/vendeur/dashboard" element={<DashboardVendeur />} />
            {/* <Route path="/vendeur/ventes" element={<VenteVendeur />} /> */}
            <Route path="/vendeur/betails/ajouter" element={<AjouterBetail />} />
            <Route path="/vendeur/betails/:id/edit" element={<AjouterBetail editMode />} />
          </Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
};

export default App;
