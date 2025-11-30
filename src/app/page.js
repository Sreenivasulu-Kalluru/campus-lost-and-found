"use client";

import Link from "next/link";
// We don't need useSession here anymore for the navbar!

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-5xl font-bold mb-6 text-blue-800 text-center">
        Campus Lost & Found
      </h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-lg">
        The easiest way to report lost items and find what belongs to you.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <Link href="/report">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition shadow-lg w-full md:w-auto">
            Report an Item
          </button>
        </Link>

        <Link href="/items">
          <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-50 transition shadow-lg w-full md:w-auto">
            Browse Items
          </button>
        </Link>
      </div>
    </div>
  );
}
