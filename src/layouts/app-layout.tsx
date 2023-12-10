import Head from "next/head";
import { Navbar, Footer } from "@/components/partials";

interface ILayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function AppLayout({ title, children }: ILayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}

AppLayout.defaultProps = {
  title: "Osmium Robotics & Renewable Energies Ltds",
};
