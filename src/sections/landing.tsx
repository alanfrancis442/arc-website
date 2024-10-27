import { MdOutlineArrowOutward } from "react-icons/md";
import Nav from "../components/nav";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useThemeStore from "../hooks/themeStore";
import { FaDiscord, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Landing = () => {
  const words = ["Play.", "Reality.", "Gaming."];
  // const [isDark, setIsDarkMode] = useState(false);
  const { isDark, setTheme } = useThemeStore();

  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1, duration: 2 });
      tl.to(".anitext0", {
        y: "-120%",
      })
        .to(".anitext1", {
          y: "0%",
        })
        .to(".anitext1", {
          y: "-100%",
        })
        .to(".anitext2", {
          y: "0%",
        })
        .to(".anitext2", {
          y: "-100%",
        });
    },
    {
      scope: container,
    }
  );

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setTheme();

    gsap.to(container.current, {
      backgroundColor: newMode ? "#252525" : "#FEFEFE",
      color: newMode ? "#FFFFFF" : "#000000",
      duration: 0.5,
    });
  };

  return (
    <div
      ref={container}
      className={`min-h-screen w-full relative ${
        isDark ? "bg-[#252525] text-white" : "bg-[#FEFEFE] text-black"
      }`}
    >
      <div>
        <Nav />
        <img src="/stripe1.svg" alt="" />
        <div className="text-3xl font-bold absolute z-10 top-1/2 -translate-y-[50%] left-[15%] ">
          <div className="overflow-clip relative flex">
            <span className="font-[gilmer] md:text-6xl text-4xl">Redefine</span>{" "}
            <div className="relative h-16 ml-1">
              {words.map((word, index) => (
                <div
                  key={index}
                  className={`font-[gilmer] md:text-6xl text-4xl anitext${index}`}
                  style={{
                    transform: `translateY(${index * 100}%)`,
                  }}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`md:mt-4 md:px-6 px-2 py-1 ${
              isDark ? "bg-[#FEFEFE]" : "bg-[#252525]"
            } 
            ${isDark ? "text-black" : "text-white"}
            font-normal flex justify-center items-center gap-5 `}
          >
            launching soon{" "}
            <MdOutlineArrowOutward className="rotate-90 text-5xl font-mono " />
          </button>
        </div>
      </div>
      <div
        className="absolute flex flex-col md:right-24 right-1/2 max-sm:translate-x-[50%] top-1/2 max-sm:-translate-y-[40%] md:top-0 h-full text-[10rem] md:text-[14rem] font-[sentex] -translate-y-[8%] leading-tight"
        style={{
          WebkitTextStroke: isDark ? "1px #ffffff" : "2px #000000",
          color: isDark ? "#252525" : "#FFFFFF",
        }}
      >
        <span>c</span>
        <span>n</span>
        <span>s</span>
        <span>l</span>
      </div>
      <img
        className="absolute bottom-10 md:right-64"
        src="/stripe2.svg"
        alt=""
      />
      {
        <div className="absolute bottom-10 left-10 flex gap-4">
          <a href="#">
            <FaLinkedin className="text-2xl md:text-3xl" />
          </a>
          <a href="#">
            <FaXTwitter className="text-2xl md:text-3xl" />
          </a>
          <a href="#">
            <FaInstagram className="text-2xl md:text-3xl" />
          </a>
          <a href="#">
            <FaDiscord className="text-2xl md:text-3xl" />
          </a>
          <a href="#">
            <FaTelegram className="text-2xl md:text-3xl" />
          </a>
        </div>
      }
    </div>
  );
};

export default Landing;
