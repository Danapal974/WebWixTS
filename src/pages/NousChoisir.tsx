import { useState, useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Accueil_NousChoisir from "../components/Accueil_NousChoisir";
import Pied_Page from "../components/Pied_Page";

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
      <Accueil_NousChoisir/>
      <Pied_Page/>
    </div>
  );
};

export default NousChoisir;
