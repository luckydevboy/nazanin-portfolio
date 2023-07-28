"use client";

import Image from "next/image";
import handleScroll from "../../utils/handleScroll";
import logo from "@/public/images/logo.png";
import { Dictionary } from "@/types";

type Props = {
  dictionary: Dictionary;
};

const Header = ({ dictionary }: Props) => {
  return (
    <nav className="flex max-w-3xl xl:max-w-6xl items-center justify-between mx-auto px-4 py-4 xl:px-0 xl:py-8">
      <div className="hidden xl:block flex-shrink-0">
        <Image src={logo} width={50} height={50} alt="Logo" />
      </div>
      <div className="xl:hidden flex-shrink-0">
        <Image src={logo} width={35} height={35} alt="Logo" />
      </div>

      <ul className="flex gap-x-4 xl:gap-x-10 ml-12 px-4 py-2 overflow-x-auto">
        {dictionary.header.map((item) => (
          <li
            key={item.hashtag}
            onClick={() => handleScroll(item.hashtag)}
            className="cursor-pointer font-semibold xl:text-2xl xl:font-bold xl:hover:text-absoluteZero xl:cursor-pointer xl:hover:underline text-eerieBlack"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
