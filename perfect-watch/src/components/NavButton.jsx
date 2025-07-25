export default function NavButton({
  setContent,
  children,
  content,
  active,
  setActive,
}) {
  function handleClick() {
    setContent(content);
    if (content == "movies" && active == "picks") {
      setActive("movies");
    } else if (content == "picks" && active == "movies") {
      setActive("picks");
    }
  }
  return (
    <button
      className={`w-[50%] border-black btn ${
        active !== content ? "btn-outline" : "btn-primary"
      } transition-colors duration-700 ease-in-out`}
      onClick={() => handleClick()}
    >
      <p className={`${active !== content ? "text-black" : "text-white"}`}>
        {children}
      </p>
    </button>
  );
}
