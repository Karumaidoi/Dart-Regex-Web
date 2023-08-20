/* eslint-disable no-unused-vars */
import RegexCard from '../ui/RegexCard';
import { DiDart } from 'react-icons/di';
import { useRegex } from '../hooks/useRegex';

function HomePage() {
  const { isLoading, error, data } = useRegex();

  return (
    <div className="flex  flex-col bg-blue-50/20 px-8 py-10 dark:bg-stone-800 md:px-[8rem]">
      <div>
        <h4 className="text-5xl leading-normal tracking-wide dark:text-white">
          Dart Regex <br /> Library
        </h4>
        <p className="mt-4  leading-relaxed dark:text-white">
          RegEx Library - a curated list of useful regular expressions for
          <br /> Dart language.
        </p>
      </div>
      <div className="mt-[5rem] flex flex-col gap-4">
        <div className=" flex w-full items-center justify-center gap-3 rounded-md bg-blue-100 px-6 py-2 font-semibold text-blue-500 sm:w-[9rem] lg:justify-start">
          <span className="text-3xl">
            <DiDart />
          </span>
          Dart
        </div>
      </div>

      {isLoading || error !== null ? (
        <div className="flex h-[15rem] w-full items-center justify-center md:h-[25rem]">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-4  lg:grid-cols-2">
          {data?.map((regex, i) => (
            <RegexCard regex={regex} key={regex.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
