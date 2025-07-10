export default function NavButton({ setContent, children, content }) {
  return (
    <button
      className="border border-5 rounded-xl text-white bg-indigo-400 border-indigo-500 pl-5 pr-5 "
      onClick={() => setContent(content)}
    >
      {children}
    </button>
  );
}
