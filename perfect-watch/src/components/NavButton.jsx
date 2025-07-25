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
        active != content ? "btn-secondary" : "btn-primary"
      } pl-5 pr-5 transition-colors duration-700 ease-in-out`}
      onClick={() => handleClick()}
    >
      <p className="text-black">{children}</p>
    </button>
  );
}
