import { AppLayout, Container } from "@/layouts";
import {
  Hero,
  EngergizingHomes,
  Services,
  Work,
  WhyChooseUs,
  PartnersAndClients,
} from "@/components/home";
import { CollaborateWithUs } from "@/components/partials";

export default function Home() {
  return (
    <AppLayout title="Home - Osmium">
      <Hero />
      <EngergizingHomes />
      <Services />
      {/* <Work /> */}
      <WhyChooseUs />
      {/* <PartnersAndClients /> */}
      <CollaborateWithUs />
    </AppLayout>
  );
}
