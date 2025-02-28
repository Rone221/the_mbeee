import React, { useState, useEffect } from 'react';
import { getCart, removeItemFromCart, updateCart, clearCart } from '../../api/cartService';
import { useNavigate } from 'react-router-dom';

const Cart = ({ clientId }) => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadCart = async () => {
            try {
                const data = await getCart(clientId);
                console.log('Données du panier:', data);
                setCart(data);
            } catch (error) {
                console.error('Erreur lors du chargement du panier:', error);
                alert('Erreur de chargement du panier : ' + error.message);
            }
        };
        loadCart();
    }, [clientId]);

    const loadCart = async () => {
        try {
            const data = await getCart(clientId);
            setCart(data);
        } catch (error) {
            console.error('Erreur lors du chargement du panier:', error);
        }
    };

    const handleRemove = async (betailId) => {
        try {
            await removeItemFromCart(clientId, betailId);
            loadCart();
        } catch (error) {
            console.error('Erreur lors de la suppression:', error);
        }
    };

    const handleClear = async () => {
        try {
            await clearCart(clientId);
            loadCart();
        } catch (error) {
            console.error('Erreur lors du vidage du panier:', error);
        }
    };

    const handleQuantityChange = async (betailId, quantity) => {
        const updatedCart = cart.map(item =>
            item.betailId === betailId ? { ...item, quantity } : item
        );
        try {
            await updateCart(clientId, updatedCart);
            loadCart();
        } catch (error) {
            console.error('Erreur lors de la mise à jour des quantités:', error);
        }
    };

    const goToCheckout = () => {
        navigate('/cart/checkout');
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Mon Panier</h2>
            <ul className="mb-4">
                {cart.map(item => (
                    <li key={item.betailId} className="border-b py-2 flex justify-between items-center">
                        <div>{item.name} - {item.quantity}</div>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                value={item.quantity}
                                min="1"
                                className="border p-1 w-16"
                                onChange={(e) => handleQuantityChange(item.betailId, parseInt(e.target.value))}
                            />
                            <button
                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                onClick={() => handleRemove(item.betailId)}
                            >
                                Supprimer
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
                onClick={handleClear}
            >
                Vider le panier
            </button>
            <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={goToCheckout}
            >
                Passer à la caisse
            </button>
        </div>
    );
};

export default Cart;
