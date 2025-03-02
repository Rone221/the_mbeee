import React from "react";

const BetailCard = ({ betail }) => {
    if (!betail || typeof betail !== "object") {
        return <p className="text-red-500">⚠️ Erreur : Donnée de bétail invalide</p>;
    }

    return (
        <div className="bg-[#fefae0] border border-[#606c38] shadow-lg rounded-lg overflow-hidden">
            {/* Image du bétail */}
            <img
                src={betail.image || "/placeholder-animal.jpg"} // Met une image par défaut si aucune image n'est fournie
                alt={betail.nom || "Bétail"}
                className="w-full h-48 object-cover"
            />

            {/* Contenu du bétail */}
            <div className="p-4">
                <h3 className="text-xl font-bold text-[#283618]">{betail.nom || "Nom inconnu"}</h3>
                <p className="text-[#606c38]">Race : {betail.race || "Non spécifié"}</p>
                <p className="text-[#606c38]">Âge : {betail.age ? `${betail.age} ans` : "Non spécifié"}</p>
                <p className="text-[#bc6c25] font-semibold">Prix : {betail.prix ? `${betail.prix} FCFA` : "Non spécifié"}</p>
                <p>
                    Disponibilité :{" "}
                    <span className={betail.disponibilite ? "text-green-600 font-semibold" : "text-red-500 font-semibold"}>
                        {betail.disponibilite ? "Disponible" : "Indisponible"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default BetailCard;
