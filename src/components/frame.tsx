import useThemeStore from "../hooks/themeStore";

const Frame = ({ children }: { children: React.ReactNode }) => {
  const { isDark } = useThemeStore();

  const strokeColor = isDark ? "#FFFFFF" : "#252525";

  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg
        className="absolute top-0 left-0"
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 6V1H6" stroke={strokeColor} />
      </svg>

      <svg
        className="absolute top-0 right-0"
        width="5"
        height="6"
        viewBox="0 0 5 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1H4.5V6" stroke={strokeColor} />
      </svg>

      {children}

      <svg
        className="absolute bottom-0 left-0"
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 0V5H5.5" stroke={strokeColor} />
      </svg>

      <svg
        className="absolute bottom-0 right-0"
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 5H5V0" stroke={strokeColor} />
      </svg>
    </div>
  );
};

export default Frame;
