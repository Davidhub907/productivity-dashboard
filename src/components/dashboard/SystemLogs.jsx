import { useEffect, useRef } from 'react';
import DashboardPanel from './DashboardPanel';

function SystemLogs({ logs }) {
  const logsContainerRef = useRef(null);

  useEffect(() => {
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <DashboardPanel title="SYSTEM_LOGS">
      <div
        ref={logsContainerRef}
        className="subtle-scrollbar max-h-40 overflow-y-auto rounded-md border border-[var(--border-color)] bg-[var(--dashboard-bg)] px-4 py-3 font-mono text-sm"
      >
        {logs.length === 0 ? (
          <p className="text-[var(--muted-text)]">&gt; Waiting for system activity...</p>
        ) : (
          <div className="space-y-2">
            {logs.map((log) => (
              <div key={log.id} className="flex items-start gap-3">
                <span className="shrink-0 text-xs text-[var(--muted-text)] opacity-60">[{log.time}]</span>

                <span className="shrink-0 text-emerald-500">&gt;</span>

                <span className="text-[var(--muted-text)]">{log.message}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardPanel>
  );
}

export default SystemLogs;
