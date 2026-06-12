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
  titre_choisir2:string;
  texte_choisir2:string;
  titre_choisir3:string;
  texte_choisir3:string;
  hauteur_section:string;
  position_flex:string;
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
  titre_choisir2,
  texte_choisir2,
  titre_choisir3,
  texte_choisir3,
  titre_choisir4,
  texte_choisir4,
  hauteur_section,
  position_flex,
}: Accueil_CoeurProps) => {
  return (
    <>
    <div className={` relative dark:from-gray-900 dark:to-gray-800 ${hauteur_section} ${position_flex}`}>
      <img src={image} className={`rounded-lg ${taille_image} ${largeur_image}`}/>
      <div className={`outline outline-4 outline-offset-2 outline-red-500 block rounded-lg bg-blue-300 p-6 w-4/12 absolute left-1/2 ${position_texte}`}>
        <h5 className={`mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 ${position_titre}`}>
          {titre}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">{texte}</p>
      </div>
    </div>

<div className="grid grid-cols-4 gap-20">
  <div className="outline outline-4 outline-offset-2 outline-red-500 ml-10">
      <h5 className="text-xl font-medium text-neutral-800 dark:text-neutral-50 ">
        {titre_choisir}
      </h5>
      <p className="text-base text-neutral-600 dark:text-neutral-200">
        {texte_choisir}
      </p>
      </div>
      <div className="outline outline-4 outline-offset-2 col-start-2">
      <h5 className="text-xl font-medium text-neutral-800 dark:text-neutral-50 ">
        {titre_choisir2}
      </h5>
      <p className="text-base text-neutral-600 dark:text-neutral-200">
        {texte_choisir2}
      </p>
      </div>
      <div className="outline outline-4 outline-offset-2 outline-green-500 col-start-3">
      <h5 className="text-xl font-medium text-neutral-800 dark:text-neutral-50 ">
        {titre_choisir3}
      </h5>
      <p className="text-base text-neutral-600 dark:text-neutral-200">
        {texte_choisir3}
      </p>
      </div>
      <div className="outline outline-4 outline-offset-2 outline-yellow-500 col-start-4 mr-10">
      <h5 className="text-xl font-medium text-neutral-800 dark:text-neutral-50 ">
        {titre_choisir4}
      </h5>
      <p className="text-base text-neutral-600 dark:text-neutral-200">
        {texte_choisir4}
      </p>
      </div>
      </div>
  </>
  );
};

export default Accueil_Coeur;
