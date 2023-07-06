"use client";

import Image from "next/image";
import globe from "@/public/icons/globe.svg";
import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useRouter } from "next/navigation";

const LangSwitch = () => {
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
    <SpeedDial
      ariaLabel="Language switcher"
      sx={{
        position: "fixed",
        bottom: 32,
        right: 32,
      }}
      icon={<Image src={globe} width={28} height={28} alt="Globe" />}
      FabProps={{
        sx: {
          "&:hover": {
            bgcolor: "#695E7C",
          },
        },
      }}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.onClick}
        />
      ))}
    </SpeedDial>
  );
};

export default LangSwitch;
