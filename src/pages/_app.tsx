import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const general_sans = localFont({
  src: "../../public/fonts/GeneralSans-Variable.woff2",
  display: "swap",
  variable: "--general-sans-font",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={` ${general_sans.variable} font-body`}>
      <Component {...pageProps} />
    </main>
  );
}
