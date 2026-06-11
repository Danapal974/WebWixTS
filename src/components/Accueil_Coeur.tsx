interface Accueil_CoeurProps {
  image: string;
  titre: string;
  texte: string;
  position_titre?: string;
  taille_image:string;
  position_texte: string;
  largeur_image:string;
  titre_choisir:string;
  texte_choisir:string;
  hauteur_section:string;
}

const Accueil_Coeur = ({
  image,
  titre,
  texte,
  position_titre,
  taille_image,
  largeur_image,
  position_texte,
  titre_choisir,
  texte_choisir,
  hauteur_section,
}: Accueil_CoeurProps) => {
  return (
    <div className="flex flex-col">
    <div className={`flex justify-center relative dark:from-gray-900 dark:to-gray-800 ${hauteur_section}`}>
      <img src={image} className={`rounded-lg ${taille_image} ${largeur_image}`}/>
      <div className={`outline outline-4 outline-offset-2 outline-red-500 block rounded-lg bg-blue-300 p-6 w-4/12 absolute left-1/2 ${position_texte}`}>
        <h5 className={`mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 ${position_titre}`}>
          {titre}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">{texte}</p>
      </div>
    </div>

    <div className="grid">
      <h5 className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
        {titre_choisir}
      </h5>
      <p className="text-base text-neutral-600 dark:text-neutral-200">
        {texte_choisir}
      </p>
    </div>
  </div>
  );
};

export default Accueil_Coeur;
