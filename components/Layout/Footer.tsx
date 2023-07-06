import Image from "next/image";
import { Dictionary } from "@/types";
import linkedin from "@/public/icons/linkedin-white.svg";
import email from "@/public/icons/email-white.svg";
import phone from "@/public/icons/phone-white.svg";
import logo from "@/public/images/logo-white.png";
import data from "@/data";

type Props = {
  dictionary: Dictionary;
};

const Footer = ({ dictionary }: Props) => {
  return (
    <footer className="bg-primary py-12 md:py-24 flex flex-col justify-center items-center">
      <Image src={logo} width={64} height={64} alt="Logo" />
      <div className="text-xl md:text-2xl font-bold text-white mt-6 mb-6">
        {dictionary.name}
      </div>
      <div className="flex items-center gap-x-4">
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
        <a href={`tel:${data.phone}`} className="cursor-pointer block">
          <Image src={phone} width={28} height={28} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
