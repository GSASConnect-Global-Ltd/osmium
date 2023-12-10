import React from "react";
import { AnimateY } from "../partials";
import Link from "next/link";

interface IPageHeader {
  heading: string;
  body: string;
}

export default function BlogHeader(props: IPageHeader) {
  return (
    <div className="bg-hero-image-1 pb-10 pt-[90px]  text-white md:pb-20">
      <div className="mx-auto px-6 sm:max-w-2xl md:max-w-3xl lg:max-w-[1280px] lg:px-0">
        <div className="pt-20 ">
          <div className="space-y-10">
            <AnimateY staggerAmount={0.35}>
              <h1 className="w-80 text-[2.5rem] font-semibold leading-[150%] tracking-tight md:w-[800px]  md:text-8xl lg:w-[1200px] lg:leading-[140%]">
                {props.heading}
              </h1>
            </AnimateY>

            <AnimateY staggerAmount={0.45}>
              <p className="text-sm leading-[150%] md:text-xl">{props.body}</p>
            </AnimateY>
          </div>
        </div>
      </div>
    </div>
  );
}
