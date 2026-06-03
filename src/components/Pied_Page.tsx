import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';

const Pied_Page = () => {
  return (
    <footer className=" rounded-xl dark:bg-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-1">
            <a href="/" className=" text-xl font-bold tracking-tight">
              SecurInfo
            </a>
            <p className="mt-4 text-sm  leading-relaxed">
              Site moderne avec des connaissances à y gagner
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className=" text-sm font-bold uppercase tracking-wider mb-4">
              About
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm  hover:text-blue-500 transition-colors"
                >
                  React-Icons
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm  hover:text-blue-500 transition-colors"
                >
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h3 className=" text-sm font-bold uppercase tracking-wider mb-4">
              Follow us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm  hover:text-blue-500 transition-colors"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm  hover:text-blue-500 transition-colors"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className=" text-sm font-bold uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm  hover:text-blue-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm  hover:text-blue-500 transition-colors"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-700" />

        {/* Bottom */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm ">
            &copy; {new Date().getFullYear()} WebWix&trade;. All rights
            reserved.
          </p>
          <div className="flex space-x-5">
            <a href="#" className=" transition-colors" aria-label="Facebook">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="  transition-colors" aria-label="Instagram">
              <FaInstagramSquare size={18} />
            </a>
            <a href="#" className="  transition-colors" aria-label="Twitter">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="  transition-colors" aria-label="Github">
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Pied_Page;
