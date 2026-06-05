import { useState, useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Accueil_Coeur from "../components/Accueil_Coeur";
import Services from "../components/Services";
import Choisir_Nos_Services from "../components/Choisir_Nos_Services";
import Pied_Page from "../components/Pied_Page";

const Home = () => {
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
      <div className="flex justify-center relative bg-gradient-to-b from-white to-blue-200 dark:from-gray-900 dark:to-gray-800 h-[1200px]">
        <Accueil_Coeur
          image="/img/home1.jpg"
          titre="Aide informatique et conseils en ligne"
          texte=" L'objectif est de créer une plateforme en ligne qui aide les personnes ayant des difficultés avec l'informatique, en leur offrant des ressources éducatives, des tutoriels interactifs et un espace d'entraide."
          taille_image="h-[1032px]"
          position_texte="bottom-20"
        />
      </div>
      <Services />
      <Choisir_Nos_Services />
      <Pied_Page />
    </div>
  );
};

export default Home;
