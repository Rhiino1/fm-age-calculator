import Footer from "@/layouts/Footer";

import design from "@/age-calculator-app-main/design/desktop-design.jpg";
import arrowIcon from "@/assets/images/icon-arrow.svg";

function App() {
  return (
    <>
      {/* <img src={design} alt="" className="absolute w-auto h-auto opacity-80" /> */}
      <div className="flex flex-col justify-between items-center w-full h-screen bg-[#F0F0F0]">
        <main className="lg:flex-shrink-0 lg:w-[840px] lg:h-[651px] lg:mt-[154px] lg:rounded-br-[199px] lg:gap-[47px] w-[343px] rounded-3xl rounded-br-[99px] bg-white h-[485px] mt-[88px] flex flex-col gap-[63px]">
          <section className="grid lg:w-[656px] lg:gap-8 w-full h-auto grid-cols-3 grid-rows-1 lg:pt-[55px] pt-[43px] lg:px-14 px-6 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="day"
                className="lg:tracking-[5px] invalid:text-[#FF5757] text-[12px] font-bold font-poppins tracking-[3px] text-[#716F6F]"
              >
                DAY
              </label>
              <input
                type="text"
                name="day"
                className="lg:mt-[12px] lg:w-[160px] lg:h-[72px] lg:text-[32px] lg:pl-[22px] invalid:border-[#FF5757] focus:outline-none focus:border-[#854DFF] pl-[14px] mt-[3px] h-[54px] w-full border-[1px] rounded-md border-[#716F6F] font-poppins font-bold text-xl text-[#141414]"
                placeholder="DD"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="month"
                className="lg:tracking-[5px] invalid:text-[#FF5757] text-[12px] font-bold font-poppins tracking-[3px] text-[#716F6F]"
              >
                MONTH
              </label>
              <input
                type="text"
                name="month"
                className="lg:mt-[12px] lg:w-[160px] lg:h-[72px] lg:text-[32px] lg:pl-[22px] invalid:border-[#FF5757] focus:outline-none focus:border-[#854DFF] pl-[14px] mt-[3px] h-[54px] w-full border-[1px] rounded-md border-[#716F6F] font-poppins font-bold text-xl text-[#141414]"
                placeholder="MM"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="year"
                className="lg:tracking-[5px] invalid:text-[#FF5757] text-[12px] font-bold font-poppins tracking-[3px] text-[#716F6F]"
              >
                YEAR
              </label>
              <input
                type="text"
                name="year"
                className="lg:mt-[12px] lg:w-[160px] lg:h-[72px] lg:text-[32px] lg:pl-[22px] invalid:border-[#FF5757] focus:outline-none focus:border-[#854DFF] border-[1px] pl-[14px] mt-[3px] h-[54px] w-full rounded-md border-[#716F6F] font-poppins font-bold text-xl text-[#141414]"
                placeholder="YYYY"
              />
            </div>
          </section>
          <section className="relative w-full">
            <hr className="mx-6 border-t border-gray-300" />
            <button className="lg:left-full lg:-translate-x-[152.5px] lg:h-24 lg:w-24 focus:outline-none hover:bg-[#141414] absolute flex items-center justify-center w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#854DFF] top-1/2 left-1/2 transition-all">
              <img
                src={arrowIcon}
                alt="arrow icon"
                className="lg:h-11 lg:w-11 h-7 w-7"
              />
            </button>
          </section>
          <section className="flex flex-col items-start gap-0 px-6 lg:px-14 lg:pt-0">
            <div className="-mt-[10px] lg:-mt-[18px]">
              <h1 className="lg:text-[102px] text-[55px] font-extrabold font-poppins text-[#141414]">
                <span className="text-[#854DFF] lg:tracking-[-1px] tracking-[-5px] lg:mr-[9px] mr-2">- -</span>years
              </h1>
            </div>
            <div className="-mt-[20px] lg:-mt-[40px]">
              <h1 className="lg:text-[102px] text-[55px] font-extrabold font-poppins text-[#141414]">
                <span className="text-[#854DFF] lg:tracking-[-1px] tracking-[-5px] lg:mr-[12px] mr-[10px]">- -</span>months
              </h1>
            </div>
            <div className="-mt-[20px] lg:-mt-[40px]">
              <h1 className="lg:text-[102px] text-[55px] font-extrabold font-poppins text-[#141414]">
                <span className="text-[#854DFF] lg:tracking-[-1px] lg:mr-[10px] tracking-[-5px] mr-[8px]">- -</span>days
              </h1>
            </div>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
