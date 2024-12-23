import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { cormorant, crimsonText, lora } from "../fonts/font";
import PrelineScript from "@/components/PrelineScript";
import AnimatedGradientBackground from "@/components/layout/AnimatedGradientBackground";
import Script from "next/script";
import { defaultMetadata } from "@/utils/metadata";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={defaultMetadata.author} />
        <meta name="keywords" content={defaultMetadata.keywords} />
        <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION} />
        <link rel="icon" href="logo.svg" />
      </Head>
      <main className={`${crimsonText.variable} ${lora.variable} ${cormorant.variable}`}>
    <Layout>
      <AnimatedGradientBackground/>
      <Component {...pageProps} />
    </Layout>
    <PrelineScript />
    </main>
    <Script  type="text/javascript" id="tawk" strategy="lazyOnload">
{`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/676478d4af5bfec1dbde74e3/1ifg7fvpr';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}
    </Script>
    </>
);
}
