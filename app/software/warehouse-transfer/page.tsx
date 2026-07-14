import Link from "next/link";

export default function WarehousePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-10">
        واجهة النقل المخزني
      </h1>

      <div className="max-w-5xl mx-auto bg-zinc-900 border border-red-700 rounded-xl p-8">

        <p className="text-gray-300 text-lg leading-10">
          أن برنامج سبيدو لإدارة المبيعات يدعم تعدد المخازن ويتيح من خلال هذه
          الواجهة إمكانية نقل المواد والبضاعة بين المخازن ضمن سندات مناقلة
          مخزنية.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            إنشاء مناقلة مخزنية
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            اختيار المخزن المصدر
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            اختيار المخزن المستلم
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            نقل المواد والبضاعة
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center md:col-span-2">
            متابعة سندات المناقلة المخزنية
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