"use client";

import Image from "next/image";
import { useState } from "react";
import portrait from "@/public/images/my-portrait.jpg";
import whatsappWhite from "@/public/icons/whatsapp-white.svg";
import whatsapp from "@/public/icons/whatsapp.svg";
import telegram from "@/public/icons/telegram.svg";
import email from "@/public/icons/email.svg";
import linkedin from "@/public/icons/linkedin.svg";
import { Dictionary } from "../types";
import data from "../data";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

type Props = {
  dictionary: Dictionary;
};

const phoneNumberChars = (phone: string, lang: "fa" | "en") => {
  let _phone = phone;
  _phone = _phone.replace(/^(\+\d{2})(\d{3})(\d{3})(\d{4})$/, "$1 $2 $3 $4");
  if (lang === "fa") {
    const persianDigits: { [index: string]: string } = {
      "0": "۰",
      "1": "۱",
      "2": "۲",
      "3": "۳",
      "4": "۴",
      "5": "۵",
      "6": "۶",
      "7": "۷",
      "8": "۸",
      "9": "۹",
    };

    const replaceDigits = (match: string) => persianDigits[match];

    // Regular expression to find English digits (0-9)
    const pattern = /\d/g;

    // Use replace() with the regular expression and the replacement function
    _phone = _phone.replace(pattern, replaceDigits);
  }
  return _phone;
};

const Introduction = ({ dictionary }: Props) => {
  const [clicked, setClicked] = useState(false);
  const params = useParams();

  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col items-center bg-secondary py-12 xl:py-36 relative"
    >
      <div className="rounded-full overflow-hidden relative hidden xl:block w-48 h-48">
        <Image src={portrait} fill alt="Portrait" />
      </div>
      <div className="rounded-full overflow-hidden relative xl:hidden h-40 w-40">
        <Image src={portrait} fill alt="Portrait" />
      </div>

      <div className="text-lg xl:text-4xl font-extrabold text-tertiary mt-12 mb-2">
        {dictionary.name}
      </div>
      <div className="text-base font-semibold xl:text-2xl xl:font-bold text-tertiary">
        {dictionary.role}
      </div>
      <div className="text-base font-semibold xl:text-lg text-tertiary max-w-lg xl:max-w-2xl text-center px-6 xl:px-8 my-12 leading-7">
        {dictionary.aboutMe}
      </div>
      <a
        className={`bg-primary text-white w-56 h-12 flex ${
          params.lang === "en" ? "flex-row-reverse" : ""
        } gap-x-3 items-center text-lg font-bold justify-center rounded-md ${
          clicked ? "border border-white border-dashed" : ""
        }`}
        href={`https://wa.me/${data.phone}`}
        onClick={() => setClicked(true)}
        dir="ltr"
      >
        <span>{phoneNumberChars(data.phone, params.lang as "fa" | "en")}</span>
        <Image src={whatsappWhite} width={28} height={28} alt="Phone" />
      </a>

      <video
        width="700"
        autoPlay
        muted
        loop
        controls
        className="md:rounded-md mt-12"
      >
        <source src="/videos/presentation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hidden xl:flex xl:flex-col xl:gap-y-5 absolute top-1/2 transform -translate-y-1/2 left-12">
        <a
          href={`mailto:${data.email}`}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer block"
        >
          <Image src={email} width={28} height={28} alt="Email" />
        </a>
        <a
          href={data.linkedin}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer block"
        >
          <Image src={linkedin} width={28} height={28} alt="LinkedIn" />
        </a>
        <a
          href={`https://wa.me/${data.phone}`}
          className="cursor-pointer block"
        >
          <Image src={whatsapp} width={28} height={28} alt="Whatsapp" />
        </a>
        <a href={data.telegramId} className="cursor-pointer block">
          <Image src={telegram} width={28} height={28} alt="Telegram" />
        </a>
      </div>
    </motion.section>
  );
};

export default Introduction;
