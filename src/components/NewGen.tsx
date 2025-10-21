function NewGen() {
  const list = [
    { icon: "/icons/new-login.svg", text: "Войдите в аккаунт по номеру телефона" },
    { icon: "/icons/new-attendance.svg", text: "Просматривайте свои оценки и посещаемость" },
    { icon: "/icons/new-top.svg", text: "Зарабатывайте монеты и продвигайтесь в ТОП" },
    { icon: "/icons/new-shop.svg", text: "Обменивайте монеты на призы" },
    { icon: "/icons/new-heart.svg", text: "Участвуйте в раздаче ценных призов" },
  ];

  return (
    <>
      <section className="py-20 text-white">
        <div className="flex flex-wrap justify-center items-center max-w-[1100px] mx-auto">
          <div className="flex-1 min-w-[300px] text-center md:text-left">
            <h2 className="text-3xl font-bold leading-snug text-center md:translate-x-[300px] md:-translate-y-[30px]">
              Теперь мы <br />
              <span className="bg-gradient-to-r from-[#736ff5] to-[#f15bb5] text-transparent bg-clip-text">
                школа нового поколения
              </span>
            </h2>

            <div className="flex flex-col gap-6 mt-10 md:translate-x-[100px]">
              {list.map((item, i) => (
                <div key={i} className="flex items-center gap-4 border-b border-white/10 pb-4 w-[275px] mx-auto md:mx-0">
                  <div className="rounded-full bg-white/10 flex items-center justify-center">
                    <img src={item.icon} alt="" />
                  </div>
                  <p className="text-[#e5e5e5] text-base">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
            <div className="w-[511px] h-[552px] translate-y-[100px] bg-white/10 rounded-[40px] backdrop-blur-md flex items-center justify-center">
              <img loading="lazy" className="w-[511px] h-[552px] object-contain" src="/images/img.webp" alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center max-w-[1100px] mx-auto pt-36">
          <div className="flex-1 min-w-[300px] flex justify-center md:justify-start">
            <img src="/images/img2.webp" alt="" className="max-w-[350px]" />
          </div>
          <div className="flex-1 flex flex-col items-start mt-10 md:mt-0">
            <h2 className="text-[38px] leading-[36px] font-inter mb-8">
              Попади в топ и забирай <br /> крутые призы
            </h2>
            <img src="/images/new-prizes.webp" alt="" className="max-w-[400px]" />
            <button className="bg-white text-[#050a41] w-[185px] h-[46px] rounded-md mt-5 flex items-center justify-center text-lg font-inter hover:opacity-60">
              <img src="/icons/flash-animate.svg" alt="" className="w-6 h-6 mr-2" /> Оставить заявку
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1100px] mx-auto pt-32 md:pt-40 gap-10">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-[32px] md:text-[38px] font-bold leading-tight mb-8 text-center md:text-left">
              Обменивай монеты <br /> в центре призов
            </h2>

            <div className="w-[504px] h-[336px]">
              <img src="/images/new-3.webp" alt="" />
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/images/new-prizes-center.webp"
              alt="Центр призов"
              className="w-[300px] md:w-[360px] lg:w-[375px] object-contain drop-shadow-2xl translate-x-[-130px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default NewGen;
