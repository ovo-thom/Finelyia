import AuthButtons from "../Auth/AuthButtons";

export default function Header() {
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
        <AuthButtons />
      </div>
    </header>
  );
}
