import ServicesCard from './ServicesCard';

const Services = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="outline outline-4 outline-offset-2 outline-orange-500 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500 via-emerald-400 to-red-500 p-10 mt-[10rem] w-4/5 rounded-xl">
          <h1 className="text-4xl text-center mb-4 dark:text-white">
            Nos Services
          </h1>
          <p className="text-xl text-center mb-8 ml-64 mr-64 dark:text-white">
            Sur notre site ! Ici, vous trouverez toutes nos offres et services
            conçus pour vous aider. N'hésitez pas à explorer nos solutions et
            découvrir comment nous pouvons répondre à vos besoins. Votre
            satisfaction est notre priorité !
          </p>
          <div className="flex justify-center gap-5 items-stretch">
            <ServicesCard
              titre="Je suis débutant"
              texte="Bienvenue sur notre section dédiée aux débutants ! Ici, vous trouverez des ressources et conseils pour vous aider à naviguer sur Internet."
              hauteur="h-[20rem]"
              largeur="w-1/4"
              lien="/debutant"
              bouton1="Découvrir"
            />
            <ServicesCard
              titre="Je veux me protéger"
              texte="Voici les informations essentielles pour vous protéger. Nous vous encourageons à rester vigilant et à prendre les mesures nécessaires."
              hauteur="h-80"
              largeur="w-1/4"
              lien="/protection"
              bouton1="Découvrir"
            />
            <ServicesCard
              titre="Je cherche des conseils"
              texte="Ici, vous trouverez de petites astuces qui faciliteront votre quotidien."
              hauteur="h-[20rem]"
              largeur="w-1/4"
              lien="/conseils"
              bouton1="Découvrir"
            />
          </div>
          <div className="flex justify-center gap-5 mt-5 items-stretch">
            <ServicesCard
              titre="Bonnes pratiques"
              texte="Bienvenue dans notre rubrique 'Bonnes Pratiques'. Ici, vous trouverez des conseils essentiels pour naviguer en toute sécurité."
              hauteur="h-80"
              largeur="w-1/4"
              lien="/bonnes-pratiques"
              bouton1="Découvrir"
            />
            <ServicesCard
              titre="Quiz et vidéos pour apprendre"
              texte="Enfin, clique ici pour vérifier si tu as bien tout retenu ! C'est une excellente façon de tester tes connaissances."
              hauteur="h-80"
              largeur="w-1/4"
              lien="/quiz"
              bouton1="Découvrir"
            />
            <ServicesCard
              titre="Outils recommandés"
              texte="Ici, vous trouverez une sélection d'outils essentiels pour la protection de votre sécurité en ligne."
              hauteur="h-80"
              largeur="w-1/4"
              lien="/outils"
              bouton1="VPN"
              bouton2="Antivirus"
              bouton3="Gestionnaire de mdp"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
