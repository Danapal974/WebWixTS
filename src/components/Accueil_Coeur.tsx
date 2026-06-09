interface Accueil_CoeurProps {
  image: string;
  titre: string;
  texte: string;
  position_titre?: string;
  taille_image:string;
  position_texte: string;
  largeur_image:string;
}

const Accueil_Coeur = ({
  image,
  titre,
  texte,
  position_titre,
  taille_image,
  largeur_image,
  position_texte,
}: Accueil_CoeurProps) => {
  return (
    <div className="flex justify-center relative bg-gradient-to-b from-white to-blue-200 dark:from-gray-900 dark:to-gray-800 h-[1200px]">
      <img src={image} className={`w-4/5 rounded-lg ${taille_image} ${largeur_image}`}/>
      <div className={`outline outline-4 outline-offset-2 outline-red-500 block rounded-lg bg-blue-300 p-6 w-4/12 absolute left-1/2 ${position_texte}`}>
        <h5
          className={
            `mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 ${position_titre}`
          }
        >
          {titre}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {texte}
        </p>
      </div>
    </div>
  );
};

export default Accueil_Coeur;
