// This function represents each panel in the dashboard
// Accepts a title, optional subtitle, child elements, and optional custom class names
function DashboardPanel({ title, subtitle, children, className = '', onHeaderAction }) {
  return (
    // This represents the overall style, border, and color of each panel
    <section className={`flex flex-col rounded-lg border-2 border-[var(--border-color)] bg-[var(--panel-bg)] p-5 ${className}`}>
      <div className="mb-4 flex items-center justify-between border-b border-[var(--border-color)] pb-4 text-[var(--text-color)]">
        <div className="flex items-center gap-2">
          <h2 className="font-mono text-sm font-semibold tracking-wide text-[var(--text-color)]">// {title}</h2>

          {onHeaderAction && (
            <button
              onClick={onHeaderAction}
              className="cursor-pointer rounded bg-[var(--border-color)] px-2 py-1 text-xs text-[var(--muted-text)] transition duration-300 hover:opacity-70"
            >
              +
            </button>
          )}
        </div>

        {subtitle && <span className="font-mono text-xs tracking-wide text-[var(--muted-text)]">{subtitle}</span>}
      </div>

      <div className="flex-1">{children}</div>
    </section>
  );
}

export default DashboardPanel;
