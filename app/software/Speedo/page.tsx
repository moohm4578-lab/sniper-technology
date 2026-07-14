"use client";

import Link from "next/link";

const features = [
  { title: "المبيعات", link: "/software/sales" },
  { title: "تعدد العمليات", link: "/software/operations" },
  { title: "واجهة فاتورة المشتريات", link: "/software/purchases" },
  { title: "واجهة الحسابات", link: "/software/accounts" },
  { title: "واجهة كشف حساب", link: "/software/account-statement" },
  { title: "واجهة السندات", link: "/software/vouchers" },
  { title: "واجهة التقارير", link: "/software/reports" },
  { title: "واجهة الأقساط", link: "/software/installments" },
  { title: "واجهة النقل المخزني", link: "/software/warehouse" },
  { title: "واجهة إضافة العملاء", link: "/software/customers" },
  { title: "واجهة إضافة المواد", link: "/software/materials" },
  { title: "واجهة إضافة الأرصدة الأولية للمواد", link: "/software/opening-stock" },
  { title: "التصحيح المخزني والتلف", link: "/software/inventory-adjustment" },
  { title: "واجهة إضافة المستخدمين", link: "/software/users" },
  { title: "الحضور والانصراف", link: "/software/attendance" },
  { title: "النسخ الاحتياطي", link: "/software/backup" },
  { title: "نماذج الطباعة", link: "/software/printing" },
  { title: "الطابعات والميزان الإلكتروني", link: "/software/printers" },
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

        {features.map((item, index) => (

          <Link
            key={index}
            href={item.link}
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
              {item.title}
            </h3>

          </Link>

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