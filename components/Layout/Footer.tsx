import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-absoluteZero py-12 md:py-24 flex flex-col justify-center items-center">
      <Image
        src="/images/logo-white.svg"
        width={64}
        height={64}
        alt="Logo"
      />
      <div className="text-xl md:text-2xl font-bold text-white mt-6 mb-6">
        Mohammad Reza Ghasemi
      </div>

      <div className="flex items-center">
        <a
          href={`mailto:${""}`}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer mr-4 block"
        >
          <Image
            src="/images/email-white.svg"
            width={28}
            height={28}
            alt="Email"
          />
        </a>

        <a
          href={""}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer mr-4 block"
        >
          <Image
            src="/images/linkedin-white.svg"
            width={28}
            height={28}
            alt="LinkedIn"
          />
        </a>

        <a
          href={""}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer block mr-4"
        >
          <Image
            src="/images/github-white.svg"
            width={28}
            height={28}
            alt="GitHub"
          />
        </a>

        <a
          href={""}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer block"
        >
          <Image
            src="/images/stackoverflow-white.svg"
            width={28}
            height={28}
            alt="Stackoverflow"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
