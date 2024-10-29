import Nav from "../components/nav";
import { useRef } from "react";
import gsap from "gsap";
import useThemeStore from "../hooks/themeStore";
import { FaDiscord, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Frame from "../components/frame";
import { ImRocket } from "react-icons/im";
import SmallFrame from "../components/smallFrame";
import { useGSAP } from "@gsap/react";
import Stripe from "../components/stripe";

const Landing = () => {
  const words = ["Play.", "Reality.", "Gaming."];
  const { isDark, setTheme } = useThemeStore();
  const container = useRef<HTMLDivElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

      words.forEach((word, wordIndex) => {
        const letters = word.split("");
        letters.forEach((_, letterIndex) => {
          tl.fromTo(
            `.anitext${wordIndex} .letter${letterIndex}`,
            { y: 50 },
            {
              y: wordIndex === 0 ? 0 : `${-100 * wordIndex}%`,

              duration: 0.5,
              ease: "power2.inOut",
              delay: letterIndex * 0.05,
            },
            wordIndex * 1.5
          ).to(
            `.anitext${wordIndex} .letter${letterIndex}`,
            {
              y: -100 * (wordIndex + 0.65),

              duration: 0.6,
              ease: "power2.inOut",
              delay: letterIndex * 0.05,
            },
            wordIndex * 1.5 + 1.5
          );
        });
      });
    },
    {
      scope: textContainer,
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
      className={`h-[100dvh] w-full relative overflow-hidden ${
        isDark ? "bg-[rgba(37,37,37,1)] text-white" : "bg-[#FEFEFE] text-black"
      }`}
    >
      <div>
        <Nav />
        <Stripe />

        <div className="text-3xl font-bold absolute z-10 top-1/2 -translate-y-[50%] md:left-[15%] left-5 ">
          <div className="overflow-clip relative flex md:mb-4">
            <span className="font-[gilmer] md:text-6xl text-3xl">Redefine</span>{" "}
            <div
              ref={textContainer}
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
              className="relative md:h-16 h-10  ml-1"
            >
              {words.map((word, wordIndex) => (
                <div
                  key={wordIndex}
                  className={`font-[gilmer] md:text-6xl text-3xl anitext${wordIndex}`}
                >
                  {word.split("").map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className={`inline-block letter${letterIndex} ${
                        isDark ? "text-[#FEFEFE]" : "text-[#252525]"
                      }`}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <SmallFrame>
            <button
              onClick={toggleDarkMode}
              className={` md:px-6 px-2 py-2 rounded font-[gilmer] ${
                isDark ? "bg-[#FEFEFE]" : "bg-[#252525] "
              } 
            ${isDark ? "text-black" : "text-white"}
            font-normal flex justify-center items-center md:gap-5 gap-3 max-sm:text-sm `}
            >
              launching soon <ImRocket />
            </button>
          </SmallFrame>
        </div>
      </div>

      <div
        className="absolute flex flex-col md:right-24 right-0 top-0 h-full text-[10rem] md:text-[14rem] font-[sentex] -translate-y-[8%] leading-tight "
        style={{
          WebkitTextStroke: isDark ? "1px #ffffff" : "2px #000000",
          color: isDark ? "#252525" : "#FFFFFF",
        }}
      >
        <span className="md:mx-2">c</span>

        <Frame>
          <span className="md:mx-2">n</span>
          <span className="md:mx-2">s</span>
        </Frame>
        <span className="md:mx-2">l</span>
        <span className="md:hidden md:mx-2">c</span>
        <span className="md:hidden md:mx-2">n</span>
        <span className="md:hidden md:mx-2">s</span>
        <span className="md:hidden md:mx-2">l</span>
      </div>
      <div className="absolute top-1/4 right-4">
        <Stripe id={3} />
      </div>
      <div className="absolute bottom-10 md:right-64">
        <Stripe id={2} />
      </div>
      <div className="absolute bottom-10 md:left-10 left-8 flex md:gap-8 gap-3">
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
    </div>
  );
};

export default Landing;
