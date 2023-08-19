import { DiDart } from 'react-icons/di';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="  flex w-full items-center justify-between bg-white p-2 px-11 drop-shadow-sm">
      <Link to="dart-regex" className="flex items-center ">
        <p className="text-4xl text-stone-400">
          <DiDart />
        </p>
        <h1 className="mr-5 font-bold">Dart Regex</h1>
      </Link>
      <div>
        <button className="rounded-md bg-blue-500 px-6 py-2 text-stone-50 hover:bg-blue-700">
          Become a Dart Player
        </button>
      </div>
    </header>
  );
}

export default Header;
