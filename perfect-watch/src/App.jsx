import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieContent from "./components/MovieContent";
import TvShowsContent from "./components/TvShowsContent";
import Picks from "./components/Picks";

function App() {
  const [content,setContent] = useState('movies')
  return (
    <>
      <Header setContent={setContent}/>
      {content == 'movies' && <MovieContent/>}
      {content == 'shows' && <TvShowsContent/>}
      {content == 'picks' && <Picks/>}
    </>
  );
}

export default App;
