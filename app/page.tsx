import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
        <Image
  src="/logo.svg"
  alt="Sniper Techno Logo"
  width={180}
  height={180}
  unoptimized
  className="mb-8 rounded-full shadow-2xl shadow-red-600"
/>
        <h1 className="text-5xl md:text-7xl font-bold text-red-600">
          Sniper Techno
        </h1>

        <h2 className="text-2xl md:text-3xl mt-3 text-gray-300">
          قناص التكنولوجي
        </h2>

        <p className="max-w-3xl mt-8 text-lg text-gray-400 leading-8">
          نوفر أحدث الحلول التقنية للشركات والمحلات التجارية، من البرامج
          الحسابية وأنظمة نقاط البيع إلى أجهزة الباركود والطابعات والحاسبات
          ومنظومات الطاقة الشمسية.
        </p>

        <div className="flex gap-4 mt-10">
          <a
            href="#services"
            className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl font-bold duration-300"
          >
            خدماتنا
          </a>

          <a
            href="#contact"
            className="border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-3 rounded-xl duration-300"
          >
            تواصل معنا
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-8 bg-zinc-950">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-14">
          خدماتنا
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            "البرامج الحسابية",
            "نقاط البيع POS",
            "عدادات النقود",
            "قارئات الباركود",
            "أجهزة الحضور والانصراف",
            "حاسبات ولابتوبات",
            "الطابعات",
            "منظومات الطاقة الشمسية",
          ].map((item) => (
            <div
              key={item}
              className="bg-black border border-red-700 rounded-xl p-6 hover:scale-105 duration-300"
            >
              <h3 className="text-xl font-bold text-red-500 mb-3">
                {item}
              </h3>

              <p className="text-gray-400">
                حلول احترافية بأفضل جودة وأسعار منافسة.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 text-center">

        <h2 className="text-4xl text-red-600 font-bold mb-8">
          تواصل معنا
        </h2>

        <p className="text-lg">📞 07706216017</p>
        <p className="text-lg">📞 07775698303</p>

        <p className="mt-3">
          📧 moohm4578@gmail.com
        </p>

        <div className="flex justify-center gap-5 mt-8">

          <a
            href="https://www.facebook.com/profile.php?id=61576076312635"
            target="_blank"
            className="bg-red-600 px-6 py-3 rounded-lg"
          >
            Facebook
          </a>

          <a
            href="https://www.instagram.com/sniper_techno"
            target="_blank"
            className="bg-red-600 px-6 py-3 rounded-lg"
          >
            Instagram
          </a>

        </div>

      </section>

    </main>
  );
}