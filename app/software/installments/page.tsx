import Link from "next/link";

export default function InstallmentsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-10">
        واجهة الأقساط
      </h1>

      <div className="max-w-5xl mx-auto bg-zinc-900 border border-red-700 rounded-xl p-8">

        <p className="text-gray-300 text-lg leading-10">
          وهي واجهة تسمح بإضافة عمليات الأقساط بين المستخدم والعميل وجدولتها
          على أساس تواريخ يتم تحديدها من قبل المستخدم، مع إمكانية تعريف كفيل
          لكل عميل وتصنيفهم حسب المناطق ومقرات العمل.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            إضافة قسط جديد
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            جدولة الأقساط
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            تعريف كفيل
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            تصنيف العملاء حسب المناطق
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center md:col-span-2">
            متابعة الأقساط المستحقة
          </div>

        </div>

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