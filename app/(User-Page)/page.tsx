import HeroSection from "./(homepage-sections)/hero";
import About from "./(homepage-sections)/about";
import Brands from "./(homepage-sections)/brands";
import FAQ from "./(homepage-sections)/FAQ";
import Testimonial from "./(homepage-sections)/Testimonial";
import Services from "./(homepage-sections)/services";
import Banner from "./(homepage-sections)/banner";
import Blogs from "./(homepage-sections)/blogs";
export default function Home() {
  const faqs = [
    {
      question: "Where can i find car repair near me in Dubai?",
      answer:
        "If you’re looking for a reliable car repair service in Dubai, searching for terms like “car repair near me” or “car service center near me” will help you find nearby workshops.Advanz Tech offers complete automotive repair and maintenance services, including:",
      list: [
        "Engine repair and overhauls",
        "Electrical system diagnostics and repairs",
        "Brake inspection and repair",
        "Transmission servicing and repairs",
        "Car recovery and towing services",
        "And much more",
      ],
    },
    {
      question: "Why is regular car servicing important?",
      answer:
        "Regular servicing helps maintain your vehicle’s performance, improves safety, and prevents costly breakdowns. Routine maintenance also extends the lifespan of your car and ensures it performs efficiently in Dubai’s driving conditions.",
    },
    {
      question: "What are the signs that my car needs servicing or repair?",
      answer:
        "Some common signs include warning lights on the dashboard, unusual noises, reduced performance, vibration while driving, fluid leaks, or poor fuel efficiency. If you notice any of these, it’s best to have your vehicle inspected by professionals.",
    },
    {
      question: "Where can I get reliable car service in Dubai?",
      answer:
        "For dependable and professional car servicing, Advanz Tech provides expert maintenance and repair solutions using advanced diagnostic tools, skilled technicians, and genuine parts, ensuring quality results every time.",
    },
    {
      question: "How can I choose a reliable car service center in Dubai?",
      answer:
        "A trustworthy car service center should have experienced technicians, modern equipment, transparent pricing, positive customer reviews, and a focus on genuine parts. Choosing a specialist workshop like Advanz Tech ensures your car receives expert care.",
    },
    {
      question: "Which is the best car repair workshop in Al Quoz?",
      answer:
        "Advanz Tech is a preferred choice for car owners in Al Quoz, offering high-quality automotive repair and maintenance services with a strong focus on European and luxury vehicles",
    },
  ];
  return (
    <div className="">
      <HeroSection />
      <About />
      <Services />
      <Brands />
      <Testimonial />
      <Banner />
      <div className="container my-20">
        <div className="grid grid-cols-1 lg:grid-cols-[.8fr_1.2fr] gap-6">
          <h1 className="text-4xl text-center mb-2 lg:mb-0 lg:text-start font-domine font-bold">
            Frequently Asked Questions
          </h1>
          <div>
            <FAQ faqs={faqs} />
          </div>
        </div>
      </div>
      <Blogs />
    </div>
  );
}
