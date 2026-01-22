"use client";
import { Smile, Tag, Shield, Search, ClipboardCheck } from "lucide-react";
import Faq from "../sections/faq";
import Signs from "../sections/signs";
import Hero from "../sections/hero";
import WhyChooseUs from "../sections/why-choose-us";
import Process from "../sections/process";
import CTA from "../sections/CTA";
const imagePath = `/service-page/workshop/pre-purchase-inspection/`;
const CarACRepair = () => {
  const signs = [
    {
      title: "Vehicle Condition Assessment",
      description:
        "A detailed inspection provides an accurate evaluation of the car’s mechanical, electrical, and structural condition.",
      image: `${imagePath}tecnic-bioprocess.jpg`,
      icon: <ClipboardCheck />,
    },
    {
      title: "Identifying Hidden Issues",
      description:
        "Problems that may not appear during a test drive—such as internal engine faults or electronic malfunctions—can be detected early.",
      image: `${imagePath}identify-hidden-issue.jpg`,
      icon: <Search />,
    },
    {
      title: "Safety Verification",
      description:
        "The inspection ensures the vehicle meets safety standards and does not pose risks to the driver or passengers.",
      image: `${imagePath}safety-verification.png`,
      icon: <Shield />,
    },
    {
      title: "Strong Negotiation Advantage",
      description:
        "Any issues found during the inspection can be used to negotiate a better price or request repairs before purchase.",
      image: `${imagePath}strong-negotiation.jpg`,
      icon: <Tag />,
    },
    {
      title: "Buyer Confidence",
      description:
        "Knowing the true condition of the car gives you peace of mind and confidence in your buying decision.",
      image: `${imagePath}satisfied-buyer.jpg`,
      icon: <Smile />,
    },
  ];

  const faqs = [
    {
      question: "How much does a pre-purchase car inspection cost in Dubai?",
      answer:
        "The cost varies depending on the vehicle type and inspection depth. Contact us for accurate pricing.",
    },
    {
      question:
        "Which car service center offers the best pre-purchase inspection near me?",
      answer:
        "Munich Motor Works is a trusted luxury car service center in Dubai, specializing in detailed pre-purchase inspections.",
    },
    {
      question: "How do I check a car before buying it in the UAE?",
      answer:
        "A professional inspection by a certified workshop is the most reliable way to assess a used vehicle.",
    },
    {
      question: "Is vehicle inspection mandatory in Dubai?",
      answer:
        "RTA inspections are required for registration, but a pre-purchase inspection is optional and highly recommended for buyers.",
    },
    {
      question: "Does a pre-purchase inspection come with a warranty?",
      answer:
        "Pre-purchase inspections do not include warranties, but they provide a clear condition report of the vehicle.",
    },
    {
      question: "Can I request additional inspection checks?",
      answer:
        "Yes, customized inspection requests can be added based on your concerns or preferences.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <Hero
        title1={"Pre-Purchase Car Inspection in Dubai"}
        title2={" Trusted Car Fuel Injector Cleaning Services"}
        btn={"Contact Us"}
        desc={
          "Are you planning to buy a used or pre-owned car in Dubai? A pre-purchase car inspection is one of the smartest steps you can take before finalizing your decision. At Munich Motor Works, our experienced technicians conduct a detailed inspection using a structured vehicle inspection checklist to evaluate the true condition of the car before you commit to the purchase."
        }
        img={`${imagePath}banner.jpeg`}
      />
      {/* Signs Section */}
      <Signs
        title1={"Why Is a Pre-Purchase Car Inspection Important?"}
        title2={
          "A pre-purchase inspection plays a vital role in helping buyers make informed decisions. Here’s why it matters:"
        }
        data={signs}
        footerText={" "}
      />

      <WhyChooseUs
        title="Why Choose Munich Motor Works for Pre-Purchase Car Inspection in Dubai?"
        img="/brand-images/DSC02079.jpg"
        desc={
          <>
            <p>
              A pre-purchase inspection is essential when buying a used luxury
              vehicle, and Munich Motor Works is a trusted name for precision
              and transparency. Our inspections cover every critical system
              using advanced diagnostic tools to uncover potential issues before
              they become costly problems.
            </p>

            <p className="mt-4">
              We provide clear, detailed inspection reports outlining our
              findings, allowing buyers to make confident, well-informed
              decisions. With our expertise in European and luxury vehicles, we
              ensure you know exactly what you’re investing in, no guesswork
              involved.
            </p>
          </>
        }
      />
      {/* Process Section */}

      <Faq faqs={faqs} />
      {/* CTA Section */}
      <CTA
        title="Convenience and Efficiency"
        desc={
          "We respect your time and provide a fast, efficient, and organized oil change service without compromising quality. Our streamlined workflow allows us to minimize wait times while delivering meticulous care for your vehicle."
        }
        btn1={" Call Us Today"}
        btn2={" Book Appointment"}
        img={"/cta.png"}
      />
    </>
  );
};

export default CarACRepair;
