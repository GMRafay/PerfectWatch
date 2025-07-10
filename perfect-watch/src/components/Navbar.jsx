import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <div className="flex flex-row flex-wrap justify-evenly ">
      <NavButton>Movies</NavButton>
      <NavButton>Tv Shows</NavButton>
      <NavButton>Picks</NavButton>
    </div>
  );
}
