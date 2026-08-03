type Props = {
  platforms: string[];
};

export default function PlatformsCard({ platforms }: Props) {
  return (
    <div className="bg-slate-900 rounded-2xl p-8">

      <h2 className="text-2xl font-bold mb-6">
        📲 Plataformas recomendadas
      </h2>

      <div className="flex flex-wrap gap-3">

        {platforms.map((platform) => (

          <span
            key={platform}
            className="bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded-full"
          >
            {platform}
          </span>

        ))}

      </div>

    </div>
  );
}