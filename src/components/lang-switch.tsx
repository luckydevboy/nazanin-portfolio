"use client";

import Image from "next/image";
import globe from "@/public/icons/globe.svg";
import * as React from "react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { motion, AnimatePresence } from "framer-motion";

export default function LangSwitch() {
  const [showActions, setShowActions] = useState(false);
  const router = useRouter();
  const ref = useRef(null);
  useClickAway(ref, () => {
    setShowActions(false);
  });

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
    <div ref={ref}>
      <motion.div
        className="fixed cursor-pointer right-4 bottom-4 xl:right-8 xl:bottom-8 bg-white rounded-full p-2 shadow-primary shadow-lg"
        onClick={() => setShowActions(!showActions)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Image src={globe} width={24} height={24} alt="Globe" />
      </motion.div>
      <AnimatePresence>
        {showActions && (
          <motion.div
            className="fixed flex flex-col gap-y-4 bottom-16 right-4 xl:right-8 xl:bottom-20 bg-white rounded-full p-3 shadow-primary shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {actions.map((action) => (
              <div
                className="cursor-pointer hover:font-bold"
                onClick={action.onClick}
                key={action.name}
              >
                {action.icon}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
