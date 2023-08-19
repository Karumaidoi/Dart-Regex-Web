import { DiDart } from 'react-icons/di';
import { FaLinkedin } from 'react-icons/fa';
import { useCurrentYear } from '../hooks/useCurrentYear';

function Footer() {
  const year = useCurrentYear();
  return (
    <footer className=" z-10 w-full bg-white p-5 drop-shadow-sm dark:bg-stone-800">
      <div className="flex items-center justify-between">
        <p className="text-4xl text-stone-400">
          <DiDart />
        </p>
        <div>
          <a className="cursor-pointer text-2xl">
            <FaLinkedin />
          </a>
        </div>

        <p className="hidden md:block">
          Maina &copy; {year} - All Rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
