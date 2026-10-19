import { useEffect, useRef } from 'react';
import DashboardPanel from './DashboardPanel';

function SystemLogs({ logs }) {
  const logsEndRef = useRef(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [logs]);

  return (
    <DashboardPanel title="SYSTEM_LOGS">
      <div className="max-h-40 overflow-y-auto rounded-md border border-[var(--border-color)] bg-[var(--dashboard-bg)] px-4 py-3 font-mono text-sm">
        {logs.length === 0 ? (
          <p className="text-[var(--muted-text)]">&gt; Waiting for system activity...</p>
        ) : (
          <div className="space-y-2">
            {logs.map((log) => (
              <div key={log.id} className="flex gap-3">
                <span className="text-emerald-500">&gt;</span>

                <span className="text-[var(--muted-text)]">{log.message}</span>
              </div>
            ))}

            <div ref={logsEndRef} />
          </div>
        )}
      </div>
    </DashboardPanel>
  );
}

export default SystemLogs;
