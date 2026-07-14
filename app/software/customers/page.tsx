import Link from "next/link";

export default function CustomersPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-10">
        واجهة إضافة العملاء
      </h1>

      <div className="max-w-5xl mx-auto bg-zinc-900 border border-red-700 rounded-xl p-8">

        <p className="text-gray-300 text-lg leading-10">
          ومن خلال هذه الواجهة يمكن إضافة تفاصيل العميل ونوعه (زبون - مورد)
          ورقم الهاتف والعنوان والرصيد الخاص به، والنظام يدعم عددًا غير منتهي من
          العملاء والموردين.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            إضافة زبون
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            إضافة مورد
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            رقم الهاتف
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            العنوان
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            الرصيد
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            عدد غير محدود من العملاء والموردين
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