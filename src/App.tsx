import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import useThemeStore from "./hooks/themeStore";
import Landing from "./sections/landing";
import About from "./sections/about";

function App() {
  const { isDark } = useThemeStore();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return (
    <div
      className={isDark ? "dark-theme" : "light-theme"}
      style={{
        minHeight: "100vh",
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
