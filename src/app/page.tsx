import HomeBanner from "@/pages/home/banner";
import OneStop from "@/pages/home/OneStop";
import Assurance from "@/pages/home/Assurance";
import WhyZwilt from "@/pages/home/whyZwilt";
import Testimonial from "@/pages/home/testimonial";
import Faq from "@/pages/home/faq";
import Footer from "@/pages/home/Footer";
import Journey from "@/pages/home/StartJourney";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <OneStop />
      <Testimonial />
      <Assurance />
      <Journey />
      <WhyZwilt />
      <Faq />
      <Footer />
    </>
  );
}
