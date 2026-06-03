import { NavLink } from 'react-router-dom';

interface NavEffetProps {
  lien: string;
  nav: string;
}

const Nav_Effet = ({ lien, nav }: NavEffetProps) => {
  return (
    <NavLink
      to={lien}
      className={({ isActive }) =>
        isActive ? 'text-yellow-300 font-bold' : 'hover:text-yellow-300'
      }
    >
      <span className="overflow-hidden font-bold leading-[47px]">
        {nav.match(/./gu)?.map((char, index) => (
          <span
            className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
            key={`${char}-${index}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </NavLink>
  );
};

export default Nav_Effet;
