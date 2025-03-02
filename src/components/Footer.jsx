const Footer = () => {
    return (
        <footer className="bg-[#283618] text-white text-center py-6 mt-8">
            <p>© {new Date().getFullYear()} The mbeee. Tous droits réservés.</p>
            <div className="mt-2 space-x-4">
                <a href="#" className="hover:underline">
                    Facebook
                </a>
                <a href="#" className="hover:underline">
                    Twitter
                </a>
                <a href="#" className="hover:underline">
                    Instagram
                </a>
            </div>
        </footer>
    );
};

export default Footer;
