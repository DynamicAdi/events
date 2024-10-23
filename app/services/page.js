"use client";

import React, { Suspense } from "react";
import Background from "../../components/ui/global/Background";
import ServicesApi from "../../components/ui/services/GetServices";
import Loader from "@/components/global/loader/page";
import SideBar from "@/components/ui/global/Navbar";

function page() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden">
        <Background>
          <SideBar />
          <ServicesApi />
        </Background>
      </div>
    </Suspense>
  );
}

export default page;
