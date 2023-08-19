import { DiDart } from 'react-icons/di';

function Footer() {
  return (
    <footer className=" z-10 w-full bg-white p-5 drop-shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-4xl text-stone-400">
          <DiDart />
        </p>
        <p>Bestypie &copy; 2023 - All Rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
