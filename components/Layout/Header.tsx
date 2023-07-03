"use client";

import Image from "next/image";
import handleScroll from "../../utils/handleScroll";

const Header = () => {
  return (
    <nav className="flex max-w-3xl xl:max-w-6xl items-center justify-between mx-auto px-4 py-4 xl:px-0 xl:py-8">
      <div className="hidden xl:block flex-shrink-0">
        <Image
          src="/images/logo.svg"
          width={64}
          height={64}
          alt="Logo"
        />
      </div>
      <div className="xl:hidden flex-shrink-0">
        <Image
          src="/images/logo.svg"
          width={40}
          height={40}
          alt="Logo"
        />
      </div>

      <ul className="flex ml-12 px-4 py-2 overflow-x-auto">
        <li
          onClick={() =>
            handleScroll("#skills")
          }
          className="cursor-pointer font-semibold xl:text-2xl xl:font-bold xl:hover:text-absoluteZero xl:cursor-pointer xl:hover:underline text-eerieBlack"
        >
          Skills
        </li>
        <li
          onClick={() =>
            handleScroll("#experiences")
          }
          className="cursor-pointer ml-4 xl:ml-10 font-semibold xl:text-2xl xl:font-bold xl:hover:text-absoluteZero xl:cursor-pointer xl:hover:underline text-eerieBlack"
        >
          Experiences
        </li>
        <li
          className="cursor-pointer ml-4 xl:ml-10 font-semibold xl:text-2xl xl:font-bold xl:hover:text-absoluteZero xl:cursor-pointer xl:hover:underline text-eerieBlack"
          onClick={() =>
            handleScroll("#projects")
          }
        >
          Projects
        </li>
        <li
          onClick={() =>
            handleScroll("#posts")
          }
          className="cursor-pointer ml-4 xl:ml-10 font-semibold xl:text-2xl xl:font-bold xl:hover:text-absoluteZero xl:cursor-pointer xl:hover:underline text-eerieBlack"
        >
          Posts
        </li>
        <li
          onClick={() =>
            handleScroll("#educations")
          }
          className="cursor-pointer ml-4 xl:ml-10 font-semibold xl:text-2xl xl:font-bold xl:hover:text-absoluteZero xl:cursor-pointer xl:hover:underline text-eerieBlack"
        >
          Educations
        </li>
      </ul>
    </nav>
  );
};

export default Header;
