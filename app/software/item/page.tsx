import Link from "next/link";

export default function MaterialsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-10">
        واجهة إضافة المواد
      </h1>


      <div className="max-w-5xl mx-auto bg-zinc-900 border border-red-700 rounded-xl p-8">


        <p className="text-gray-300 text-lg leading-10">
          من خلال هذه الواجهة يمكن إضافة المواد بالطريقة العادية والسريعة،
          وإضافة منيو إلكتروني لعرض المنتجات على التابلت، وتحديد سعر المنتج،
          وإضافة الصور للمنتجات، وإضافة وحدة تعبئة ثانية وتحديد كمية التعبئة
          في الوحدة الثانية وتحديد سعرها.
        </p>


        <div className="grid md:grid-cols-2 gap-4 mt-8">


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            إضافة مادة جديدة
          </div>


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            الإضافة السريعة للمواد
          </div>


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            منيو إلكتروني للمنتجات
          </div>


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            إضافة صور المنتجات
          </div>


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            إضافة وحدة تعبئة ثانية
          </div>


          <div className="bg-black border border-red-700 rounded-xl p-4 text-center">
            تحديد سعر الوحدة
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