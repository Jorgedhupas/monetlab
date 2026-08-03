"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "🏠",
  },
  {
    name: "TrendLab",
    href: "/trendlab",
    icon: "📈",
  },
  {
    name: "ContentLab",
    href: "/contentlab",
    icon: "✍️",
  },
  {
    name: "MonetGuard",
    href: "/monetguard",
    icon: "🛡️",
  },
  {
    name: "Configuración",
    href: "/settings",
    icon: "⚙️",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 min-h-screen">

      <div className="p-8 border-b border-slate-800">

        <h1 className="text-3xl font-bold text-blue-500">
          MonetLab
        </h1>

        <p className="text-slate-400 mt-2 text-sm">
          AI Business Operating System
        </p>

      </div>

      <nav className="p-4">

        {menu.map((item) => (

          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition mb-2 ${
              pathname === item.href
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800"
            }`}
          >
            <span className="text-xl">{item.icon}</span>

            <span>{item.name}</span>

          </Link>

        ))}

      </nav>

    </aside>
  );
}