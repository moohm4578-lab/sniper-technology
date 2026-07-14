"use client";

import Link from "next/link";

export default function SoftwarePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-12">
        البرامج الحسابية
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        <Link
          href="/software/speedo"
          className="bg-red-600 rounded-2xl p-8 hover:bg-red-700 transition"
        >
          <h2 className="text-3xl font-bold mb-4">
            سبيدو مبيعات
          </h2>

          <p className="text-lg">
            نظام متكامل لإدارة المبيعات والمخازن والحسابات.
          </p>
        </Link>

        <Link
          href="/software/alraed"
          className="bg-zinc-900 border border-red-700 rounded-2xl p-8 hover:bg-red-700 transition"
        >
          <h2 className="text-3xl font-bold mb-4">
            الرائد المحاسبي
          </h2>

          <p className="text-lg">
            نظام متكامل لإدارة القيود والمحاسبة والمخازن.
          </p>
        </Link>

      </div>

      <div className="flex justify-center mt-12">
        <Link
          href="/"
          className="bg-red-600 px-8 py-3 rounded-lg hover:bg-red-700 transition"
        >
          العودة للرئيسية
        </Link>
      </div>

    </main>
  );
}