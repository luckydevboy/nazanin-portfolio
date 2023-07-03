"use client";

import Image from "next/image";
import globe from "@/public/icons/globe.svg";
import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";

const actions = [
  {
    icon: "En",
    name: "English",
  },
  {
    icon: "Fa",
    name: "Farsi",
  },
];

const LangSwitch = () => {
  return (
    <SpeedDial
      ariaLabel="Lanugage switcher"
      sx={{
        position: "fixed",
        bottom: 32,
        right: 32,
      }}
      FabProps={{
        sx: {
          background: "#695E7C",
          ":hover": {
            background: "#695E7C",
          },
        },
      }}
      icon={<Image src={globe} width={28} height={28} alt="Globe" />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
};

export default LangSwitch;
