function CourseDetails({ course, closeCourse }) {
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 font-mono text-zinc-200">
      {/* Outer Shell Window*/}
      <div className="w-full max-w-2xl space-y-5 rounded-xl border-2 border-zinc-800 bg-zinc-900 p-5 shadow-2xl">
        {/* Top Console Bar*/}
        <div className="flex items-center justify-between border-b border-zinc-800 p-2 text-xs tracking-wider">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: course.color }}></span>
            <span>COURSE_CONSOLE_V4.2 // {course.code}</span>
          </div>
          <button
            onClick={closeCourse}
            type="button"
            className="cursor-pointer rounded border-2 border-zinc-800 bg-zinc-950 p-0.5 text-rose-500 transition-colors hover:bg-zinc-800 hover:text-rose-400"
          >
            [ ESC_EXIT ]
          </button>
        </div>

        <div className="flex items-center justify-between rounded border-2 border-zinc-800 bg-zinc-950/60 p-5">
          <span className="text-xl">
            {course.code} {course.name}
          </span>

          <span className="rounded border border-emerald-500/40 bg-emerald-950/60 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-emerald-400">
            ENROLLED{' '}
          </span>
        </div>
        <div className="flex items-center justify-between rounded border-2 border-zinc-800 bg-zinc-950/60 p-5">
          <p>course progress placeholder </p>
        </div>
        <div className="flex items-center justify-between rounded border-2 border-zinc-800 bg-zinc-950/60 p-5">
          <span> Study time placeholder </span>
        </div>
        <div className="flex items-center justify-between rounded border-2 border-zinc-800 bg-zinc-950/60 p-5">
          <span> Assignments list placeholder </span>
        </div>
        <div className="flex items-center justify-between border-t border-zinc-800 p-2 text-xs tracking-wider">
          <p>footer placeholder</p>
        </div>
      </div>
    </section>
  );
}

export default CourseDetails;
