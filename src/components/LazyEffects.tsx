"use client";

import dynamic from "next/dynamic";

const SparkEffect = dynamic(() => import("./SparkEffect"), { ssr: false });
const DustEffect = dynamic(() => import("./DustEffect"), { ssr: false });

export default function LazyEffects() {
  return (
    <>
      <DustEffect />
      <SparkEffect />
    </>
  );
}
