import { Link } from "react-router-dom";

export default function AuthButtons() {
  return (
    <div className="flex items-center md:gap-3">
      <Link
        to="/login"
        className="font-semibold hover:text-violet-600 duration-200 px-2 py-1 text-sm md:text-base min-w-[90px] max-w-[120px] whitespace-nowrap"
      >
        Se connecter
      </Link>
      <Link
        to="/register"
        className="text-black font-semibold border border-violet-600 text-sm px-3 py-1 rounded hover:bg-violet-600 duration-200 hover:text-gray-50 md:text-base min-w-[90px] max-w-[120px] whitespace-nowrap"
      >
        S'inscrire
      </Link>
    </div>
  );
}
