import Link from "next/link";

export default function OperationsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-10">
        تعدد العمليات
      </h1>

      <div className="max-w-5xl mx-auto bg-zinc-900 border border-red-700 rounded-xl p-8">

        <p className="text-gray-300 text-lg leading-10">
          يدعم النظام العملتين الدولار والدينار العراقي وتحديد سعر الصرف مع
          إمكانية عمل حسابات منفصلة لكل عملة ودمجها في الموازنة بعملة أساسية
          للنظام.
        </p>

      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/software/speedo"
          className="bg-red-600 px-8 py-3 rounded-lg hover:bg-red-700 transition"
        >
          رجوع
        </Link>
      </div>

    </main>
  );
}