import React from "react";
import { AppLayout, Container } from "@/layouts";
import { ServiceList } from "@/components/services";
import { PageHeader, CollaborateWithUs } from "@/components/partials";

export default function AboutUs() {
  return (
    <AppLayout>
      <PageHeader
        heading="About Us"
        body="Everything you need to know about Osmium Robotics & Renewable Energies Ltd"
        cta="Let's Talk"
        link="/contact"
      />

      <section className="mt-20">
        <Container>
          <div className="space-y-4">
            <p>
              {" "}
              Welcome to Osmium Robotics & Renewable Energies Ltd, where we
              illuminate the path to a sustainable and energy-efficient future.
              Established with a vision to redefine the way the world harnesses
              power, we are a dynamic force in the energy and solar services
              industry.
            </p>

            <p>
              {" "}
              At Osmium Robotics & Renewable Energies Ltd, we believe in the
              power of innovation to drive positive change. Our journey began
              with a commitment to make a lasting impact on the planet by
              providing cutting-edge solutions that empower individuals and
              businesses to embrace clean and renewable energy sources.
            </p>

            <p>
              {" "}
              With a focus on sustainability, reliability, and efficiency, we
              strive to be the driving force behind the global transition to a
              greener and more sustainable energy landscape. What sets us apart
              is our unwavering dedication to delivering top-notch solar
              services tailored to meet the unique needs of our clients.
            </p>

            <p>
              Whether you are a homeowner looking to harness the power of the
              sun for your residence or a business seeking comprehensive energy
              solutions, our team of experts is here to guide you every step of
              the way.
            </p>
          </div>
        </Container>
      </section>
      <CollaborateWithUs />
    </AppLayout>
  );
}
