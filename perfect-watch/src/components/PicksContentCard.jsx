export default function PicksContentCard({ movie_details }) {
  const baseImgUrl = "http://image.tmdb.org/t/p/original";
  const poster_path = movie_details.poster_path;
  return (
    <div className="flex flex-col justify-center items-center border border-black rounded-xl m-5 bg-white shadow-2xl">
      <img
        className=" w-full border rounded-t-xl"
        src={baseImgUrl + poster_path}
      />
      <div className="flex flex-row flex-wrap ">
        {movie_details.genres &&
          movie_details.genres.map((genre) => (
            <div className="m-2 border rounded-xl p-1 background bg-indigo-200 text-black">
              {genre.name}
            </div>
          ))}
      </div>
    </div>
  );
}
