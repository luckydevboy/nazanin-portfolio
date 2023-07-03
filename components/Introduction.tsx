"use client";

import Image from "next/image";
import { useState } from "react";
import portrait from "@/public/images/my-portrait.jpg";
import phoneWhite from "@/public/icons/phone-white.svg";
import phone from "@/public/icons/phone.svg";
import email from "@/public/icons/email.svg";
import linkedin from "@/public/icons/linkedin.svg";

type Dictionary =
  typeof import("../dictionaries/en.json");

type Props = {
  dictionary: Dictionary;
};

const Introduction = ({
  dictionary,
}: Props) => {
  const [clicked, setClicked] =
    useState(false);

  return (
    <section className="flex flex-col items-center bg-secondary py-12 xl:py-36 relative">
      <div className="rounded-full overflow-hidden relative hidden xl:block w-48 h-48">
        <Image
          src={portrait}
          fill
          alt="Portrait"
        />
      </div>
      <div className="rounded-full overflow-hidden relative xl:hidden w-28 h-28">
        <Image
          src={portrait}
          fill
          alt="Portrait"
        />
      </div>

      <div className="text-base font-semibold xl:text-2xl xl:font-bold text-tertiary mt-6">
        {dictionary.greeting}
      </div>
      <div className="text-lg xl:text-4xl font-bold text-tertiary my-1.5">
        {dictionary.name}
      </div>
      <div className="text-base font-semibold xl:text-2xl xl:font-bold text-tertiary">
        {dictionary.role}
      </div>
      <div className="text-base font-semibold xl:text-lg text-tertiary max-w-lg xl:max-w-2xl text-center px-2 xl:px-8 my-6">
        {dictionary.aboutMe}
      </div>
      <a
        className={`bg-primary text-white w-56 h-12 flex gap-x-3 items-center text-lg font-bold justify-center rounded-md ${
          clicked
            ? "border border-white border-dashed"
            : ""
        }`}
        href={`tel:${dictionary.links.phone}`}
        onClick={() => setClicked(true)}
      >
        <span>
          {dictionary.links.phone.replace(
            /^(\+\d{2})(\d{3})(\d{3})(\d{4})$/,
            "$1 $2 $3 $4"
          )}
        </span>
        <Image
          src={phoneWhite}
          width={24}
          height={24}
          alt="Phone"
        />
      </a>
      <div className="hidden xl:flex xl:flex-col absolute top-1/2 transform -translate-y-1/2 left-12">
        <a
          href={`mailto:${dictionary.links.email}`}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer block"
        >
          <Image
            src={email}
            width={28}
            height={28}
            alt="Email"
          />
        </a>
        <a
          href={
            dictionary.links.linkedin
          }
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer mt-2.5 block"
        >
          <Image
            src={linkedin}
            width={28}
            height={28}
            alt="LinkedIn"
          />
        </a>
        <a
          href={`tel:${dictionary.links.phone}`}
          className="cursor-pointer mt-2.5 block"
        >
          <Image
            src={phone}
            width={28}
            height={28}
            alt="LinkedIn"
          />
        </a>
      </div>
    </section>
  );
};

export default Introduction;
