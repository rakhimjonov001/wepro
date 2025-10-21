import { useEffect, useState } from "react";

function Header2() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
 className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        visible
          ? "translate-y-0 bg-white shadow-md"
          : "-translate-y-full bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-3">
        
        <div className="flex items-center space-x-2">
          <img src="/icons/logo-classic.svg" alt="Logo" className="w-[120px] h-[32px]" />
          
        </div>

        
       <nav className="flex gap-5 text-base translate-x-[-117px]">
          <a href="#" className="hover:opacity-70">Главная</a>
          <a href="#" className="hover:opacity-70">Курсы и цены</a>
          <a href="#" className="hover:opacity-70">Запись в группу</a>
          <a href="#" className="hover:opacity-70">Партнерам</a>
        </nav>

       
        <div className="flex items-center space-x-4">
            <span className="font-semibold text-gray-900">RU</span>
          <span className="font-semibold text-gray-900">+998 78 113-70-05</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg hover:opacity-70">
            Личный кабинет
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header2
