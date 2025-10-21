import Header from "./components/Header";
import Stats from "./components/Stats";
import Courses from "./components/Courses";
import Conditions from "./components/Conditions";
import NewGen from "./components/NewGen";
import "./App.css";
import Header2 from "./components/header2";
import AboutNumbers from "./components/AboutNumbers";

function App() {
  return (
    <>
    <Header2 />
      <div className="relative max-w-full rounded-[10px] m-2 overflow-hidden flex items-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/main.webp"
          className="absolute top-0 right-0 w-1/2 h-full object-cover -z-10"
        >
          <source src="/video/home.webm" type="video/webm" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-[#010018] via-[#010018] to-transparent -z-[1]"></div>

        <div className="relative z-10 text-white w-full px-10 py-10 lg:px-20">
          <Header />
          <main className= "relative z-10 text-white w-full px-10 py-10 lg:px-20">
            <section className="mt-4">
              <h1 className="text-[42px] md:text-[62px] font-medium leading-tight">
                Авторские курсы от <br /> специалистов{" "}
                <span className="text-white">IT & Digital</span>
              </h1>
            </section>
            <Stats />
            <Courses />
          </main>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto my-2 font-sans">
        <Conditions />
      </div>

      <div className="bg-[#010018] max-w-full m-0 rounded-none p-0">
        <div className="max-w-[1240px] mx-auto">
          <NewGen />
        </div>
      </div>
      <div className="max-w-full m-0 rounded-none p-0">
        <div className="max-w-[1240px] mx-auto">
          <AboutNumbers />
        </div>
      </div>
    </>
  );
}

export default App;
