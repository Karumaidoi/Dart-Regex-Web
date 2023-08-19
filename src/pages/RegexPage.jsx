import { DiGitBranch } from 'react-icons/di';
import { Link, useLocation } from 'react-router-dom';

function RegexPage() {
  const location = useLocation();
  const regex = location.state;
  return (
    <div className="flex justify-center align-top dark:bg-stone-800">
      <div className="mt-[3rem] w-[100%] overflow-scroll border-[1px] border-solid border-stone-100 px-4 md:w-[60%]">
        <Link
          to="/"
          className="mb-7 mr-5 mt-7 flex max-h-4 w-max items-center rounded-full bg-blue-100 px-5 py-[1.5rem] dark:bg-blue-200           dark:text-stone-50"
        >
          <span className="mr-4 dark:text-stone-50">&larr;</span>
          Go Back
        </Link>

        <div className="flex  flex-col items-center rounded-md   px-10 py-8   sm:flex-row">
          <div className="mb-6 flex h-[8rem] min-h-[8rem] w-full min-w-[8rem] items-center justify-center rounded-md  md:mb-0 md:mr-8 md:w-[8rem]">
            <span className="text-6xl">{regex.image}</span>
          </div>
          <div className="flex flex-col ">
            <h4 className="mb-2 font-semibold">{regex?.name}</h4>
            <p className="text-sm font-light tracking-wide">
              {regex?.description}
            </p>
          </div>
        </div>

        <div className="mt-[2rem]">
          <div className=" flex w-full items-center justify-center gap-3 rounded-md bg-blue-100 px-6 py-2 font-semibold text-blue-500 ">
            <span className="text-2xl">
              <DiGitBranch />
            </span>
            <a className="cursor-pointer hover:underline">
              Contribute Regex Expression. Get Started!.
            </a>
          </div>
        </div>

        <div className="mt-[6rem]">
          <p className="text-3xl font-light">Simple {regex?.name}</p>
          <p className="mb-[1rem] mt-3 text-sm">{regex?.caption}</p>
          <div className="mockup-code mockup-window">
            <pre>
              <code>{regex?.regex}</code>
            </pre>
          </div>
        </div>

        <div className="mt-[6rem]">
          <p className="mb-[1rem] mt-3 text-sm">Example Code in Dart:</p>
          <div className="mockup-code">
            <pre data-prefix="~">
              <code>{regex?.code}</code>
            </pre>
          </div>
        </div>

        {regex?.notes !== '' && (
          <div className="m-auto mb-3 mt-[4rem] flex max-w-[100%]  flex-col items-center justify-self-auto rounded-md bg-blue-50/50 px-5 py-8 dark:bg-stone-50">
            <h4 className="mb-[2rem] text-2xl font-normal">
              Notes on {regex?.name} validation
            </h4>
            <p className="text-center text-sm font-normal  leading-8 text-stone-700">
              {regex?.notes}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegexPage;
