import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  const text = 'SecurInfo';
  return (
    <div className="bg-blue-600 p-4 text-center relative border-b-2 border-blue-400">
      <div className="w-max mx-auto">
        <h1 className="overflow-hidden font-bold text-xl">
          {text.match(/./gu)?.map((char, index) => (
            <span
              className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
              key={`${char}-${index}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded bg-gray-50 dark:bg-gray-800 absolute right-0 top-2 mr-5"
      >
        {darkMode ? <Moon /> : <Sun />}
      </button>
    </div>
  );
};

export default Header;
