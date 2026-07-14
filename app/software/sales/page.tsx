import Link from "next/link";


export default function salespage(){

return (

<main className="min-h-screen bg-black text-white px-6 py-20">


<h1 className="text-5xl font-bold text-red-600 text-center mb-10">
شرح المبيعات
</h1>


<div className="max-w-5xl mx-auto bg-zinc-900 border border-red-700 rounded-xl p-8">


<p className="text-gray-300 text-lg leading-10">

يوفر نظام سبيدو مبيعات عدة طرق للبيع ضمن واجهة نقطة البيع السريعة
وواجهة المبيعات المتقدمة وواجهة نقطة بيع الميزان.

</p>


<h2 className="text-2xl text-red-500 font-bold mt-8">
طرق البيع
</h2>


<ul className="mt-4 space-y-3 text-gray-300">

<li>✔️ نقطة البيع السريعة</li>
<li>✔️ واجهة المبيعات المتقدمة</li>
<li>✔️ نقطة بيع الميزان</li>

</ul>


<h2 className="text-2xl text-red-500 font-bold mt-8">
طرق الدفع
</h2>


<ul className="mt-4 space-y-3 text-gray-300">

<li>💵 نقد</li>
<li>📒 أجل</li>
<li>🚚 توصيل</li>
<li>📅 أقساط</li>
<li>🔁 فاتورة دورية</li>

</ul>


</div>


<div className="flex justify-center mt-10">

<Link
href="/software"
className="bg-red-600 px-8 py-3 rounded-lg"
>
رجوع
</Link>

</div>


</main>

)

}