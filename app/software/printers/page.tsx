import Link from "next/link";

export default function PrintersPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-10">
        الطابعات والميزان الإلكتروني
      </h1>


      <div className="max-w-5xl mx-auto bg-zinc-900 border border-red-700 rounded-xl p-8">


        <p className="text-gray-300 text-lg leading-10">
          يسمح البرنامج بربط الطابعات والميزان الإلكتروني بما يناسب طبيعة عمل
          المجالات التجارية، وبشكل تلقائي مع مزامنة مباشرة وتحويل المواد من
          النظام إلى الميزان بشكل مباشر.
        </p>


        <div className="grid md:grid-cols-2 gap-4 mt-8">


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            ربط الطابعات بالنظام
          </div>


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            ربط الميزان الإلكتروني
          </div>


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            مزامنة مباشرة للبيانات
          </div>


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            تحويل المواد إلى الميزان
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