import React from "react";
import { AppLayout } from "@/layouts";
import { ServiceList } from "@/components/services";
import { PageHeader, CollaborateWithUs } from "@/components/partials";

export default function Services() {
  return (
    <AppLayout>
      <PageHeader
        heading="Our Services"
        body="A comprehensive list of all the services we currently offer"
        cta="Reach Out to Us"
        link="/contact"
      />
      <ServiceList />
      <CollaborateWithUs />
    </AppLayout>
  );
}
