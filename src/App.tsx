import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import useThemeStore from "./hooks/themeStore";
import Landing from "./sections/landing";
import About from "./sections/about";

const pageVariants = {
  initial: {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    // opacity: 0,
  },
  in: {
    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
    // opacity: 1,
  },
  out: {
    opacity: 0,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
};
const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 1,
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Landing />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <About />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const { isDark } = useThemeStore();

  return (
    <div
      className={isDark ? "dark-theme" : "light-theme"}
      style={{
        minHeight: "100vh",
      }}
    >
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
