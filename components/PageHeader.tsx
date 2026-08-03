export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      {subtitle && <p className="mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>}
    </div>
  );
}
