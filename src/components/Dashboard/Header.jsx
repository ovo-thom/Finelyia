import AuthButtons from "../Auth/AuthButtons";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { FaUser } from "react-icons/fa";

export default function Header() {
  const { user, setUser } = useContext(AuthContext);
  return (
    <header className="w-full pb-3 border-b-1 border-violet-600 text-black mb-6">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-gray-900 md:text-3xl font-bold tracking-wide font-[Merriweather_Sans]">
            Finelyia
          </h1>
          <p className="text-sm text-gray-600 md:text-base mt-2 font-light italic">
            Gérez vos finances simplement et efficacement
          </p>
        </div>
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="mr-4 flex items-baseline gap-1 font-semibold text-sm">
                <FaUser className="text-violet-600" /> {user.email}
              </span>
              <button
                className="bg-violet-600 text-white cursor-pointer px-3 py-1 rounded hover:bg-violet-700"
                onClick={() => setUser(null)}
              >
                Se déconnecter
              </button>
            </>
          ) : (
            <AuthButtons />
          )}
        </div>
      </div>
    </header>
  );
}
