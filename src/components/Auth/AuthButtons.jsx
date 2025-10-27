import { Link } from "react-router-dom";

export default function AuthButtons() {
  return (
    <div className="flex gap-3">
      <Link to="/login" className="font-semibold hover:underline">
        Se connecter
      </Link>
      <Link
        to="/register"
        className="text-black font-semibold border border-violet-600 px-3 py-1 rounded hover:bg-violet-600 duration-200 hover:text-gray-50"
      >
        S'inscrire
      </Link>
    </div>
  );
}
