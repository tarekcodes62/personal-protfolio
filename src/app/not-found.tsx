'use client';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Page not found
        </p>

        <h1 className="text-8xl font-black tracking-tighter sm:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
          Oops! You took a wrong turn.
        </h2>

        <p className="mx-auto mt-4 max-w-md text-slate-400">
          The page you are looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back to my portfolio.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:bg-slate-800"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <p className="mt-12 text-sm text-slate-500">
          © {new Date().getFullYear()} Tarek Rahman
        </p>
      </div>
    </main>
  );
}
