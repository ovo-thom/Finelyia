import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import logo from "../../assets/Logo_Finelyia1.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    let hasError = false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Adresse e-mail invalide");
      hasError = true;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Le mot de passe doit contenir au moins 6 caractères, une majuscule et un chiffre."
      );
      hasError = true;
    }

    if (hasError) return;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setError("");
        setEmailError("");
        setPasswordError("");

        setSuccess("Connexion réussie !");
        setIsRedirecting(true);

        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.log("erreur Firebase", error.code, error.message);
        if (
          error.code === "auth/invalid-credential" ||
          error.code === "auth/wrong-password" ||
          error.code === "auth/user-not-found"
        ) {
          setError("Email ou mot de passe incorrect");
        } else {
          setError("Une erreur est survenue");
        }
      });
  };

  return (
    <div className="flex h-screen justify-center items-center mx-4 sm:px-0 bg-[#fafbfe] dark:text-white dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-gray-400 rounded-lg p-6 shadow-gray-300 shadow-lg mx-auto max-w-sm dark:bg-gray-800"
      >
        <div className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-5">
          <img
            src={logo}
            alt="logo"
            className="shadow-gray-300 shadow-lg rounded-lg"
          />
        </div>
        <h2 className="text-center mb-5 text-xl md:text-2xl font-semibold">
          Se connecter
        </h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }}
          placeholder="Adresse e-mail"
          className="border border-gray-300 px-3 py-2 mb-1 rounded outline-none focus:border focus:border-purple-600"
          required
        />
        {emailError && <p className="text-red-600 mb-3">{emailError}</p>}
        <label htmlFor="password">Mot de passe</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            className="border border-gray-300 px-3 py-2 mb-1 rounded outline-none focus:border focus:border-purple-600"
            required
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={
              showPassword
                ? "Masquer le mot de passe"
                : "Afficher le mot de passe"
            }
            tabIndex={0}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {passwordError && <p className="text-red-600 mb-3">{passwordError}</p>}
        <button className="text-white bg-purple-600 my-2 border hover:bg-white hover:text-black hover:border hover:border-purple-600 duration-200 cursor-pointer py-2 rounded w-full">
          Se connecter
        </button>
        {error && <p className="text-red-600 mb-2">{error}</p>}
        {success && <p className="text-green-600 mb-2">{success}</p>}
        {isRedirecting && (
          <div className="flex justify-center items-center mt-2">
            <ClipLoader color="#2563eb" size={30} />
            <span className="ml-2 text-indigo-600">Redirection...</span>
          </div>
        )}
      </form>
    </div>
  );
}
