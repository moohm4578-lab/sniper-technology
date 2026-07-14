import Link from "next/link";

export default function PrintingPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-10">
        نماذج الطباعة
      </h1>


      <div className="max-w-5xl mx-auto bg-zinc-900 border border-red-700 rounded-xl p-8">


        <p className="text-gray-300 text-lg leading-10">
          يوجد في نظام سبيدو أكثر من نموذج للطباعة ويتم التحكم بها بحرية،
          واختيار نموذج الطباعة عند حفظ الفاتورة، مع إمكانية تعديل التصميم
          من خلال النظام.
        </p>


        <div className="grid md:grid-cols-2 gap-4 mt-8">


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            نماذج متعددة للطباعة
          </div>


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            التحكم بتصميم الفاتورة
          </div>


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            اختيار نموذج الطباعة
          </div>


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            تعديل التصميم من داخل النظام
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