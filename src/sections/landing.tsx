import Nav from "../components/nav";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useThemeStore from "../hooks/themeStore";
import { FaDiscord, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Frame from "../components/frame";
import { ImRocket } from "react-icons/im";
import SmallFrame from "../components/smallFrame";

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
      className={`h-screen w-full relative overflow-hidden ${
        isDark ? "bg-[rgba(37,37,37,1)] text-white" : "bg-[#FEFEFE] text-black"
      }`}
    >
      <div>
        <Nav />
        <img src="/stripe1.svg" alt="" />
        <img
          className="absolute top-0 right-0 z-50"
          src="/stripe3.svg"
          alt=""
        />

        <div className="text-3xl font-bold absolute z-10 top-1/2 -translate-y-[50%] md:left-[15%] left-10 ">
          <div className="overflow-clip relative flex md:mb-4">
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
          <SmallFrame>
            <button
              onClick={toggleDarkMode}
              className={` md:px-6 px-2 py-2 ${
                isDark ? "bg-[#FEFEFE]" : "bg-[#252525] rounded"
              } 
            ${isDark ? "text-black" : "text-white"}
            font-normal flex justify-center items-center gap-5 max-sm:text-lg `}
            >
              launching soon <ImRocket />
              {/* <MdOutlineArrowOutward className="rotate-90 md:text-5xl font-mono " /> */}
            </button>
          </SmallFrame>
        </div>
      </div>

      <div
        className="absolute flex flex-col right-24 max-sm:translate-x-[50%]   top-0 h-full text-[10rem] md:text-[14rem] font-[sentex] -translate-y-[8%] leading-tight"
        style={{
          WebkitTextStroke: isDark ? "1px #ffffff" : "2px #000000",
          color: isDark ? "#252525" : "#FFFFFF",
        }}
      >
        <span>c</span>

        <Frame>
          <span>n</span>
          <span>s</span>
        </Frame>
        <span>l</span>
        <span className="md:hidden">c</span>
        <span className="md:hidden">n</span>
        <span className="md:hidden">s</span>
        <span className="md:hidden">l</span>
      </div>
      <img
        className="absolute bottom-10 md:right-64"
        src="/stripe2.svg"
        alt=""
      />
      {
        <div className="absolute bottom-10 left-10 flex gap-8">
          <a href="#">
            <FaLinkedin className="text-xl md:text-2xl" />
          </a>
          <a href="#">
            <FaXTwitter className="text-xl md:text-2xl" />
          </a>
          <a href="#">
            <FaInstagram className="text-xl md:text-2xl" />
          </a>
          <a href="#">
            <FaDiscord className="text-xl md:text-2xl" />
          </a>
          <a href="#">
            <FaTelegram className="text-xl md:text-2xl" />
          </a>
        </div>
      }
    </div>
  );
};

export default Landing;
