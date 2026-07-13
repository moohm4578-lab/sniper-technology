import Link from "next/link";

export default function SoftwarePage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-red-600 text-center mb-12">
        البرامج الحسابية
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        <Link
          href="/software/speedo"
          className="border border-red-700 rounded-xl p-8 hover:bg-red-600 duration-300"
        >
          <h2 className="text-3xl font-bold mb-4">
            سبيدو مبيعات
          </h2>

          <p className="text-gray-300">
            اضغط لعرض تفاصيل برنامج سبيدو مبيعات.
          </p>
        </Link>

        <Link
          href="/software/alraed"
          className="border border-red-700 rounded-xl p-8 hover:bg-red-600 duration-300"
        >
          <h2 className="text-3xl font-bold mb-4">
            الرائد للحلول البرمجية
          </h2>

          <p className="text-gray-300">
            اضغط لعرض تفاصيل برنامج الرائد.
          </p>
        </Link>

      </div>
    </main>
  );
}