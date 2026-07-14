export default function SalesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-8">
        شرح المبيعات
      </h1>

      <p className="text-center text-gray-400 text-lg mb-12">
        نظام سبيدو يوفر إدارة كاملة لعمليات البيع والفواتير وطرق الدفع المتعددة.
      </p>


      <div className="max-w-6xl mx-auto bg-zinc-900 border border-red-700 rounded-2xl p-8">

        <h2 className="text-3xl text-red-500 font-bold mb-5">
          نظام المبيعات
        </h2>


        <p className="text-gray-300 leading-9 text-lg">
          يوفر نظام تعدد طرق المبيعات ضمن واجهة نقطة البيع السريعة
          وواجهة المبيعات المتقدمة وواجهة نقطة بيع الميزان،
          مع دعم خصائص الدفع المتعددة مثل النقد، الآجل، التوصيل،
          الواصل الجزئي، الأقساط، والفاتورة الدورية.
        </p>


        <div className="grid md:grid-cols-2 gap-6 mt-10">


          <div className="bg-black border border-red-700 rounded-xl p-6">

            <h3 className="text-2xl text-red-500 font-bold mb-5">
              طرق البيع
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>✔️ نقطة البيع السريعة</li>
              <li>✔️ واجهة المبيعات المتقدمة</li>
              <li>✔️ نقطة بيع الميزان الإلكتروني</li>

            </ul>

          </div>



          <div className="bg-black border border-red-700 rounded-xl p-6">

            <h3 className="text-2xl text-red-500 font-bold mb-5">
              طرق الدفع
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>💵 نقد</li>
              <li>📒 آجل</li>
              <li>🚚 توصيل</li>
              <li>🧾 واصل جزئي</li>
              <li>📅 أقساط</li>
              <li>🔁 فاتورة دورية</li>

            </ul>

          </div>


        </div>



        <div className="mt-10 bg-red-600 rounded-xl p-6">

          <h3 className="text-2xl font-bold mb-4">
            مميزات النظام
          </h3>

          <p className="leading-9">
            سرعة إصدار الفواتير، إدارة المخزون،
            متابعة الحسابات، تقارير دقيقة،
            ودعم الطابعات والميزان الإلكتروني.
          </p>

        </div>


      </div>

    </main>
  );
}