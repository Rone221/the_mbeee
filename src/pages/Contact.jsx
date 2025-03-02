import React from "react";

const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-[#fefae0] rounded-lg shadow-md mt-10">
            <h1 className="text-3xl font-bold text-[#283618] text-center mb-6">
                Contactez-nous
            </h1>
            <p className="text-lg text-gray-700 text-center mb-4">
                Vous avez une question ou besoin d'aide ? Remplissez le formulaire ci-dessous ou envoyez-nous un e-mail.
            </p>

            <form className="space-y-4">
                <div>
                    <label className="block text-[#606c38] font-semibold mb-2">
                        Nom
                    </label>
                    <input
                        type="text"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#606c38]"
                        placeholder="Votre nom"
                        required
                    />
                </div>

                <div>
                    <label className="block text-[#606c38] font-semibold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#606c38]"
                        placeholder="Votre email"
                        required
                    />
                </div>

                <div>
                    <label className="block text-[#606c38] font-semibold mb-2">
                        Message
                    </label>
                    <textarea
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#606c38]"
                        placeholder="Votre message..."
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#283618] text-white py-2 rounded-md hover:bg-[#606c38] transition"
                >
                    Envoyer
                </button>
            </form>

            <div className="text-center mt-6">
                <p className="text-gray-700">📧 Email : contact@mbeee.com</p>
                <p className="text-gray-700">📞 Téléphone : +221 77 123 45 67</p>
            </div>
        </div>
    );
};

export default Contact;
