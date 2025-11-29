export default function StatCard({ title, value }) {
  return (
    <div className="p-4 h-full flex flex-col dark:text-white rounded-xl dark:bg-gray-800">
      <h3 className="text-base font-semibold mb-2 text-left">{title}</h3>
      <div className="flex-1 flex items-center justify-start">
        <p className={`text-2xl 2xl:text-3xl font-bold`}>{value}</p>
      </div>
    </div>
  );
}
