"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import Loader from "@/components/global/loader/page";

const Main = dynamic(() => import("@/components/Main"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function ClientRender({about, services, blogs, projects, footer, socialMedia}) {
  const [launch, setLaunch] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLaunch(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return launch ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden">
        <Main about={about} services={services} blogs={blogs} projects={projects} socialMedia={socialMedia} footer={footer} />
      </div>
    </Suspense>
  );
}
