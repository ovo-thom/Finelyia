export default function Paramètres() {
  return (
    <div className="flex flex-col w-1/2 mx-auto">
      <h2 className="font-semibold text-3xl text-center mb-4">Paramètres</h2>
      <div className="border-2 border-gray-300 rounded-xl bg-white p-4">
        <div className="flex items-center justify-between gap-3 border-b border-b-gray-300 py-2">
          <span className="text-lg">Mode sombre</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-checked:bg-violet-600 rounded-full peer peer-focus:ring-2 peer-focus:ring-violet-500 transition-all"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>

        <div className="flex items-center justify-between gap-3 border-b border-b-gray-300 py-2">
          <span className="text-lg">Notifications</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-checked:bg-violet-600 rounded-full peer peer-focus:ring-2 peer-focus:ring-violet-500 transition-all"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>

        <div className="flex items-center justify-between gap-3 border-b border-b-gray-300 py-2">
          <label className="relative inline-flex items-center cursor-pointer">
            Langue
          </label>
          <select>
            <option value="francais">Français</option>
            <option value="francais">Anglais</option>
          </select>
        </div>
      </div>
    </div>
  );
}
