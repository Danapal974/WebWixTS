import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Accueil_Coeur from '../components/Accueil_Coeur';
import Services from '../components/Services';
import Choisir_Nos_Services from '../components/Choisir_Nos_Services';
import Pied_Page from '../components/Pied_Page';

const Home = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Nav />
      <Accueil_Coeur />
      <Services />
      <Choisir_Nos_Services />
      <Pied_Page />
    </div>
  );
};

export default Home;
