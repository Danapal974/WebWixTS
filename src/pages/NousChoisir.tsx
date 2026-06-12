import { useState, useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Accueil_Coeur from "../components/Accueil_Coeur";
import NousChoisir_Contenu from "../components/NousChoisir_Contenu";

const NousChoisir = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Nav />
      <div className="relative bg-gradient-to-b from-white to-blue-200 dark:from-gray-900 dark:to-gray-800 h-screen">
        <Accueil_Coeur
          image="/img/NouChoisir_Accueil.jpg"
          titre="Pourquoi Choisir SecurInfo"
          texte=""
          position_titre="flex justify-center"
          taille_image="h-4/5"
          largeur_image="w-[1500px]"
          position_texte="bottom-14"
          titre_choisir="O1:"
          texte_choisir="Nous offrons des ressources éducatives complètes pour vous aider à mieux comprendre et utiliser internet en toute sécurité. Nos tutoriels interactifs et nos guides pratiques vous accompagneront pas à pas."
          titre_choisir2="O2:"
          texte_choisir2="Apprenez à télécharger et à effectuer des mises à jour en toute sécurité pour protéger vos appareils contre les menaces en ligne et les cyberattaques."
          titre_choisir3="O3:"
          texte_choisir3="Découvrez les meilleures pratiques pour éviter le piratage et sécuriser vos données personnelles, vos comptes en ligne et vos activités sur internet."
          titre_choisir4="O4:"
          texte_choisir4="Obtenez des conseils pour réaliser des transactions en ligne en toute sécurité et protéger vos informations financières lors de vos achats sur internet."
          hauteur_section="h-[500px]"
          position_flex="flex justify-start"
        />
      </div>
    </div>
  );
};

export default NousChoisir;
