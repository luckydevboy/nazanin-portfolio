"use client";

import Image from "next/image";
import globe from "@/public/icons/globe.svg";
import * as React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LangSwitch = () => {
  const [showActions, setShowActions] = useState(false);
  const router = useRouter();

  const actions = [
    {
      icon: "En",
      name: "English",
      onClick: () => router.push("/en"),
    },
    {
      icon: "Fa",
      name: "Farsi",
      onClick: () => router.push("/fa"),
    },
  ];

  return (
    <>
      <div
        className="fixed cursor-pointer right-4 bottom-4 bg-white rounded-full p-2 shadow-primary shadow-lg"
        onClick={() => setShowActions(!showActions)}
      >
        <Image src={globe} width={24} height={24} alt="Globe" />
      </div>
      {showActions && (
        <div className="fixed flex flex-col gap-y-4 bottom-16 right-4 bg-white rounded-full p-3 shadow-primary shadow-lg">
          {actions.map((action) => (
            <div
              className="cursor-pointer hover:font-bold"
              onClick={action.onClick}
              key={action.name}
            >
              {action.icon}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default LangSwitch;
