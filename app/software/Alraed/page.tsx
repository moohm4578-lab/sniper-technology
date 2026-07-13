import Link from "next/link";

export default function alraedPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-10">
        الرائد للحلول البرمجية
      </h1>

      <div className="max-w-5xl mx-auto bg-zinc-900 border border-red-700 rounded-2xl p-8">

        <h2 className="text-3xl font-bold mb-6 text-white">
          الرائد للحلول البرمجية
        </h2>

        <p className="text-gray-300 leading-8 mb-8">
          برنامج احترافي لإدارة الشركات والمحلات التجارية، يوفر حلولاً متكاملة
          لإدارة الحسابات والمبيعات والمخازن والعملاء مع تقارير دقيقة وسهولة
          في الاستخدام.
        </p>

        <h3 className="text-2xl text-red-500 font-bold mb-4">
          المميزات
        </h3>

        <ul className="space-y-3 text-gray-300">
          <li>✅ إدارة الحسابات.</li>
          <li>✅ إدارة المبيعات والمشتريات.</li>
          <li>✅ إدارة المخزون.</li>
          <li>✅ تقارير احترافية.</li>
          <li>✅ دعم أجهزة الباركود والكاشير.</li>
          <li>✅ سرعة وأمان في حفظ البيانات.</li>
        </ul>

      </div>

      <div className="flex justify-center gap-4 mt-10">

        <Link
          href="/software"
          className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700 duration-300"
        >
          رجوع
        </Link>

        <a
          href="tel:07706216017"
          className="border border-red-600 px-6 py-3 rounded-lg hover:bg-red-600 duration-300"
        >
          اتصل الآن
        </a>

      </div>

    </main>
  );
}