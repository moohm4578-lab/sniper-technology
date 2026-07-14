import Link from "next/link";

export default function softwarepage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-5xl font-bold text-center text-red-600 mb-12">
        البرامج الحسابية
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        <Link
          href="/software/Speedo"
          className="bg-zinc-900 border border-red-700 rounded-xl p-8 hover:bg-red-700 duration-300"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            سبيدو مبيعات
          </h2>

          <p className="text-gray-300">
            نظام متكامل لإدارة المبيعات والمخازن والحسابات.
          </p>
        </Link>

        <Link
          href="/software/Alraed"
          className="bg-zinc-900 border border-red-700 rounded-xl p-8 hover:bg-red-700 duration-300"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            الرائد للحلول البرمجية
          </h2>

          <p className="text-gray-300">
            حلول برمجية متكاملة لإدارة الشركات والمحلات.
          </p>
        </Link>

      </div>

      <div className="text-center mt-16">
        <Link
          href="/"
          className="bg-red-600 px-8 py-3 rounded-lg hover:bg-red-700 duration-300"
        >
          العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}