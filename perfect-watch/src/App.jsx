import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieContent from "./components/MovieContent";
import TvShowsContent from "./components/TvShowsContent";
import Picks from "./components/Picks";
import { Popup } from "./components/Popup";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [content, setContent] = useState("movies");
  const [picks, setPicks] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null); // ✅ moved to App level

  return (
    <div className="bg-gradient-to-b from-white to-indigo-400 relative">
      <Header setContent={setContent} />
      <AnimatePresence mode="wait">
        {content === "movies" && (
          <motion.div
            key="movies"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <MovieContent
              setPicks={setPicks}
              picks={picks}
              setSelectedMovieId={setSelectedMovieId}
            />
          </motion.div>
        )}
        {content === "picks" && (
          <motion.div
            key="picks"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Picks picks={picks} />
          </motion.div>
        )}
      </AnimatePresence>

      {selectedMovieId && (
        <Popup
          movie_id={selectedMovieId}
          setDisplayPopup={() => setSelectedMovieId(null)}
          picks={picks}
          setPicks={setPicks}
        />
      )}
    </div>
  );
}

export default App;
