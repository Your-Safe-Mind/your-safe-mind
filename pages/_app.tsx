import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { cormorant, crimsonText, lora } from "./fonts/font";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
          <Head>
        <title>Your Safe Mind</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="logo.svg" />
      </Head>
      <main className={`${crimsonText.variable} ${lora.variable} ${cormorant.variable}`}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
    </>
);
}
