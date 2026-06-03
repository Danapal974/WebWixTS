const Accueil_Coeur = () => {
  return (
    <div className="flex justify-center relative bg-gradient-to-b from-white to-blue-200 dark:from-gray-900 dark:to-gray-800 h-[1200px]">
      <img src="/img/home1.jpg" className="w-4/5 rounded-lg h-[1032px] mt-10" />
      <div className="outline outline-4 outline-offset-2 outline-red-500 block rounded-lg bg-blue-300 p-6 w-4/12 absolute bottom-20 left-1/2">
        <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          Aide informatique et conseils en ligne
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          L'objectif est de créer une plateforme en ligne qui aide les personnes
          ayant des difficultés avec l'informatique, en leur offrant des
          ressources éducatives, des tutoriels interactifs et un espace
          d'entraide.
        </p>
      </div>
    </div>
  );
};

export default Accueil_Coeur;
