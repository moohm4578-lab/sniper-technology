import Link from "next/link";

export default function AccountsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-10">
        واجهة الحسابات
      </h1>

      <div className="max-w-5xl mx-auto bg-zinc-900 border border-red-700 rounded-xl p-8">

        <p className="text-gray-300 text-lg leading-10">
          وهي واجهة تحتوي على تبويبات مختلفة لسهولة إدخال التفاصيل داخل البرنامج.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            كشف حساب
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            أرصدة
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            سعر صرف
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            سندات
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            سندات سماح
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            أرصدة أولية
          </div>

        </div>

        <p className="text-gray-300 text-lg leading-10 mt-8">
          جميع هذه التبويبات مبينة ضمن النظام المحاسبي وشجرة الحسابات.
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