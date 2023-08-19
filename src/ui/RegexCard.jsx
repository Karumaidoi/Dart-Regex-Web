import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
function RegexCard({ regex }) {
  return (
    <Link to={regex?.to} state={regex}>
      <div className="flex cursor-pointer flex-col items-center rounded-md border-[2px] border-solid border-stone-100  px-10 py-8 hover:shadow-md hover:shadow-stone-100/100 sm:flex-row">
        <div className="mb-6 flex h-[8rem] min-h-[8rem] w-full min-w-[8rem] items-center justify-center rounded-md bg-blue-50 md:mb-0 md:mr-8 md:w-[8rem]">
          Image
        </div>
        <div className="flex flex-col ">
          <h4 className="mb-2 font-semibold">{regex?.name}</h4>
          <p className="text-sm font-light tracking-wide">
            The regular expressions below can be used to validate if a string is
            an email address and to extract email addresses from a string. This
            validation method however does not guarantee that the emails
            validated and extracted actually exist.
          </p>
        </div>
      </div>
    </Link>
  );
}

export default RegexCard;
