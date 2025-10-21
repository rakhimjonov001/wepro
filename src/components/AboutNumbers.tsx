
export default function AboutNumbers() {
  return (
    <section className="bg-white text-[#010018] py-10 px-4 md:px-8 font-sans">
        <div className="flex justify-center items-center pb-[50px] text-[38px] font-[700] text-[#050A41]">
            О нас в цифрах
        </div>
      <div className="wrapper grid grid-cols-1 md:grid-cols-3 gap-5 items-center justify-center max-w-[1100px] mx-auto">
        <div className="video w-full rounded-xl overflow-hidden shadow-lg">
          <video
            autoPlay
            muted
            loop
            playsInline
           
            className="w-full h-64 md:h-[448px] object-cover"
          >
            <source src="/video/about-numbers.webm" type="video/webm" />
          
          </video>
        </div>

        <aside className="flex flex-col gap-4 text-[#050A41]">
          <div className="card bg-gray-50 rounded-xl p-5 shadow-sm h-[138px]">
            <span className="h2 text-3xl md:text-4xl font-bold">3000+</span>
            <span className="note text-sm text-gray-600 mt-1 block">
              выпускников за 5 лет работы
            </span>
          </div>

          <div className="card bg-gray-50 rounded-xl p-5 shadow-sm h-[138px]">
            <span className="h2 text-3xl md:text-4xl font-bold">70%</span>
            <span className="note text-sm text-gray-600 mt-1 block">
              студентов находят работу после обучения
            </span>
          </div>

          <div className="card bg-gray-50 rounded-xl p-5 shadow-sm h-[138px]">
            <span className="h2 text-3xl md:text-4xl font-bold">24/7</span>
            <span className="note text-sm text-gray-600 mt-1 block">
              доступ к учебному материалу в группе
            </span>
          </div>
        </aside>

        <aside className="flex flex-col gap-4 text-[#050A41]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://yandex.uz/maps/org/wepro/93411850687/reviews/?ll=66.923115%2C39.650842&amp;z=16"
          >
            <div className="card bg-gray-50 rounded-xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition h-[138px]">
              <span className="h2 text-2xl font-semibold">73 отзыва</span>
              <img
                src="/icons/yandex-logo-full.svg"
                alt="Yandex"
                className="w-[116px] h-[28px] object-contain"
                loading="lazy"
              />
            </div>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/Wepro/@39.6539684,66.920553,17z/data=!4m8!3m7!1s0x3f4d192aed22c9b3:0xa86ef894a370a710!8m2!3d39.6539643!4d66.9231279!9m1!1b1!16s%2Fg%2F11m_g21hs2?entry=ttu"
          >
            <div className="card bg-gray-50 rounded-xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition h-[138px]">
              <span className="h2 text-2xl font-semibold">16 отзывов</span>
              <img
                src="/icons/google-logo-full.svg"
                alt="Google"
                className="w-[116px] h-[28px] object-contain"
                loading="lazy"
              />
            </div>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/@Wepro-ll7mv/shorts"
          >
            <div className="card bg-gray-50 rounded-xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition h-[138px]">
              <span className="h2 text-2xl font-semibold">15 отзывов</span>
              <img
                src="/icons/youtube-logo-full.svg"
                alt="YouTube"
                className="w-[116px] h-[28px] object-contain"
                loading="lazy"
              />
            </div>
          </a>
        </aside>
      </div>
    </section>
  );
}
