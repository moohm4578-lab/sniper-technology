import Link from "next/link";

export default function UsersPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-10">
        واجهة إضافة المستخدمين
      </h1>

      <div className="max-w-5xl mx-auto bg-zinc-900 border border-red-700 rounded-xl p-8">

        <p className="text-gray-300 text-lg leading-10">
          يسمح البرنامج بتعدد المستخدمين مع إمكانية تخصيص صندوق ومخزن لكل موظف،
          مع خاصية الحماية لكل الفواتير والسندات والعملاء، وتظهر للمستخدم
          المعني فقط.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            إضافة مستخدم جديد
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            تحديد الصلاحيات
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            تخصيص صندوق
          </div>

          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            تخصيص مخزن
          </div>

        </div>

      </div>

      <div className="flex justify-center mt-10">
        <Link href="/software/Speedo" className="bg-red-600 px-8 py-3 rounded-lg hover:bg-red-700 transition">
          رجوع
        </Link>
      </div>

    </main>
  );
}