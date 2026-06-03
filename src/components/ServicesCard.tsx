import { NavLink } from 'react-router-dom';

interface ServicesCardProps {
  titre: string;
  texte: string;
  hauteur: string;
  largeur: string;
  marge?: string;
  lien: string;
  bouton1?: string;
  bouton2?: string;
  bouton3?: string;
}

const ServicesCard = ({
  titre,
  texte,
  hauteur,
  largeur,
  marge,
  lien,
  bouton1,
  bouton2,
  bouton3,
}: ServicesCardProps) => {
  return (
    <div
      className={`block rounded-lg bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#4f46e5] via-[#818cf8] to-[#c7d2fe] p-6 ${hauteur} ${marge} ${largeur}`}
    >
      <h5 className="mb-2 text-xl font-medium text-white">{titre}</h5>
      <p className="text-base text-white">{texte}</p>
      <NavLink to={lien}>
        <div className="grid grid-cols-1">
          {bouton1 ? (
            <button className="mt-3 px-4 py-2 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-[#9d174d] via-[#d946ef] to-[#f0abfc] rounded-lg text-white font-bold hover:bg-green-100">
              {bouton1}
            </button>
          ) : null}
          {bouton2 ? (
            <button className="mt-3 px-4 py-2 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-[#9d174d] via-[#d946ef] to-[#f0abfc] rounded-lg text-white font-bold hover:bg-green-100">
              {bouton2}
            </button>
          ) : null}
          {bouton3 ? (
            <button className="mt-3 px-4 py-2 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-[#9d174d] via-[#d946ef] to-[#f0abfc] rounded-lg text-white font-bold hover:bg-green-100">
              {bouton3}
            </button>
          ) : null}
        </div>
      </NavLink>
    </div>
  );
};

export default ServicesCard;
