import Link from "next/link";

export default function PurchasesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-10">
        واجهة فاتورة المشتريات
      </h1>

      <div className="max-w-5xl mx-auto bg-zinc-900 border border-red-700 rounded-xl p-8">

        <p className="text-gray-300 text-lg leading-10">
          هذه الواجهة يمكن من خلالها إضافة المشتريات الخاصة بالمجالات التجارية
          وإضافة رصيد لها وتحديد مصاريف للمواد وتوزيعها، مع إمكانية طباعة
          الباركود بشكل مباشر والشراء بنظام التعبئة ونظام الوجبات.
        </p>

      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/software/Speedo"
          className="bg-red-600 px-8 py-3 rounded-lg hover:bg-red-700 transition"
        >
          رجوع
        </Link>
      </div>

    </main>
  );
}