export default function Register() {
  return (
    <form className="flex flex-col border-gray-400 rounded-lg p-6 shadow-gray-300 shadow-lg mt-10 mx-auto max-w-sm">
      <h2 className="text-center mb-5 text-xl md:text-2xl font-semibold">
        Créer un compte
      </h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Adresse e-mail"
        className="border border-gray-300 px-3 py-1 rounded outline-none focus:border focus:border-purple-600"
        required
      />
      <p className="opacity-0">Champ incorrect</p>
      <label htmlFor="password">Mot de passe</label>
      <input
        type="password"
        id="password"
        placeholder="Mot de passe"
        className="border border-gray-300 px-3 py-2 rounded outline-none focus:border focus:border-purple-600"
        required
      />
      <p className="opacity-0">Champ incorrect</p>
      <button className="text-white bg-purple-600 border hover:bg-white hover:text-black hover:border hover:border-purple-600 duration-200 cursor-pointer py-2 rounded">
        S'inscrire
      </button>
    </form>
  );
}
