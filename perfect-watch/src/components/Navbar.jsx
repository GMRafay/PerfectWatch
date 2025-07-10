import NavButton from "./NavButton";

export default function Navbar({ setContent }) {
  return (
    <div className="w-full flex flex-row flex-wrap justify-evenly border border-black">
      <NavButton setContent={setContent} content={"movies"}>
        Movies
      </NavButton>
      <NavButton setContent={setContent} content={"shows"}>
        Tv Shows
      </NavButton>
      <NavButton setContent={setContent} content={"picks"}>
        Picks
      </NavButton>
    </div>
  );
}
