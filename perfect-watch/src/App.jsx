import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieContent from "./components/MovieContent";
import TvShowsContent from "./components/TvShowsContent";
import Picks from "./components/Picks";
import { motion, AnimatePresence } from "motion/react";

function App() {
  const [content, setContent] = useState("movies");
  const [picks, setPicks] = useState([]);
  return (
    <div className="bg-linear-to-b from-white-400 to-indigo-400 ">
      <Header setContent={setContent} />
      <AnimatePresence mode="wait">
        {content === "movies" && (
          <motion.div
            key="movies"
            initial={{ opacity: 0, transform: "translateX(-50px)" }}
            animate={{ opacity: 1, transform: "translateX(0px)" }}
            exit={{ opacity: 0, transform: "translateX(50px)" }}
            transition={{ duration: 0.3 }}
          >
            <MovieContent setPicks={setPicks} picks={picks} />
          </motion.div>
        )}

        {content === "picks" && (
          <motion.div
            key="picks"
            initial={{ opacity: 0, transform: "translateX(50px)" }}
            animate={{ opacity: 1, transform: "translateX(0px)" }}
            exit={{ opacity: 0, transform: "translateX(-50px)" }}
            transition={{ duration: 0.3 }}
          >
            <Picks picks={picks} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
