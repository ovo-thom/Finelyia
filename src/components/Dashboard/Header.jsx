import AuthButtons from "../Auth/AuthButtons";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/Logo_Finelyia1.png";

export default function Header() {
  const { user, setUser } = useContext(AuthContext);
  return (
    <header className="w-full pb-3 border-b-1 border-violet-600 text-black mb-6">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-16 w-16">
            <img src={logo} alt="Logo Finelyia" />
          </div>
          <span className="text-xl font-bold text-violet-900">Finelyia</span>
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
