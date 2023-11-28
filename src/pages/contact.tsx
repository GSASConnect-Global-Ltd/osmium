import React from "react";
import { AppLayout } from "@/layouts";
import { ContactForm } from "@/components/contact-us";
import { PageHeader } from "@/components/partials";

export default function Services() {
  return (
    <AppLayout>
      <PageHeader
        heading="Contact Us"
        body="Fill out the form below to get in contact with us"
        cta="Let's Talk Now"
        link="/contact"
      />
      <ContactForm />
    </AppLayout>
  );
}
