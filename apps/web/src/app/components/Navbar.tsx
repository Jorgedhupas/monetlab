import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 border-b border-slate-800 bg-slate-950">

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-xl">
          M
        </div>

        <div>

          <h1 className="font-bold text-xl text-white">
            MonetLab
          </h1>

          <p className="text-xs text-slate-400">
            AI Creator Platform
          </p>

        </div>

      </div>

      <div className="hidden md:flex gap-8 text-slate-300">

        <a href="#">
          Inicio
        </a>

        <a href="#">
          Funciones
        </a>

        <a href="#">
          Precios
        </a>

        <a href="#">
          Blog
        </a>

      </div>

      <Button>
        Iniciar sesión
      </Button>

    </nav>
  );
}