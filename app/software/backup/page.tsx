import Link from "next/link";

export default function BackupPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-10">
        النسخ الاحتياطي
      </h1>


      <div className="max-w-5xl mx-auto bg-zinc-900 border border-red-700 rounded-xl p-8">


        <p className="text-gray-300 text-lg leading-10">
          برنامج سبيدو يدعم حفظ البيانات عن طريق إجراء نسخ احتياطي لقاعدة
          البيانات واستعادتها بشكل سريع وسهل، مما يضمن حماية بيانات النظام
          والمحافظة عليها.
        </p>


        <div className="grid md:grid-cols-2 gap-4 mt-8">


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            إنشاء نسخة احتياطية
          </div>


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            استعادة قاعدة البيانات
          </div>


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            حفظ بيانات النظام
          </div>


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            حماية البيانات واسترجاعها بسهولة
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