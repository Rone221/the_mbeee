import React from 'react';
import { convertCartToTransaction } from '../../api/transactionService';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ clientId }) => {
    const navigate = useNavigate();

    const handleCheckout = async () => {
        try {
            await convertCartToTransaction(clientId);
            alert('Transaction effectuée avec succès');
            navigate('/transaction/history');
        } catch (error) {
            console.error('Erreur lors de la validation de la commande:', error);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Validation du panier</h2>
            <button
                className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
                onClick={handleCheckout}
            >
                Confirmer la commande
            </button>
        </div>
    );
};

export default Checkout;
