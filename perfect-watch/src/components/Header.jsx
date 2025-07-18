import Navbar from "./Navbar";

export default function Header({ setContent, content }) {
  return (
    <div className="w-screen overflow-x-hidden">
      <div className="flex flex-col w-full items-center">
        <header className="m-10 text-center">What2Watch BRUHHH</header>
        <Navbar setContent={setContent} content={content} />
      </div>
    </div>
  );
}
