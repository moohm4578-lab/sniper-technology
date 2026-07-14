"use client";

import Link from "next/link";

const features = [
  "المبيعات",
  "تعدد العمليات",
  "واجهة فاتورة المشتريات",
  "واجهة الحسابات",
  "واجهة كشف حساب",
  "واجهة السندات",
  "واجهة التقارير",
  "واجهة الأقساط",
  "واجهة النقل المخزني",
  "واجهة إضافة العملاء",
  "واجهة إضافة المواد",
  "واجهة إضافة الأرصدة الأولية للمواد",
  "التصحيح المخزني والتلف",
  "واجهة إضافة المستخدمين",
  "الحضور والانصراف",
  "النسخ الاحتياطي",
  "نماذج الطباعة",
  "الطابعات والميزان الإلكتروني",
];

export default function SpeedoPage() {

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center mb-6">
        سبيدو مبيعات
      </h1>

      <p className="text-center text-gray-400 mb-12">
        نظام متكامل لإدارة المبيعات والمخازن والحسابات.
      </p>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {features.map((item,index)=>(
          
          index === 0 ? (

            <Link
              key={index}
              href="/sales"
              className="
              bg-zinc-900 
              border border-red-700 
              rounded-xl 
              p-5 
              hover:bg-red-700 
              transition
              "
            >
              <h3 className="text-lg font-bold text-center">
                {item}
              </h3>
            </Link>

          ) : (

            <div
              key={index}
              className="
              bg-zinc-900 
              border border-red-700 
              rounded-xl 
              p-5
              "
            >
              <h3 className="text-lg font-bold text-center">
                {item}
              </h3>
            </div>

          )

        ))}

      </div>


      <div className="flex justify-center mt-12">

        <Link
          href="/software"
          className="
          bg-red-600 
          px-8 
          py-3 
          rounded-lg 
          hover:bg-red-700 
          transition
          "
        >
          رجوع
        </Link>

      </div>

    </main>
  );
}