import React from "react";
import { Container } from "@/layouts";

export default function EngergizingHomes() {
  return (
    <div className="py-20">
      <Container>
        <div className="flex gap-y-4 flex-col md:flex-row items-center justify-between">
          <img src="./images/solar-installation.png" alt="" />

          <div className="md:w-[55%] space-y-8">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Empowering Homes, Energizing Futures
            </h1>
            <p className="text-slate-500">
              We craft and install top-of-the-line solar panels, ensuring
              maximum efficiency and durability. Our maintenance services keep
              your system running at peak performance, guaranteeing long-term
              savings and a reduced carbon footprint.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
