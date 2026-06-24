const raisons = [
  { titre: "O1:", texte: "Nous offrons des ressources éducatives complètes pour vous aider à mieux comprendre et utiliser internet en toute sécurité. Nos tutoriels interactifs et nos guides pratiques vous accompagneront pas à pas." },
  { titre: "O2:", texte: "Apprenez à télécharger et à effectuer des mises à jour en toute sécurité pour protéger vos appareils contre les menaces en ligne et les cyberattaques." },
  { titre: "O3:", texte: " Découvrez les meilleures pratiques pour éviter le piratage et sécuriser vos données personnelles, vos comptes en ligne et vos activités sur internet." },
  { titre: "O4:", texte: "Obtenez des conseils pour réaliser des transactions en ligne en toute sécurité et protéger vos informations financières lors de vos achats sur internet." },
];

const Accueil_NousChoisir=()=>{
    return(
        <>
        <div className="flex justify-start relative bg-gradient-to-b from-white to-blue-200 dark:from-gray-900 dark:to-gray-700 h-[500px]">
      <img src="/img/NouChoisir_Accueil.jpg" className="rounded-lg h-4/5 w-[1500px]" />
      <div className="block rounded-lg bg-blue-300 p-6 w-4/12 absolute left-1/2 bottom-14">
        <h5 className="flex justify-center mb-2 text-2xl font-bold text-blue-800 text-neutral-800 dark:text-neutral-50">
        Pourquoi Choisir SecurInfo
        </h5>
      </div>
    </div>

    
    <div className="bg-gray-200 dark:bg-gray-800 py-12 px-10">   
    <div className="grid grid-cols-4 gap-20 mt-5">
  {raisons.map((raison) => (
    <div key={raison.titre} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500">
      <h5 className="text-2xl font-bold text-blue-600 mb-3">{raison.titre}</h5>
      <p className="text-base text-neutral-600 dark:text-neutral-200">{raison.texte}</p>
    </div>
  ))}
</div>
      </div>

        </>
    )
}

export default Accueil_NousChoisir;