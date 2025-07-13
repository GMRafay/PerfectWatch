export function Popup({ movie_id }) {
  return (
    <div className="bg-white border-white rounded-xl z-3 fixed top-50 sm:w-10 sm:h-10 md:w-100 md:h-100 overscroll-auto  md:overscroll-contain">
      <p>This is the current selected movie id : {movie_id}</p>
    </div>
  );
}
