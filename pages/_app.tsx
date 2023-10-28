import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </SessionProvider>
  );
}
