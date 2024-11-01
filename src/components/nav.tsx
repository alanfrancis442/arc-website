import { useLocation } from "react-router-dom";
import useThemeStore from "../hooks/themeStore";
import Pattern from "./pattern";

const Nav = () => {
  const { isDark } = useThemeStore();
  const location = useLocation();
  return (
    <div
      className="flex items-center justify-between gap-8 md:gap-32 md:p-12 p-8  w-3/4 text-xl relative"
      style={{
        color: isDark ? "#FFFFFF" : "#000000",
      }}
    >
      <span className="font-[gilmer] md:text-3xl">arc</span>
      <hr className="h-[2px] bg-[#252525] w-full" />
      <Pattern />
      <div
        style={{
          display: location.pathname === "/about" ? "none" : "block",
        }}
        className="absolute right-12 top-[500%]"
      >
        <Pattern />
      </div>
    </div>
  );
};

export default Nav;
