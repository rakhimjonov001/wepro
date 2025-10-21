function Header() {
  return (
    <header className="flex justify-between items-center px-10 md:px-20 text-white font-sans">
      <div className="flex items-center gap-10">
        <img src="/icons/logo-white.svg" className="" alt="logo" />
        <nav className="flex gap-5 text-base">
          <a href="#" className="hover:opacity-70">Главная</a>
          <a href="#" className="hover:opacity-70">Курсы и цены</a>
          <a href="#" className="hover:opacity-70">Запись в группу</a>
          <a href="#" className="hover:opacity-70">Партнерам</a>
        </nav>
      </div>

      <div className="flex items-center gap-5">
        <span className="font-semibold">RU</span>
        <span className="font-semibold">+998 78 113-70-05</span>
        <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:opacity-70">Личный кабинет</button>
      </div>
    </header>
  );
}

export default Header;
