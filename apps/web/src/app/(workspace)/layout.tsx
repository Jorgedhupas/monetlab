import Sidebar from "../components/layout/Sidebar";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <section className="flex-1">

        {children}

      </section>

    </main>
  );
}