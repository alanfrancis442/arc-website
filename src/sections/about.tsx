import useThemeStore from "../hooks/themeStore";
import Nav from "../components/nav";
import Block from "../components/block";
import { useNavigate } from "react-router-dom";

const About = () => {
  const { isDark, setTheme } = useThemeStore();
  if (!isDark) {
    setTheme();
  }
  const navigate = useNavigate();
  return (
    <div className="bg-[rgba(37,37,37,1)] text-white  w-full overflow-hidden relative">
      <Nav />
      <div className="flex max-md:flex-col-reverse justify-between">
        <div className="md:w-1/3 w-3/5 md:p-32 p-12 pb-8 text-2xl h-full">
          <h3 className="mb-24 text-3xl text-nowrap">
            Where Imagination meets Innovation
          </h3>
          <p className="mb-12  text-[#C4C3C3]">
            ARC Console brings immersive gaming experiences to life with
            cutting-edge technology and sleek design, redefining the boundaries
            of interactive entertainment.{" "}
          </p>
          <p className="mb-12  text-[#C4C3C3]">
            Engineered for seamless performance, ARC Console offers gamers a
            gateway to an all-encompassing world of adventure, creativity, and
            connection.
          </p>
          <svg
            onClick={() => navigate("/")}
            width="103"
            height="95"
            viewBox="0 0 103 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.22581 10.45C2.58065 9.15 3.1648 6.61146 4.51613 5.25C5.86746 3.88854 8.38708 3.95004 9.67742 4.6C10.9677 5.24995 12.9032 7.2 12.9032 7.2L15.4839 9.8L19.3548 13.7L23.871 18.25L27.7419 21.5L29.6774 19.55V12.4V2H32.9032L35.4839 3.95005L38.0645 6.55L39.3548 8.5L40 13.7V18.25V24.1V28V31.25V33.85L39.3548 36.45L38.0645 37.75L36.129 39.05L34.1935 40.35L32.2581 41H29.6774H26.4516H21.9355H17.4194H13.5484H9.67742L6.45161 39.7L4.51613 38.4L2.58065 36.45L1.29032 33.85L0 31.25H3.87097H6.45161H9.03226H11.6129H14.1935H18.0645L20 28.65L17.4194 26.05L15.4839 24.1L12.9032 21.5L9.67742 18.25L7.09677 15.65C5.70296 14.1334 3.80283 11.6127 3.22581 10.45Z"
              fill="#FEFEFE"
            />
            <path
              d="M99.7742 85.55C100.419 86.85 99.8352 89.3885 98.4839 90.75C97.1325 92.1115 94.6129 92.05 93.3226 91.4C92.0323 90.7501 90.0968 88.8 90.0968 88.8L87.5161 86.2L83.6452 82.3L79.129 77.75L75.2581 74.5L73.3226 76.45V83.6V94H70.0968L67.5161 92.0499L64.9355 89.45L63.6452 87.5L63 82.3V77.75V71.9V68V64.75V62.15L63.6452 59.55L64.9355 58.25L66.871 56.95L68.8065 55.65L70.7419 55H73.3226H76.5484H81.0645H85.5806H89.4516H93.3226L96.5484 56.3L98.4839 57.6L100.419 59.55L101.71 62.15L103 64.75H99.129H96.5484H93.9677H91.3871H88.8065H84.9355L83 67.35L85.5806 69.95L87.5161 71.9L90.0968 74.5L93.3226 77.75L95.9032 80.35C97.297 81.8666 99.1972 84.3873 99.7742 85.55Z"
              fill="#FEFEFE"
            />
            <path
              d="M72.45 37.6935C71.15 38.3548 68.6115 37.7561 67.25 36.371C65.8885 34.9859 65.95 32.4032 66.6 31.0806C67.2499 29.7581 69.2 27.7742 69.2 27.7742L71.8 25.129L75.7 21.1613L80.25 16.5323L83.5 12.5645L81.55 10.5806H74.4H64V7.27419L65.9501 4.62903L68.55 1.98387L70.5 0.661289L75.7 0H80.25H86.1H90H93.25H95.85L98.45 0.661289L99.75 1.98387L101.05 3.96774L102.35 5.95161L103 7.93548V10.5806V13.8871V18.5161V23.1452V27.1129V31.0806L101.7 34.3871L100.4 36.371L98.45 38.3548L95.85 39.6774L93.25 41V37.0323V34.3871V31.7419V29.0968V26.4516V22.4839L90.65 20.5L88.05 23.1452L86.1 25.129L83.5 27.7742L80.25 31.0806L77.65 33.7258C76.1334 35.1545 73.6127 37.1021 72.45 37.6935Z"
              fill="#FEFEFE"
            />
            <path
              d="M33.55 58.2258C34.85 57.5806 37.3885 58.1648 38.75 59.5161C40.1115 60.8675 40.05 63.3871 39.4 64.6774C38.7501 65.9677 36.8 67.9032 36.8 67.9032L34.2 70.4839L30.3 74.3548L25.75 78.871L22.5 82.7419L24.45 84.6774H31.6H42V87.9032L40.0499 90.4839L37.45 93.0645L35.5 94.3548L30.3 95H25.75H19.9H16H12.75H10.15L7.55 94.3548L6.25 93.0645L4.95 91.129L3.65 89.1935L3 87.2581V84.6774V81.4516V76.9355V72.4194V68.5484V64.6774L4.3 61.4516L5.6 59.5161L7.55 57.5806L10.15 56.2903L12.75 55V58.871V61.4516V64.0323V66.6129V69.1935V73.0645L15.35 75L17.95 72.4194L19.9 70.4839L22.5 67.9032L25.75 64.6774L28.35 62.0968C29.8666 60.703 32.3873 58.8028 33.55 58.2258Z"
              fill="#FEFEFE"
            />
          </svg>
        </div>
        <div className="flex flex-col items-end gap-40 relative">
          <img height={400} width={400} src="/pattern.svg" alt="" />
          <div className="flex flex-col items-start md:absolute top-1/2 -translate-y-[45%]">
            <span className="md:text-6xl text-3xl font-[gilmer] ml-12">
              introducing
            </span>
            <br />
            <br />
            <br />
            <p className="md:text-[27rem] text-[16rem] font-[gilmer] leading-3 md:leading-10 ">
              arc
            </p>
          </div>
        </div>
        <div className="absolute bottom-10 right-32">
          <Block />
        </div>
      </div>
    </div>
  );
};

export default About;
