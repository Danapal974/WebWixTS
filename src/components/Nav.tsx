import Nav_Effet from './Nav_Effet';

const Nav = () => {
  return (
    <div className="bg-blue-500 px-4 mx-auto font-semibold border-b-2 border-blue-600">
      <ul className="flex items-center justify-center gap-8 h-20">
        <Nav_Effet lien="/" nav="Accueil" />
        <Nav_Effet lien="/nous-choisir" nav="Nous Choisir" />
        <Nav_Effet lien="/nos-services" nav="Nos Services" />
      </ul>
    </div>
  );
};

export default Nav;
