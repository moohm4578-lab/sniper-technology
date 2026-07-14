import Link from "next/link";

export default function AttendancePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-10">
        الحضور والانصراف
      </h1>


      <div className="max-w-5xl mx-auto bg-zinc-900 border border-red-700 rounded-xl p-8">


        <p className="text-gray-300 text-lg leading-10">
          إن برنامج سبيدو يدعم خاصية الحضور والانصراف وإمكانية إضافة الموظفين
          مع تحديد الرواتب وعدد ساعات العمل.
        </p>


        <div className="grid md:grid-cols-2 gap-4 mt-8">


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            إضافة الموظفين
          </div>


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            تسجيل الحضور والانصراف
          </div>


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            تحديد الرواتب
          </div>


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            تحديد ساعات العمل
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