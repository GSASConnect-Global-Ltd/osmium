import React from "react";
import { AppLayout } from "@/layouts";
import ProjectList from "@/components/partials/project-list";
import { PageHeader, CollaborateWithUs } from "@/components/partials";

export default function Services() {
  return (
    <AppLayout>
      <PageHeader
        heading="Our Projects"
        body="We have worked with multiple partners and organizations"
        cta="Reach Out to Us"
        link="/contact"
      />
      <ProjectList />
      <CollaborateWithUs />
    </AppLayout>
  );
}
