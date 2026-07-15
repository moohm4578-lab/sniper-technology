import Link from "next/link";

export default function AccountStatementPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-10">
        واجهة كشف حساب
      </h1>

      <div className="max-w-5xl mx-auto bg-zinc-900 border border-red-700 rounded-xl p-8">

        <p className="text-gray-300 text-lg leading-10">
          من خلال هذه الواجهة يمكن عرض تفاصيل جميع الحسابات داخل البرنامج،
          ومعرفة أنواع العمليات التي حدثت على كل حساب.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            كشف حساب العملاء
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            كشف حساب الموردين
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            معرفة حالة الحساب (مدين / دائن)
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            مطابقة الحساب
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            طباعة كشف الحساب
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            تصدير الكشف بصيغ متعددة
          </div>

        </div>

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