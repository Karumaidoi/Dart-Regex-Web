import { DiDart } from 'react-icons/di';
import { Link } from 'react-router-dom';

function Header() {
  // function handleClick() {
  //   postRegex();
  // }

  return (
    <header className="  flex w-full items-center justify-between bg-white p-2 px-11 drop-shadow-sm dark:bg-stone-800">
      <Link to="dart-regex" className="flex items-center ">
        <p className="text-4xl text-stone-400">
          <DiDart />
        </p>
        <h1 className="mr-5 font-bold dark:text-stone-50">Dart Regex</h1>
      </Link>
      <a
        href="https://www.linkedin.com/in/alex-maina-b72014217/"
        target="blank"
      >
        <button className="flex items-center rounded-md bg-blue-500 px-6 py-2 text-stone-50 hover:bg-blue-700">
          About
          <span className="ml-2 text-2xl">🎯</span>
        </button>
      </a>
    </header>
  );
}

export default Header;
