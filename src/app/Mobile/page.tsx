'use client';

import { FaMobileAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function MobileAppsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] p-6 pt-50 pb-30 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">

      {/* Page Header */}
      <div className="flex items-center space-x-3 mb-6">
        <FaMobileAlt size={36} className="text-purple-500" />
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-700">Mobile Apps</h1>
      </div>

      {/* Under Work / Coming Soon Card */}
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Exciting things are coming!</h2>
        <p className="text-gray-600 mb-6">
          I&apos;m currently building amazing mobile apps. Soon&lsquo; this section will showcase screenshots&lsquo; videos&lsquo; and download links for my projects.
        </p>

        <Link
          href="/"
          className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
        >
          Back to Home
        </Link>
      </div>

      {/* Optional footer note */}
      <p className="mt-10 text-gray-400 text-sm">
        Tip: Check back later to see live mobile projects!
      </p>

    </main>
  );
}
