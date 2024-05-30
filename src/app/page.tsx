import HomeBanner from "@/pages/home/Banner";
import OneStop from "@/pages/home/OneStop";
import Assurance from "@/pages/home/Assurance";
import WhyZwilt from "@/pages/home/WhyZwilt";
import Testimonial from "@/pages/home/Testimonial";
import Faq from "@/pages/home/Faq";
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
