import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
        <p className="text-neutral-300 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
