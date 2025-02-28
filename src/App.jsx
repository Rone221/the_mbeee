import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
//import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Cart/Checkout.jsx";
import TransactionHistory from "./pages/Transaction/TransactionHistory.jsx";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/checkout" element={<Checkout />} />
          <Route path="/transaction/history" element={<TransactionHistory />} />


          <Route path="*" element={<div>Page non trouvée</div>} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
