type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <section className="space-y-6">

      <div className="border-b border-slate-800 pb-4">

        <h2 className="text-3xl font-bold text-white">
          {title}
        </h2>

        {subtitle && (
          <p className="text-slate-400 mt-2">
            {subtitle}
          </p>
        )}

      </div>

      <div className="space-y-6">
        {children}
      </div>

    </section>
  );
}