import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="  flex w-full items-center justify-between bg-white p-2 px-11 drop-shadow-sm">
      <Link to="dart-regex">
        <img src="../../src/assets/react.svg" />
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
