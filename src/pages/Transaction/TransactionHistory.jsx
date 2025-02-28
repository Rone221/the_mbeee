import React, { useState, useEffect } from 'react';
import { getTransactionHistory } from '../../api/transactionService';

const TransactionHistory = ({ clientId }) => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const data = await getTransactionHistory(clientId);
                setTransactions(data);
            } catch (error) {
                console.error("Erreur lors du chargement de l'historique des transactions:", error);
            }
        };
        fetchTransactions();
    }, [clientId]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Historique des transactions</h2>
            <ul className="list-disc pl-6">
                {transactions.map((transaction, index) => (
                    <li key={index} className="border-b py-2">
                        <div>Date: {transaction.date}</div>
                        <div>Montant: {transaction.total} FCFA</div>
                        <div>Status: {transaction.status}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionHistory;
