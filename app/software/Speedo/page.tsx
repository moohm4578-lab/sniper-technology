import Link from "next/link";

export default function speedoPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-10">
        سبيدو مبيعات
      </h1>

      <div className="max-w-5xl mx-auto bg-zinc-900 border border-red-700 rounded-2xl p-8">

        <h2 className="text-3xl font-bold mb-6 text-white">
          نظام سبيدو مبيعات
        </h2>

        <p className="text-gray-300 leading-8 mb-8">
          برنامج متكامل لإدارة المحلات والشركات، يوفر إدارة المبيعات والمشتريات
          والمخازن والعملاء والموردين والحسابات مع تقارير دقيقة وسهولة في الاستخدام.
        </p>

        <h3 className="text-2xl text-red-500 font-bold mb-4">
          المميزات
        </h3>

        <ul className="space-y-3 text-gray-300">
          <li>✅ إدارة المبيعات.</li>
          <li>✅ إدارة المشتريات.</li>
          <li>✅ إدارة المخازن.</li>
          <li>✅ إدارة العملاء والموردين.</li>
          <li>✅ تقارير يومية وشهرية.</li>
          <li>✅ دعم الباركود والطابعات.</li>
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