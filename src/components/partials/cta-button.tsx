import React from "react";
import { RightArrowCTA } from "../icons";

export default function CTAButton({ title }: { title: string }) {
  return (
    <button className="group flex w-full items-center gap-4 rounded-[40px] border border-primary bg-primary px-10 py-4 text-white transition-all duration-100 hover:bg-transparent hover:text-white md:w-max md:text-[1.75rem]">
      <span className="mx-auto font-semibold md:mx-0">{title}</span>{" "}
      <RightArrowCTA />
    </button>
  );
}
