import "./App.css";
import useThemeStore from "./hooks/themeStore";
import Landing from "./sections/landing";
// import Nav from "./components/nav";

function App() {
  const { isDark } = useThemeStore();
  return (
    <div className={isDark ? "dark-theme" : "light-theme"}>
      {/* <Nav /> */}
      <Landing />
    </div>
  );
}

export default App;
