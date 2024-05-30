import HomeBanner from "@/pages/home/Banner";
import OneStop from "@/pages/home/OneStop";
import WhyZwilt from "@/pages/home/WhyZwilt";
import Testimonial from "@/pages/home/Testimonial";
import Faq from "@/pages/home/Faq";
import Footer from "@/pages/home/Footer";
import Screening from "@/pages/home/Screening";
import StartJourney from "@/pages/home/StartJourney";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <OneStop />
      <Testimonial />
      <Screening />
      <StartJourney />
      <WhyZwilt />
      <Faq />
      <Footer />
    </>
  );
}
