// This function represents each panel in the dashboard
// Accepts a title, optional subtitle, child elements, and optional custom class names
function DashboardPanel({ title, subtitle, children, className = '', onHeaderAction }) {
  return (
    // This represents the overall style, border, and color of each panel
    <section className={`flex flex-col rounded-lg border-2 border-zinc-800 bg-zinc-900 p-5 ${className}`}>
      <div className="mb-4 flex items-center justify-between border-b border-zinc-800 pb-4 text-white">
        <div className="flex items-center gap-2">
          <h2 className="font-mono text-sm font-semibold tracking-wide text-zinc-200">// {title}</h2>
          {onHeaderAction && (
            <button
              onClick={onHeaderAction}
              className="cursor-pointer rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-400 transition duration-600 hover:bg-zinc-600"
            >
              +
            </button>
          )}
        </div>
        {subtitle && <span className="font-mono text-xs tracking-wide text-zinc-400">{subtitle}</span>}
      </div>

      <div className="flex-1">{children}</div>
    </section>
  );
}

export default DashboardPanel;
