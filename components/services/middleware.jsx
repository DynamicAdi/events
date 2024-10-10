"use client";

import React, { useEffect, useState } from "react";
import MobileServices from "./page";
import DesktopServices from "./index"; // corrected typo

function MiddleWare({ rawData }) {
  const [isPhone, setPhone] = useState(false);

  // Function to check window width
  const handleResize = () => {
    if (window.innerWidth < 700) {
      setPhone(true);
    } else {
      setPhone(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isPhone ? <MobileServices data={rawData} /> : <DesktopServices data={rawData} />;
}

export default MiddleWare;
