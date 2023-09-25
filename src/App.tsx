import Footer from "@/layouts/Footer";

// import mobileDesign from "@/age-calculator-app-main/design/mobile-design.jpg";
import arrowIcon from "@/assets/images/icon-arrow.svg";

function App() {
  return (
    <>
      {/* <img
        src={mobileDesign}
        alt=""
        className="absolute w-auto h-auto opacity-80"
      /> */}
      <div className="flex flex-col justify-between items-center w-full h-screen bg-[#F0F0F0]">
        <main className="w-[343px] rounded-3xl rounded-br-[99px] bg-white h-[485px] mt-[88px] flex flex-col gap-[63px]">
          <section className="grid w-full h-auto grid-cols-3 grid-rows-1 pt-[43px] px-6 gap-4">
            <div>
              <label
                htmlFor="day"
                className="invalid:text-[#FF5757] text-[12px] font-bold font-poppins tracking-[3px] text-[#716F6F]"
              >
                DAY
              </label>
              <input
                type="text"
                name="day"
                className="invalid:border-[#FF5757] focus:outline-none focus:border-[#854DFF] pl-[14px] mt-[3px] h-[54px] w-full border-[1px] rounded-md border-[#716F6F] font-poppins font-bold text-xl text-[#141414]"
                placeholder="DD"
              />
            </div>
            <div>
              <label
                htmlFor="month"
                className="invalid:text-[#FF5757] text-[12px] font-bold font-poppins tracking-[3px] text-[#716F6F]"
              >
                MONTH
              </label>
              <input
                type="text"
                name="month"
                className="invalid:border-[#FF5757] focus:outline-none focus:border-[#854DFF] pl-[14px] mt-[3px] h-[54px] w-full border-[1px] rounded-md border-[#716F6F] font-poppins font-bold text-xl text-[#141414]"
                placeholder="MM"
              />
            </div>
            <div>
              <label
                htmlFor="year"
                className="invalid:text-[#FF5757] text-[12px] font-bold font-poppins tracking-[3px] text-[#716F6F]"
              >
                YEAR
              </label>
              <input
                type="text"
                name="year"
                className="invalid:border-[#FF5757] focus:outline-none focus:border-[#854DFF] border-[1px] pl-[14px] mt-[3px] h-[54px] w-full rounded-md border-[#716F6F] font-poppins font-bold text-xl text-[#141414]"
                placeholder="YYYY"
              />
            </div>
          </section>
          <section className="relative w-full">
            <hr className="mx-6 border-t border-gray-300" />
            <button className="focus:outline-none hover:bg-[#141414] absolute flex items-center justify-center w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#854DFF] top-1/2 left-1/2 transition-all">
              <img src={arrowIcon} alt="arrow icon" className="h-7 w-7" />
            </button>
          </section>
          <section className="flex flex-col items-start gap-0 px-6">
            <div className="-mt-[10px]">
              <h1 className="text-[55px] font-extrabold font-poppins text-[#141414]">
                <span className="text-[#854DFF] mr-2">38</span>years
              </h1>
            </div>
            <div className="-mt-[20px]">
              <h1 className="text-[55px] font-extrabold font-poppins text-[#141414]">
                <span className="text-[#854DFF] mr-[10px]">3</span>months
              </h1>
            </div>
            <div className="-mt-[20px]">
              <h1 className="text-[55px] font-extrabold font-poppins text-[#141414]">
                <span className="text-[#854DFF] mr-[8px]">26</span>days
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
