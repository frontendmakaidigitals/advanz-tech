import HeroSection from "./(User-Page)/(homepage-sections)/hero";
import About from "./(User-Page)/(homepage-sections)/about";
import Brands from "./(User-Page)/(homepage-sections)/brands";
import FAQ from "./(User-Page)/(homepage-sections)/FAQ";
import Testimonial from "./(User-Page)/(homepage-sections)/Testimonial";
import Services from "./(User-Page)/(homepage-sections)/services";
import Banner from "./(User-Page)/(homepage-sections)/banner";
import Blogs from "./(User-Page)/(homepage-sections)/blogs";
export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <About />
      <Services />
      <Brands />
      <Testimonial />
      <Banner />
      <FAQ />
      <Blogs />
    </div>
  );
}
