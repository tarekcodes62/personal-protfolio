import { Code2, LoaderCircle } from 'lucide-react';

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10">
          <Code2 className="h-8 w-8 text-cyan-400" />
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold tracking-tight">
          Tarek <span className="text-cyan-400">Rahman</span>
        </h1>

        <p className="mt-3 text-sm text-slate-400">
          Preparing something awesome...
        </p>

        {/* Spinner */}
        <div className="mt-8 flex items-center gap-3">
          <LoaderCircle className="h-5 w-5 animate-spin text-cyan-400" />
          <span className="text-sm text-slate-300">Loading portfolio</span>
        </div>

        {/* Progress indicator */}
        <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-cyan-400" />
        </div>

        <p className="mt-8 text-xs text-slate-500">Full Stack Web Developer</p>
      </div>
    </main>
  );
}
