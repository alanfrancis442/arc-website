import useThemeStore from "../hooks/themeStore";

const Pattern = ({ scale = "150%" }: { scale?: string }) => {
  const { isDark } = useThemeStore();
  const strokeColor = isDark ? "#FFFFFF" : "#252525";
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // className="scale-150"
      style={{
        scale,
      }}
    >
      <path d="M10.5 15.5V11H15.5" stroke={strokeColor} />
      <path d="M0 11H4.5V15.5" stroke={strokeColor} />
      <path d="M4.5 0L4.5 4.5L-5.36442e-07 4.5" stroke={strokeColor} />
      <path d="M15.5 4.5L11 4.5V-5.36442e-07" stroke={strokeColor} />
    </svg>
  );
};

export default Pattern;
