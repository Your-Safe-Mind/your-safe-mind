import  Head  from "next/head";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FAQSection from "@/components/home/FAQSection";
import HowItWorks from "@/components/home/HowItWorks";
import BookingForm from "@/components/home/BookingForm";
import CookieFloater from "@/components/layout/CookieFloater";
import { defaultMetadata } from "@/utils/metadata";


export default function Home() {
  return (
    <>
          <Head>
        <title>{defaultMetadata.title}</title>
        <meta name="description" content={defaultMetadata.description} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={defaultMetadata.title} />
        <meta property="og:description" content={defaultMetadata.description} />
        <meta property="og:image" content={defaultMetadata.ogImage} />
        <meta property="og:url" content={defaultMetadata.siteUrl} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultMetadata.title} />
        <meta name="twitter:description" content={defaultMetadata.description} />
        <meta name="twitter:image" content={defaultMetadata.ogImage} />
      </Head>
    <HeroSection />
    <CookieFloater />
    <ServicesSection />
    <HowItWorks />
    <BookingForm/>
    <FAQSection />
    </>
  );
}
