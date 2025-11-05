import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex h-screen justify-center items-center bg-[#fafbfe]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-gray-400 rounded-lg p-6 shadow-gray-300 shadow-lg mx-auto max-w-sm"
      >
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
          className="border border-gray-300 px-3 py-1 mb-1 rounded outline-none focus:border focus:border-purple-600"
          required
        />
        {emailError && <p className="text-red-600 mb-3">{emailError}</p>}
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          className="border border-gray-300 px-3 py-2 mb-1 rounded outline-none focus:border focus:border-purple-600"
          required
        />
        {passwordError && <p className="text-red-600 mb-3">{passwordError}</p>}
        <button className="text-white bg-purple-600 border hover:bg-white hover:text-black hover:border hover:border-purple-600 duration-200 cursor-pointer py-2 rounded">
          Se connecter
        </button>
        {error && <p className="text-red-600 mb-2">{error}</p>}
        {success && <p className="text-green-600 mb-2">{success}</p>}
      </form>
    </div>
  );
}
