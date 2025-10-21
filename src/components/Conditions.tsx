function Conditions() {
  const items = [
    { icon: "/icons/4k.svg", title: "Мощные компьютеры", text: "Оборудованные классы для комфортного образовательного процесса." },
    { icon: "/icons/icon.svg", title: "Мобильное приложение", text: "Войдите в личный кабинет через веб-приложение для студентов." },
    { icon: "/icons/person.svg", title: "Лучшие специалисты", text: "Мы гордимся тем, что работаем с профессионалами, делающими процесс обучения увлекательным и эффективным." },
    { icon: "/icons/pc.svg", title: "Бесплатный коворкинг", text: "Приходите в свободное время и выполняйте задания в нашем центре. Доступно бесплатно для всех учащихся." },
    { icon: "/icons/gift.svg", title: "Призы за обучение", text: "Получайте такие призы как Яндекс Станция, Apple AirPods или Mi Band за высокие оценки." },
  ];

  return (
    <section className="max-w-[1100px] mx-auto my-20 px-5 text-center text-[#0b0b3b]">
      <h2 className="text-[38px] font-bold leading-snug">
        Идеальные условия для твоего <br />
        <span className="bg-gradient-to-r from-[#736ff5] to-[#f15bb5] text-transparent bg-clip-text">
          успешного образования
        </span>
      </h2>

      <div className="grid [grid-template-columns:repeat(1,minmax(100px,1fr))] sm:[grid-template-columns:repeat(1,minmax(50px,1fr))] md:[grid-template-columns:repeat(2,minmax(50px,1fr))] lg:[grid-template-columns:repeat(auto-fit,minmax(340px,1fr))] gap-10 mt-14 text-left justify-center">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-5">
            <div className="flex items-center justify-center rounded-full sm:min-w-[30px] lg:min-w-[100px]">
              <img src={item.icon} alt="" />
            </div>
            <div className="min-w-[440px]">
              <h3 className="text-[30px] font-medium text-[#050a41] mb-1">{item.title}</h3>
              <p className="text-[#7d7f95] text-[16px] leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Conditions;
