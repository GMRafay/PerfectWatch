import NavButton from "./NavButton";
import { useState } from "react";
export default function Navbar({ setContent, content }) {
    const [active,setActive] = useState('movies')
  return (
    <div className="w-full flex flex-row flex-wrap justify-evenly border border-black">
      <NavButton setContent={setContent} content={"movies"} active={active} setActive={setActive} >
        Movies
      </NavButton>
      <NavButton setContent={setContent} content={"picks"} active={active} setActive={setActive}>
        Picks
      </NavButton>
    </div>
  );
}
