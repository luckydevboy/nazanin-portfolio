"use client";

import Image from "next/image";
import { useState } from "react";
import portrait from "@/public/images/my-portrait.jpg";
import whatsappWhite from "@/public/icons/whatsapp-white.svg";
import whatsapp from "@/public/icons/whatsapp.svg";
import telegram from "@/public/icons/telegram.svg";
import email from "@/public/icons/email.svg";
import linkedin from "@/public/icons/linkedin.svg";
import { Dictionary } from "@/types";
import data from "@/data";

type Props = {
  dictionary: Dictionary;
};

const Introduction = ({ dictionary }: Props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <section className="flex flex-col items-center bg-secondary py-12 xl:py-36 relative">
      <div className="rounded-full overflow-hidden relative hidden xl:block w-48 h-48">
        <Image src={portrait} fill alt="Portrait" />
      </div>
      <div className="rounded-full overflow-hidden relative xl:hidden h-40 w-40">
        <Image src={portrait} fill alt="Portrait" />
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
          clicked ? "border border-white border-dashed" : ""
        }`}
        href={`https://wa.me/${data.phone}`}
        onClick={() => setClicked(true)}
        dir="ltr"
      >
        <span>
          {data.phone.replace(
            /^(\+\d{2})(\d{3})(\d{3})(\d{4})$/,
            "$1 $2 $3 $4"
          )}
        </span>
        <Image src={whatsappWhite} width={28} height={28} alt="Phone" />
      </a>
      <div className="h_iframe-aparat_embed_frame">
        <span style={{ display: "block", paddingTop: "57%" }}></span>
        <iframe
          src="https://www.aparat.com/video/video/embed/videohash/GTPK3/vt/frame?autoplay=true&recom=self"
          allowFullScreen={true}
        ></iframe>
      </div>
      <div className="hidden xl:flex xl:flex-col xl:gap-y-3 absolute top-1/2 transform -translate-y-1/2 left-12">
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
    </section>
  );
};

export default Introduction;
