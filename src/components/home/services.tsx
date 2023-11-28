import React from "react";
import { Container } from "@/layouts";
import { serviceList } from "@/static/data";
import { ServiceCard, AnimateY } from "../partials";

export default function Services() {
  return (
    <section className="bg-slate-100 py-20">
      <Container>
        <div className="space-y-6">
          <h1 className="md:text-heading-two text-heading-three font-bold">
            What we Offer
          </h1>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
          {serviceList.map((item) => (
            <AnimateY key={item.id} staggerAmount={0.35}>
              <ServiceCard key={item.id} {...item} />
            </AnimateY>
          ))}
        </div>
      </Container>
    </section>
  );
}
