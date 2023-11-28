import React from "react";
import Link from "next/link";
import { CTAButton, AnimateY } from "../partials";

export default function Hero() {
  return (
    <section>
      <div className="bg-[url('/images/hero-img-1.png')] bg-no-repeat bg-cover pb-20 pt-[90px]  text-white md:pb-[110px]">
        <div className="mx-auto px-6 sm:max-w-2xl md:max-w-3xl lg:max-w-[1280px] lg:px-0">
          <div className="space-y-6 pt-20 md:min-h-screen">
            <AnimateY staggerAmount={0.35}>
              <AnimateY staggerAmount={0.45}>
                <h1 className="w-80 text-[2.5rem] font-semibold leading-[150%] tracking-tight md:w-[800px]  md:text-8xl lg:w-[1200px] lg:leading-[140%]">
                  Solar Energy Solutions at Affordable Prices
                </h1>
              </AnimateY>
            </AnimateY>

            <div className="space-y-10">
              <h2 className="w-[327px] text-sm leading-[150%] md:w-[881px] md:text-xl">
                We specialise in energy assessments of buildings, design and
                installation of renewable energy systems and particularly ground
                mounted and rooftop solar photovoltaic (PV) technologies,
                battery storage and complete hybrid commercial energy storage
                solutions.
              </h2>
              <AnimateY staggerAmount={0.5}>
                <div>
                  <Link href={"/contact"}>
                    <CTAButton title="Let's Talk Now" />
                  </Link>
                </div>
              </AnimateY>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
