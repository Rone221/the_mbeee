import axios from 'axios';

export const convertCartToTransaction = async (clientId) => {
  try {
    const response = await axios.post('/api/transaction', { clientId });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la conversion du panier en transaction:', error);
    throw error;
  }
};

export const getTransactionHistory = async (clientId) => {
  try {
    const response = await axios.get(`/api/transaction/${clientId}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'historique des transactions:', error);
    throw error;
  }
};

// Ajout des fonctionnalités de validation et d'annulation des transactions
export const validateTransaction = async (transactionId) => {
  try {
    const response = await axios.patch(`/api/transaction/${transactionId}/validate`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la validation de la transaction:', error);
    throw error;
  }
};

export const cancelTransaction = async (transactionId) => {
  try {
    const response = await axios.patch(`/api/transaction/${transactionId}/cancel`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'annulation de la transaction:', error);
    throw error;
  }
};
