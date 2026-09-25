function Header() {
  return (
    <header className="bg-zinc-950 px-6 font-mono">
      <div className="flex items-center justify-between border-b border-zinc-800 py-5">
        <div className="flex items-center gap-4">
          <span className="rounded bg-red-500 px-3 py-1 text-sm font-bold tracking-wide text-zinc-950">TERM-STUDY</span>
          <span className="text-sm tracking-wide text-zinc-400">core_session_date_time: date // study_dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm tracking-wide text-zinc-400">STATUS: ONLINE</span>
          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
