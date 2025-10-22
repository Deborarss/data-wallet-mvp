import Link from "next/link";

const heroStats = [
  {
    label: "Total em Dividendos",
    value: "R$ 456",
    change: "+23% este mês",
    gradient: "bg-gradient-to-br from-sky-500 via-indigo-500 to-emerald-400",
  },
];

const assets = [
  { name: "Fotos Rosto", amount: "R$ 234", color: "bg-rose-50 text-rose-600", icon: "📸" },
  { name: "Textos Blog", amount: "R$ 156", color: "bg-emerald-50 text-emerald-600", icon: "✍️" },
  { name: "Áudios Treinamento", amount: "R$ 98", color: "bg-sky-50 text-sky-600", icon: "🎧" },
];

const bottomActions = [
  { href: "/dashboard", label: "Início" },
  { href: "/dashboard#transacoes", label: "Transações" },
  { href: "/dashboard#perfil", label: "Perfil" },
];

const featureHighlights = [
  {
    title: "Controle granular",
    description:
      "Defina permissões, expirações e royalties por ativo. Tudo registrado e auditável em blockchain.",
  },
  {
    title: "Rastreabilidade total",
    description:
      "Visualize quem licenciou seus dados, qual modelo treinou e qual uso foi feito em cada contrato.",
  },
  {
    title: "Pagamentos automatizados",
    description:
      "Receba dividendos via smart contracts sempre que um ativo for consumido por IA.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3f6ff] via-white to-white text-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-16 sm:px-10 lg:flex-row lg:items-start lg:gap-24 lg:px-16 lg:pt-24">
        <aside className="order-1 relative flex flex-1 flex-col gap-5 self-stretch lg:order-2">
          <div className="absolute -top-24 right-0 hidden h-72 w-72 rounded-full bg-gradient-to-br from-sky-300 via-indigo-200 to-transparent opacity-60 blur-3xl lg:block" />
          <div className="flex flex-col gap-5 rounded-[2.5rem] border border-slate-200 bg-white/90 p-6 shadow-2xl shadow-sky-100 backdrop-blur">
            <header className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Data Wallet</p>
                <p className="text-base font-semibold text-slate-900">Seus dados, suas regras, seus dividendos</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-indigo-500 to-emerald-400 text-white shadow-md">
                DW
              </div>
            </header>

            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-3xl ${stat.gradient} px-6 py-6 text-white shadow-xl`}
              >
                <p className="text-sm font-medium text-white/80">{stat.label}</p>
                <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-sm text-white/80">{stat.change}</p>
              </div>
            ))}

            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold text-slate-900">Seus Ativos</h3>
              <div className="grid gap-3 sm:grid-cols-3">
                {assets.map((asset) => (
                  <article
                    key={asset.name}
                    className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <span className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${asset.color}`}>
                      <span>{asset.icon}</span>
                      {asset.name}
                    </span>
                    <p className="text-lg font-semibold text-slate-900">{asset.amount}</p>
                    <p className="text-xs text-slate-500">Distribuído este mês</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Link
                href="/dashboard#upload"
                className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-sky-200 bg-sky-50 py-4 text-sm font-semibold text-sky-600 transition hover:border-sky-300 hover:bg-sky-100"
              >
                + Adicionar
              </Link>
              <Link
                href="/dashboard#licencas"
                className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-slate-200 bg-white py-4 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:text-sky-600"
              >
                Licenças
              </Link>
              <Link
                href="/dashboard#transacoes"
                className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-slate-200 bg-white py-4 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:text-sky-600"
              >
                Transações
              </Link>
            </div>
          </div>

          <nav className="sticky bottom-6 mx-auto w-full max-w-md rounded-full border border-slate-200 bg-white/90 px-6 py-3 shadow-lg backdrop-blur lg:hidden">
            <ul className="flex items-center justify-between text-sm font-medium text-slate-500">
              {bottomActions.map((action, index) => (
                <li key={action.label}>
                  <Link className="flex flex-col items-center gap-1 transition hover:text-sky-600" href={action.href}>
                    <span className="text-lg">{["🏠", "💸", "👤"][index]}</span>
                    {action.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <section className="order-2 flex flex-1 flex-col gap-8 lg:order-1">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-sky-100">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-sky-400 to-violet-500" />
            Data Wallet para IA
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Seus dados, suas regras, seus dividendos.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600">
            Controle, licencie e monetize cada uso dos seus dados por modelos de IA. Transparência, rastreabilidade e pagamento justo em uma única carteira digital.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3 text-base font-medium text-white shadow-lg shadow-sky-600/30 transition hover:-translate-y-0.5 hover:bg-sky-500"
            >
              Acessar dashboard
            </Link>
            <Link
              href="#experimente"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-3 text-base font-medium text-slate-800 transition hover:border-slate-400 hover:text-slate-950"
            >
              Explorar recursos
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-3" id="experimente">
            {featureHighlights.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:border-sky-200 hover:shadow-lg"
              >
                <h2 className="text-lg font-semibold text-slate-900">{feature.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        
      </div>
    </div>
  );
}
