import HeroSection from "./(homepage-sections)/hero";
import About from "./(homepage-sections)/about";
import Brands from "./(homepage-sections)/brands";
import FAQ from "./(homepage-sections)/FAQ";
import Testimonial from "./(homepage-sections)/Testimonial";
import Services from "./(homepage-sections)/services";

import Blogs from "./(homepage-sections)/blogs";
export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <About />
      <Services />
      <Brands />
      <Testimonial />
      <FAQ />
      <Blogs />
    </div>
  );
}
