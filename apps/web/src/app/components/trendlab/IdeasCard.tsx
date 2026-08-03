type Props = {
  ideas: string[];
};

export default function IdeasCard({ ideas }: Props) {
  return (
    <div className="bg-slate-900 rounded-2xl p-8">

      <h2 className="text-2xl font-bold mb-6">
        💡 Ideas de monetización
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {ideas.map((idea, index) => (

  <div
    key={`${idea}-${index}`}
            className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-green-500 transition"
          >
            ✅ {idea}
          </div>

        ))}

      </div>

    </div>
  );
}