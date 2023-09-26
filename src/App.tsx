import Footer from "@/layouts/Footer";

import arrowIcon from "@/assets/images/icon-arrow.svg";
import { useState } from "react";

function App() {
  const [date, setDate] = useState({ days: "--", months: "--", years: "--" });
  const [age, setAge] = useState({ days: "--", months: "--", years: "--" });

  const [errorMsg, setErrorMsg] = useState({ days: "", months: "", years: "" });

  const { days, months, years } = date;

  const handleClickBtn = () => {
    let valor = handleInvalidDate();
    console.log(valor);
    if (!valor) return;

    const currentDate = new Date();

    const date = new Date(
      parseInt(years),
      parseInt(months) - 1,
      parseInt(days)
    );

    const calcDate = currentDate.getTime() - date.getTime();

    const fullYears = calcDate / (1000 * 60 * 60 * 24 * 365.25);

    let calcYears = Math.floor(fullYears);
    let calcMonths = Math.floor((fullYears - calcYears) * 12);
    let calcDays = 0;

    if (currentDate.getDate() >= parseInt(days)) {
      calcDays = currentDate.getDate() - parseInt(days);
    } else {
      const lastDayLastMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
      calcDays = lastDayLastMonth - parseInt(days) + currentDate.getDate();
    }

    setAge({
      years: calcYears.toString(),
      months: calcMonths.toString(),
      days: calcDays.toString(),
    });
  };

  const handleInvalidDate = () => {
    if (
      errorMsg.days === "This field is required" ||
      errorMsg.days === "Must be a valid day" ||
      errorMsg.months === "This field is required" ||
      errorMsg.months === "Must be a valid month" ||
      errorMsg.years === "This field is required" ||
      errorMsg.years === "Must be a valid year" ||
      days === "--" ||
      months === "--" ||
      years === "--"
    ) {
      setErrorMsg(() => {
        return { days: "Invalid date", months: "", years: "" };
      });
      return false;
    }
    return true;
  };

  const handleDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate((date) => {
      return {
        ...date,
        days: e.target.value,
      };
    });

    if (e.target.value === "") {
      setErrorMsg((value) => {
        return { ...value, days: "This field is required" };
      });
    } else if (
      !RegExp(/^[0-9]*$/).test(e.target.value) ||
      parseInt(e.target.value) > 31 ||
      parseInt(e.target.value) < 1
    ) {
      setErrorMsg((value) => {
        return { ...value, days: "Must be a valid day" };
      });
    } else {
      setErrorMsg((value) => {
        return { ...value, days: "" };
      });
    }
  };
  const handleMonthsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate((date) => {
      return {
        ...date,
        months: e.target.value,
      };
    });

    if (e.target.value === "") {
      setErrorMsg((value) => {
        return { ...value, months: "This field is required" };
      });
    } else if (
      !RegExp(/^[0-9]*$/).test(e.target.value) ||
      parseInt(e.target.value) > 12 ||
      parseInt(e.target.value) < 1
    ) {
      setErrorMsg((value) => {
        return { ...value, months: "Must be a valid month" };
      });
    } else {
      setErrorMsg((value) => {
        return { ...value, months: "" };
      });
    }
  };
  const handleYearsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate((date) => {
      return {
        ...date,
        years: e.target.value,
      };
    });

    if (e.target.value === "") {
      setErrorMsg((value) => {
        return { ...value, years: "This field is required" };
      });
    } else if (
      !RegExp(/^[0-9]*$/).test(e.target.value) ||
      parseInt(e.target.value) > new Date().getFullYear()
    ) {
      setErrorMsg((value) => {
        return { ...value, years: "Must be in the past" };
      });
    } else {
      setErrorMsg((value) => {
        return { ...value, years: "" };
      });
    }
  };
  return (
    <>
      <div className="flex flex-col justify-between items-center w-full h-screen bg-[#F0F0F0]">
        <main className="lg:flex-shrink-0 lg:w-[840px] lg:h-[651px] lg:mt-[154px] lg:rounded-br-[199px] lg:gap-[47px] w-[343px] rounded-3xl rounded-br-[99px] bg-white h-[485px] mt-[88px] flex flex-col gap-[63px]">
          <section className="grid lg:w-[656px] lg:gap-8 w-full h-auto grid-cols-3 grid-rows-1 lg:pt-[55px] pt-[43px] lg:px-14 px-6 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="day"
                className={`lg:tracking-[5px] ${
                  errorMsg.days !== "" ? "text-[#FF5757]" : ""
                } text-[12px] font-bold font-poppins tracking-[3px] text-[#716F6F]`}
              >
                DAY
              </label>
              <input
                type="text"
                name="day"
                className={`lg:mt-[12px] lg:w-[160px] lg:h-[72px] lg:text-[32px] lg:pl-[22px] ${
                  errorMsg.days !== ""
                    ? "border-[#FF5757] focus:border-[#FF5757]"
                    : ""
                } focus:outline-none focus:border-[#854DFF] pl-[14px] mt-[3px] h-[54px] w-full border-[1px] rounded-md border-[#716F6F] font-poppins font-bold text-xl text-[#141414]`}
                placeholder="DD"
                onChange={(e) => {
                  handleDaysChange(e);
                }}
              />
              <span className="font-poppins text-[14px] italic font-normal text-[#FF5757]">
                {errorMsg.days}
              </span>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="month"
                className={`lg:tracking-[5px] ${
                  errorMsg.months !== "" ? "text-[#FF5757]" : ""
                } text-[12px] font-bold font-poppins tracking-[3px] text-[#716F6F]`}
              >
                MONTH
              </label>
              <input
                type="text"
                name="month"
                className={`lg:mt-[12px] lg:w-[160px] lg:h-[72px] lg:text-[32px] lg:pl-[22px] ${
                  errorMsg.months !== ""
                    ? "border-[#FF5757] focus:border-[#FF5757]"
                    : ""
                } focus:outline-none focus:border-[#854DFF] pl-[14px] mt-[3px] h-[54px] w-full border-[1px] rounded-md border-[#716F6F] font-poppins font-bold text-xl text-[#141414]`}
                placeholder="MM"
                onChange={(e) => {
                  handleMonthsChange(e);
                }}
              />
              <span className="font-poppins text-[14px] italic font-normal text-[#FF5757]">
                {errorMsg.months}
              </span>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="year"
                className={`lg:tracking-[5px] ${
                  errorMsg.years !== "" ? "text-[#FF5757]" : ""
                } text-[12px] font-bold font-poppins tracking-[3px] text-[#716F6F]`}
              >
                YEAR
              </label>
              <input
                type="text"
                name="year"
                className={`lg:mt-[12px] lg:w-[160px] lg:h-[72px] lg:text-[32px] lg:pl-[22px] ${
                  errorMsg.years !== ""
                    ? "border-[#FF5757] focus:border-[#FF5757]"
                    : ""
                } focus:outline-none focus:border-[#854DFF] border-[1px] pl-[14px] mt-[3px] h-[54px] w-full rounded-md border-[#716F6F] font-poppins font-bold text-xl text-[#141414]`}
                placeholder="YYYY"
                onChange={(e) => {
                  handleYearsChange(e);
                }}
              />
              <span className="font-poppins text-[14px] italic font-normal text-[#FF5757]">
                {errorMsg.years}
              </span>
            </div>
          </section>
          <section className="relative w-full">
            <hr className="mx-6 border-t border-gray-300" />
            <button
              onClick={handleClickBtn}
              className="lg:left-full lg:-translate-x-[152.5px] lg:h-24 lg:w-24 focus:outline-none hover:bg-[#141414] absolute flex items-center justify-center w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#854DFF] top-1/2 left-1/2 transition-all"
            >
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
                <span className="text-[#854DFF] lg:mr-[9px] mr-2">
                  {age.years}
                </span>
                years
              </h1>
            </div>
            <div className="-mt-[20px] lg:-mt-[40px]">
              <h1 className="lg:text-[102px] text-[55px] font-extrabold font-poppins text-[#141414]">
                <span className="text-[#854DFF] lg:mr-[12px] mr-[0px]">
                  {age.months}
                </span>
                months
              </h1>
            </div>
            <div className="-mt-[20px] lg:-mt-[40px]">
              <h1 className="lg:text-[102px] text-[55px] font-extrabold font-poppins text-[#141414]">
                <span className="text-[#854DFF] lg:mr-[10px] mr-[8px]">
                  {age.days}
                </span>
                days
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
