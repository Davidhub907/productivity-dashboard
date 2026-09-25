// This function represents each panel in the dashboard
// Accepts a title, optional subtitle, child elements, and optional custom class names
function DashboardPanel({ title, subtitle, children, className = '' }) {
  return (
    // This represents the overall style, border, and color of each panel
    <section className={`flex flex-col border-2 rounded-lg p-5 bg-zinc-900 border-zinc-800 ${className}`}>
      <div className="text-white pb-4 mb-4 border-b border-zinc-800 flex justify-between items-center">
        <h2 className="font-mono text-sm font-semibold tracking-wide text-zinc-200">// {title}</h2>

        {subtitle && <span className="font-mono text-xs tracking-wide text-zinc-400">{subtitle}</span>}
      </div>

      <div className="flex-1 flex items-center justify-center border border-dashed border-zinc-800 rounded-md font-mono text-sm text-zinc-500">
        {children}
      </div>
    </section>
  );
}

export default DashboardPanel;
