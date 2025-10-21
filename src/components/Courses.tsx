const courses = [
  "iOS/Android-разработчик",
  "React-разработчик",
  "Мобилограф PRO",
  "Интерьер-дизайнер",
  "Графический дизайнер",
  "SMM-специалист",
  "Компьютерная грамотность",
];

function Courses() {
  return (
    <section className="flex flex-wrap gap-2 mt-6 max-w-[900px]">
      <button className="flex items-center bg-[#f9e13e] text-black font-semibold px-4 py-2 rounded-lg gap-1 h-[35px] hover:bg-[#000] hover:opacity-50 hover:text-[#fff] cursor-pointer">Бесплатная консультация</button>
      <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg flex items-center gap-1 h-[35px] hover:bg-[#000] hover:opacity-50 hover:text-[#fff] cursor-pointer">
        <img src="/icons/lightning.svg" alt="" className="w-[22px] h-[22px] bg-[#ffcc00] rounded-full p-[2px]" /> Motion-дизайнер
      </button>
      <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg flex items-center gap-1 h-[35px] hover:bg-[#000] hover:opacity-50 hover:text-[#fff] cursor-pointer">Дизайнер соцсетей</button>
      <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg flex items-center gap-1 h-[35px] hover:bg-[#000] hover:opacity-50 hover:text-[#fff] cursor-pointer">Frontend-разработчик</button>

      {courses.map((course, i) => (
        <button key={i} className="bg-white text-black font-semibold px-4 py-2 rounded-lg flex items-center gap-1 h-[35px] hover:bg-[#000] hover:opacity-50 hover:text-[#fff] cursor-pointer">
          {course}
        </button>
      ))}
    </section>
  );
}

export default Courses;
