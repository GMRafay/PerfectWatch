import Navbar from "./Navbar";

export default function Header({ setContent, content }) {
  return (
    <div className="w-screen overflow-x-hidden">
      <div className="flex flex-col w-full items-center">
        <h1 className="text-5xl m-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
          Perfect<span className="animate-pulse">Watch</span>
        </h1>

        <Navbar setContent={setContent} content={content} />
      </div>
    </div>
  );
}
