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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${defaultMetadata.siteUrl}/#organization`,
    "name": "Your Safe Mind",
    "url": defaultMetadata.siteUrl,
    "logo": `${defaultMetadata.siteUrl}/logo.png`,
    "image": defaultMetadata.ogImage,
    "description": "Professional mental health counseling services offering individual therapy, couples counseling, and family therapy in a safe, confidential environment.",
    "medicalSpecialty": ["Psychiatry", "Mental Health"],
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Your City",
      "addressRegion": "Your State/Region",
      "postalCode": "Your Postal Code",
      "addressCountry": "Your Country"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "YOUR_LATITUDE",
      "longitude": "YOUR_LONGITUDE"
    },
    "telephone": "YOUR_PHONE_NUMBER",
    "email": "contact@yoursafemind.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://facebook.com/yoursafemind",
      "https://twitter.com/yoursafemind",
      "https://linkedin.com/company/yoursafemind"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mental Health Services",
      "itemListElement": [
        {
          "@type": "MedicalService",
          "name": "Individual Therapy",
          "description": "One-on-one sessions focused on personal growth and healing in a safe, confidential environment.",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceType": "In-person appointments",
            "serviceUrl": `${defaultMetadata.siteUrl}/#booking`
          }
        },
        {
          "@type": "MedicalService",
          "name": "Couples Counseling",
          "description": "Build stronger relationships through guided sessions focused on communication and understanding.",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceType": "In-person appointments",
            "serviceUrl": `${defaultMetadata.siteUrl}/#booking`
          }
        },
        {
          "@type": "MedicalService",
          "name": "Family Therapy",
          "description": "Resolve conflicts and strengthen family bonds through collaborative therapeutic sessions.",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceType": "In-person appointments",
            "serviceUrl": `${defaultMetadata.siteUrl}/#booking`
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${defaultMetadata.siteUrl}/#website`,
    "url": defaultMetadata.siteUrl,
    "name": "Your Safe Mind",
    "description": defaultMetadata.description,
    "publisher": {
      "@id": `${defaultMetadata.siteUrl}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${defaultMetadata.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={defaultMetadata.author} />
        <meta name="keywords" content={defaultMetadata.keywords} />
        <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION} />
        <link rel="icon" href="logo.svg" />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify([organizationSchema, websiteSchema])
          }}
        />
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
