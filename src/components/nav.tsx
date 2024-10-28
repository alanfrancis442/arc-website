import useThemeStore from "../hooks/themeStore";

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
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.5 15.5V11H15.5" stroke="#252525" />
        <path d="M0 11H4.5V15.5" stroke="#252525" />
        <path d="M4.5 0L4.5 4.5L-5.36442e-07 4.5" stroke="#252525" />
        <path d="M15.5 4.5L11 4.5V-5.36442e-07" stroke="#252525" />
      </svg>
    </div>
  );
};

export default Nav;
