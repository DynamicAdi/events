"use client"

import dynamic from "next/dynamic";
import Loader from "@/components/global/loader/page";
import { Suspense, useEffect, useState } from "react";

const Main = dynamic(() => import("@/components/Main"), {ssr: true, loading: () => <Loader />})


export default function Render() {
    const [launch, setLaunch] = useState(true);
useEffect(() => {
  setTimeout(() => {
    setLaunch(false);
  }, 3000)
}, [])
  return (
  launch ? <Loader /> 
  : <Suspense fallback={<Loader />}>
    <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden">
      <Main />
    </div>
    </Suspense>
  );
}
