type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "px-8 py-4 rounded-xl font-semibold transition duration-300";

  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "border border-slate-700 hover:border-blue-500 text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}