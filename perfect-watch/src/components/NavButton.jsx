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
      className={`w-[50%] border text-white bg-${
        active != content ? "white-500" : "indigo-400"
      } pl-5 pr-5 transition-colors duration-700 ease-in-out`}
      onClick={() => handleClick()}
    >
      <p className="text-black">{children}</p>
    </button>
  );
}
