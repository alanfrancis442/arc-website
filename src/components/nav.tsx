import useThemeStore from "../hooks/themeStore";
import Pattern from "./pattern";

const Nav = () => {
  const { isDark } = useThemeStore();

  return (
    <div
      className="flex items-center justify-between gap-8 md:gap-32 md:p-12 p-8  w-3/4 text-xl "
      style={{
        color: isDark ? "#FFFFFF" : "#000000",
      }}
    >
      <span className="font-[gilmer] md:text-3xl">arc</span>
      <hr className="h-[2px] bg-[#252525] w-full" />
      <Pattern />
    </div>
  );
};

export default Nav;
