function DashboardPanel({ title, subtitle, children, className = '' }) {
  return (
    <section className={`border rounded-lg p-5 bg-zinc-900 border-zinc-800 ${className}`}>
      <div className="text-white flex justify-between items-center">
        <h2>// {title}</h2>
        {subtitle && <span>{subtitle}</span>}
      </div>
      <div>{children}</div>
    </section>
  );
}

export default DashboardPanel;
