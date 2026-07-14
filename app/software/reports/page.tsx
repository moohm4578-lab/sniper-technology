import Link from "next/link";

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-10">
        واجهة التقارير
      </h1>

      <div className="max-w-5xl mx-auto bg-zinc-900 border border-red-700 rounded-xl p-8">

        <p className="text-gray-300 text-lg leading-10">
          وهي واجهة تقوم بعرض تفاصيل الحركات داخل البرنامج عن طريق تفصيلها على
          أساس تصنيفات متعددة، متضمنة تقارير المبيعات والمشتريات والأرباح
          والمصاريف والمخازن وتقارير الجودة.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            تقارير المبيعات
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            تقارير المشتريات
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            تقارير الأرباح
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            تقارير المصاريف
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            تقارير المخازن
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            تقارير الجودة
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