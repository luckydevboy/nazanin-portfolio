import { ReactNode } from "react";
import close from "@/public/icons/circle-xmark.svg";
import Image from "next/image";
import { useLockBodyScroll } from "react-use";

type Props = {
  children: ReactNode;
  open: boolean;
  setOpen: (state: boolean) => void;
};

const Modal = ({ children, open, setOpen }: Props) => {
  useLockBodyScroll(open);

  return (
    <>
      {open && (
        <>
          <div
            className="xl:hidden fixed right-4 top-4 z-30 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <Image src={close} width={28} height={28} alt="Close" />
          </div>

          <div className="z-20 xl:fixed xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2">
            <div
              className="fixed z-30 -top-12 right-0 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src={close} width={28} height={28} alt="Close" />
            </div>
            {children}
          </div>
          <div className="fixed inset-0 bg-black opacity-70"></div>
        </>
      )}
    </>
  );
};

export default Modal;
