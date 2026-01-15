import Hero from "./sections/hero";
import Header from "./components/Header/header";
import ServicePackage from "./sections/service-package";
import Services from "./sections/services";
import CTA from "./sections/cta";
import Testimonial from "../(User-Page)/(homepage-sections)/Testimonial";
import Footer7 from "../(User-Page)/footer/footer";
import Map from "./components/map";
import FloatingWhatsappIcon from "@/components/custom/floating-whatsapp-icon";
import StatCard from "../(User-Page)/(homepage-sections)/stat-card";

const Page = () => {
  return (
    <>
      <Header />
      <Hero />
      <ServicePackage />
      <Services />
      <div className="max-w-6xl px-5 mx-auto">
        <StatCard />
      </div>
      <FloatingWhatsappIcon />
      <Testimonial />
      <Map />
      <CTA />
      <Footer7 />
    </>
  );
};

export default Page;
