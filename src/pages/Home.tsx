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
      <div className=" relative bg-gradient-to-b from-white to-blue-200 dark:from-gray-900 dark:to-gray-800 ">
        <Accueil_Coeur
          image="/img/home1.jpg"
          titre="Aide informatique et conseils en ligne"
          texte=" L'objectif est de créer une plateforme en ligne qui aide les personnes ayant des difficultés avec l'informatique, en leur offrant des ressources éducatives, des tutoriels interactifs et un espace d'entraide."
          taille_image="h-[1032px] mt-10"
          largeur_image="w-4/5"
          position_texte="bottom-5"
          hauteur_section="h-[1200px]"
          position_flex="flex justify-center"
        />
      </div>
      <Services />
      <Choisir_Nos_Services />
      <Pied_Page />
    </div>
  );
};

export default Home;
