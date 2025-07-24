import PicksContentCard from "./PicksContentCard";
import { useEffect, useState, useRef } from "react";
import { fetchGenres } from "../services/tmdb";

export default function Picks({ picks }) {
  const [genres, setGenres] = useState([]);
  const [prompt, setPrompt] = useState([]);
  const [randomPick, setRandomPick] = useState([]);
  useEffect(() => {
    async function getGenres() {
      try {
        const movie_genres = await fetchGenres();

        setGenres(movie_genres);
      } catch (err) {
        console.log(err);
      }
    }
    getGenres();
  }, []);

  const modal = useRef();

  function handleRandom() {
    const randomIndex = picks[Math.floor(Math.random() * picks.length)];
    setRandomPick(picks[randomIndex]);
    modal.current.showModal();
    console.log(randomPick.title);
  }

  return (
    <div className="flex items-center flex-col">
      <text className="m-5 font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-400 ">
        Your Picks
      </text>
      {picks.length != 0 && (
        <div className="flex items-center justify-center">
          <button onClick={() => handleRandom()} className="border-black text-black">
            Randomized Pick❓
          </button>
          <input
            type="text"
            className="bg-white mr-5"
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button className="text-black">Ask Ai ?</button>
        </div>
      )}
      <dialog id="random_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Your Random Pick 🎲</h3>
          <p className="py-4">
            {randomPick ? randomPick.title : "No pick yet"}
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <ul className="grid lg:grid-cols-5 lg:grid-rows-4 md:grid-cols-3 sm:grid-cols-1">
        {picks.map((movie) => (
          <li key={movie.id}>
            <PicksContentCard movie_details={movie} genres={genres} />
          </li>
        ))}
      </ul>

      {picks.length == 0 && (
        <p className="w-full h-screen flex items-center justify-center m-5 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-400 ">
          Go to the movies tab to add some movies to your picks!
        </p>
      )}
    </div>
  );
}
