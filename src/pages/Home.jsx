const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-8">
              <div className="shrink-0">
                <a href="#">
                  <img
                    className="block w-auto h-8 dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
                    alt="Logo clair"
                  />
                  <img
                    className="hidden w-auto h-8 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"
                    alt="Logo sombre"
                  />
                </a>
              </div>

              {/* Menu principal */}
              <ul className="hidden lg:flex items-center space-x-6">
                <li>
                  <a
                    href="#"
                    className="flex items-center text-sm font-medium text-gray-900 hover:text-primary dark:text-white dark:hover:text-primary-500"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a6 6 0 016 6v3a2 2 0 002 2h1v3h-2v4H3v-4H1v-3h1a2 2 0 002-2V8a6 6 0 016-6z" />
                    </svg>
                    Accueil
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-sm font-medium text-gray-900 hover:text-primary dark:text-white dark:hover:text-primary-500"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 3h14v2H3V3zM5 7h10v2H5V7zM7 11h6v2H7v-2z" />
                    </svg>
                    Bétails
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-sm font-medium text-gray-900 hover:text-primary dark:text-white dark:hover:text-primary-500"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 4h12v2H4V4zM6 8h8v2H6V8zM4 12h12v2H4v-2z" />
                    </svg>
                    Transactions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-sm font-medium text-gray-900 hover:text-primary dark:text-white dark:hover:text-primary-500"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 2h16v2H2V2zm2 4h12v2H4V6zm2 4h8v2H6v-2z" />
                    </svg>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Actions utilisateur */}
            <div className="flex items-center space-x-4">
              <button className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l1 4h13l1-4h2m-2 0a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm2 6h10v6a4 4 0 01-4 4H5a4 4 0 01-4-4v-6z"
                  />
                </svg>
                Mon panier
              </button>
              <button className="inline-flex items-center bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3a7 7 0 0114 0v2a4 4 0 014 4v5a3 3 0 01-3 3H6a3 3 0 01-3-3V9a4 4 0 014-4V3z"
                  />
                </svg>
                Mon compte
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Gérez votre ferme en ligne efficacement !
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Suivez vos bétails, transactions et paniers en temps réel grâce à
              notre interface intuitive et moderne.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white rounded-lg bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Commencer maintenant
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
            >
              En savoir plus
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="../../public/betail/beautiful-cow-picture.png"
              alt="Mockup"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
