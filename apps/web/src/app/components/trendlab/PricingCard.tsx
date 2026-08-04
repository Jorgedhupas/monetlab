type Pricing = {
  recommendedPrice: number;
  minimumPrice: number;
  premiumPrice: number;
  grossMargin: number;
  netMargin: number;
  averageTicket: number;
};

type Props = {
  pricing: Pricing;
};

const money = (value: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);

export default function PricingCard({ pricing }: Props) {
  return (
    <div className="bg-slate-900 rounded-2xl p-8">

      <h2 className="text-2xl font-bold mb-8">
        💲 Estrategia de Precios
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-800 rounded-xl p-5">
          <p className="text-slate-400">Precio recomendado</p>
          <p className="text-2xl font-bold text-green-400">
            {money(pricing.recommendedPrice)}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <p className="text-slate-400">Precio mínimo</p>
          <p className="text-2xl font-bold">
            {money(pricing.minimumPrice)}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <p className="text-slate-400">Precio premium</p>
          <p className="text-2xl font-bold text-blue-400">
            {money(pricing.premiumPrice)}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <p className="text-slate-400">Margen bruto</p>
          <p className="text-xl font-bold">
            {pricing.grossMargin}%
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <p className="text-slate-400">Margen neto</p>
          <p className="text-xl font-bold">
            {pricing.netMargin}%
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <p className="text-slate-400">Ticket promedio</p>
          <p className="text-2xl font-bold text-yellow-400">
            {money(pricing.averageTicket)}
          </p>
        </div>

      </div>

    </div>
  );
}