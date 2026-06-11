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
      <div className="flex justify-start relative bg-gradient-to-b from-white to-blue-200 dark:from-gray-900 dark:to-gray-800 h-screen">
        <Accueil_Coeur
          image="/img/NouChoisir_Accueil.jpg"
          titre="Pourquoi Choisir SecurInfo"
          texte=""
          position_titre="flex justify-center"
          taille_image="h-4/5"
          largeur_image="w-[1500px]"
          position_texte="bottom-20"
          titre_choisir="O1:"
          texte_choisir="Nous offrons des ressources éducatives complètes pour vous aider à mieux comprendre et utiliser internet en toute sécurité. Nos tutoriels interactifs et nos guides pratiques vous accompagneront pas à pas."
          hauteur_section="h-[600px]"
        />
      </div>
    </div>
  );
};

export default NousChoisir;
