import betailService from "../../api/betailService";

const BetailCardVendeur = ({ betail, setBetails }) => {
    const handleDelete = async () => {
        if (window.confirm("Voulez-vous vraiment supprimer ce bétail ?")) {
            try {
                await betailService.deleteBetail(betail.id);
                setBetails((prev) => prev.filter((b) => b.id !== betail.id));
            } catch (err) {
                console.error("Erreur lors de la suppression :", err);
            }
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{betail.nom}</h3>
            <p>Espèce : {betail.espece}</p>
            <p>Race : {betail.race}</p>
            <p>Prix : {betail.prix} FCFA</p>

            <div className="flex justify-between mt-4">
                <button onClick={() => navigate(`/vendeur/betails/${betail.id}/edit`)} className="bg-blue-500 px-3 py-1 text-white rounded">
                    Modifier
                </button>
                <button onClick={handleDelete} className="bg-red-500 px-3 py-1 text-white rounded">
                    Supprimer
                </button>
            </div>
        </div>
    );
};

export default BetailCardVendeur;
