type Props = {
  score: number;
};

export default function ScoreCard({ score }: Props) {
  return (
    <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-lg">

      <h2 className="text-xl font-semibold text-slate-300">
        MonetBrain Score
      </h2>

      <p className="text-7xl font-black text-blue-400 mt-6">
        {score}
      </p>

      <p className="text-slate-500 text-xl">
        /100
      </p>

      <div className="w-full bg-slate-700 rounded-full h-4 mt-8">

        <div
          className="bg-blue-500 h-4 rounded-full transition-all duration-700"
          style={{
            width: `${score}%`,
          }}
        />

      </div>

    </div>
  );
}