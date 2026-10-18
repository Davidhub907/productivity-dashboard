function Header({ isDarkMode, toggleTheme }) {
  return (
    <header className="bg-[var(--dashboard-bg)] px-6 font-mono">
      {' '}
      <div className="flex items-center justify-between border-b border-[var(--border-color)] py-5">
        <div className="flex items-center gap-4">
          <span className="rounded bg-red-500 px-3 py-1 text-sm font-bold tracking-wide text-zinc-950">TERM-STUDY</span>

          <span className="text-sm tracking-wide text-[var(--muted-text)]">core_session_date_time: date // study_dashboard</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm tracking-wide text-[var(--muted-text)]">STATUS: ONLINE</span>

          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

          <button
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border-color)] text-lg text-[var(--muted-text)] transition hover:bg-black/10 hover:text-[var(--text-color)]"
            aria-label="Toggle theme"
          >
            {isDarkMode ? '☀' : '☾'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
