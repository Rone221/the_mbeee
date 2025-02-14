const BetailDetail = ({ betail }) => {
  if (!betail) return <p>Sélectionnez un bétail pour voir les détails.</p>;

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-3">Détails du bétail</h2>
      <p>
        <strong>Nom:</strong> {betail.nom}
      </p>
      <p>
        <strong>Espèce:</strong> {betail.espece}
      </p>
      <p>
        <strong>Race:</strong> {betail.race}
      </p>
      <p>
        <strong>Âge:</strong> {betail.age} ans
      </p>
      <p>
        <strong>Poids:</strong> {betail.poids} kg
      </p>
      <p>
        <strong>Prix:</strong> {betail.prix} FCFA
      </p>
      <p>
        <strong>Disponibilité:</strong>{" "}
        {betail.disponibilite ? "Disponible" : "Non disponible"}
      </p>
    </div>
  );
};

export default BetailDetail;
