export default function Header() {
  return (
    <header className="w-full py-5 border-b-1 border-violet-600 text-black mb-5">
          <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
                Finelyia
              </h1>
              <p className="text-sm md:text-base mt-2 font-light italic">
                Gérez vos finances simplement et efficacement
              </p>
            </div>
            <div className="flex gap-3">
              <button className="font-semibold hover:underline">
                Se connecter
              </button>
              <button className="text-black font-semibold border border-violet-600 px-3 py-1 rounded hover:bg-violet-600 hover:text-gray-50">
                S'inscrire
              </button>
            </div>
          </div>
        </header>
  )
}