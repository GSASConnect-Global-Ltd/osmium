import React from "react";
import { Container } from "@/layouts";
import { partners } from "@/static/data";

export default function PartnersAndClients() {
  return (
    <div className="py-20">
      <Container>
        <div className="space-y-20">
          <h1 className="md:text-heading-two text-heading-three font-bold">
            Our Partners and Clients
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-6">
            {partners.map((partner) => (
              <img key={partner} src={partner} alt="Logo" />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
