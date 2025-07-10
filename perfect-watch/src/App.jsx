import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieContent from "./components/MovieContent";
import TvShowsContent from "./components/TvShowsContent";
import Picks from "./components/Picks";

function App() {
  const [content, setContent] = useState("movies");
  return (
    <div className="bg-linear-to-b from-white-400 to-indigo-400">
      <Header setContent={setContent} />
      {content == "movies" && <MovieContent />}
      {content == "shows" && <TvShowsContent />}
      {content == "picks" && <Picks />}
    </div>
  );
}

export default App;
