import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

import rings from "../assets/wooden.png";
import art404 from "../assets/404-art.png";

const NotFound: React.FC = () => (
  <main
    style={{ backgroundImage: `url(${rings})` }}
    className="min-h-screen flex flex-col items-center justify-center gap-8 bg-[#f9e7d7] bg-cover bg-center px-6 text-center"
  >
    <img src={art404} alt="404" className="w-full max-w-[420px] h-auto" />

    <p className="max-w-2xl text-lg font-extralight leading-relaxed text-green-800">
      The page you are looking for might have been removed, had its name changed
      or is temporarily unavailable.
    </p>

    <Link
      to="/"
      className="mt-4 inline-flex items-center gap-4 bg-green-800 px-12 py-3 text-sm font-medium tracking-widest uppercase text-white transition-colors hover:bg-green-700"
    >
      Home Page <FaArrowRightLong className="text-lg" />
    </Link>
  </main>
);

export default NotFound;
