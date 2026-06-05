import { useState, useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Accueil_Coeur from "../components/Accueil_Coeur";

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
      <div className="flex justify-start relative bg-gradient-to-b from-white to-blue-200 dark:from-gray-900 dark:to-gray-800 h-[1200px]">
        <Accueil_Coeur
          image="/img/NouChoisir_Accueil.jpg"
          titre="Pourquoi Choisir SecurInfo"
          position_titre="flex justify-center"
          taille_image="h-[800px]"
          position_texte="bottom-[20rem]"
        />
      </div>
    </div>
  );
};

export default NousChoisir;
