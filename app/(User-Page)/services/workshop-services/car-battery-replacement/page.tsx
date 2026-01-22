"use client";
import {
  Snowflake,
  Battery,
  AlertTriangle,
  Zap,
  AlertCircle,
  Clock,
} from "lucide-react";
import Faq from "../sections/faq";
import Signs from "../sections/signs";
import Hero from "../sections/hero";
import WhyChooseUs from "../sections/why-choose-us";

import CTA from "../sections/CTA";
const imagePath = `/service-page/workshop/car-battery-repair/`;
const CarACRepair = () => {
  const signs = [
    {
      title: "Diminished Cranking Power",
      description:
        "If your engine cranks slowly or takes longer than usual to start, it may signal a weakening battery.",
      image: "/images/diminished-cranking.jpg",
      icon: <Battery className="w-4 h-4" />,
    },
    {
      title: "Dashboard Warning Lights",
      description:
        "Battery or charging system warning lights on the dashboard indicate potential electrical or battery issues that require immediate inspection.",
      image: "/images/dashboard-warning.jpg",
      icon: <AlertTriangle className="w-4 h-4" />,
    },
    {
      title: "Electrical Malfunctions",
      description:
        "Flickering headlights, malfunctioning infotainment systems, or erratic electronic behavior often point to a failing battery.",
      image: "/images/electrical-malfunctions.jpg",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      title: "Visible Battery Damage",
      description:
        "Cracks, corrosion, swelling, or leaks in the battery casing are clear signs that replacement is necessary.",
      image: "/images/battery-damage.jpg",
      icon: <AlertCircle className="w-4 h-4" />,
    },
    {
      title: "Battery Age",
      description:
        "Most car batteries last between 3 to 5 years, depending on climate conditions and driving habits. Replacement is recommended as the battery approaches this age.",
      image: "/images/battery-age.jpg",
      icon: <Clock className="w-4 h-4" />,
    },
    {
      title: "Cold Weather Starting Issues",
      description:
        "Difficulty starting the vehicle in colder temperatures may indicate reduced battery capacity and the need for replacement.",
      image: "/images/cold-weather-start.jpg",
      icon: <Snowflake className="w-4 h-4" />,
    },
  ];

  const faqs = [
    {
      question:
        "Where can I find the best car battery replacement near me in Dubai?",
      answer:
        "Munich Motor Works is a leading luxury car service center in Dubai, offering professional battery replacement services with technicians having over 15 years of experience.",
    },
    {
      question: "When should I replace my car battery?",
      answer:
        "Most batteries should be replaced every 3–5 years or earlier if signs of failure appear.",
    },
    {
      question: "Is it cheaper to replace a car battery yourself?",
      answer:
        "While DIY replacement may seem cheaper, professional installation ensures proper compatibility, safety, and system reset for modern luxury vehicles.",
    },
    {
      question: "Can a dead car battery be recharged?",
      answer:
        "In some cases, a dead battery can be recharged; however, repeated failures usually indicate the need for replacement.",
    },
    {
      question: "How do I know if my car battery is bad?",
      answer:
        "Slow engine cranking, electrical issues, warning lights, or a battery older than three years are common indicators.",
    },
    {
      question: "What happens when a car battery dies?",
      answer:
        "A dead battery can prevent your vehicle from starting and cause electrical system failures.",
    },
    {
      question: "How do I request a car recovery service in Dubai?",
      answer:
        "You can contact Munich Motor Works directly to arrange professional car recovery assistance.",
    },
    {
      question: "What is the meaning of car recovery service?",
      answer:
        "Car recovery involves transporting a non-operational vehicle safely to a repair facility.",
    },
    {
      question:
        "What is the difference between roadside assistance and vehicle recovery?",
      answer:
        "Roadside assistance provides minor on-site fixes, while vehicle recovery involves towing the car to a service center.",
    },
    {
      question: "What does recovering a vehicle mean?",
      answer:
        "Recovering a vehicle refers to safely moving a disabled or damaged car to a secure location or repair garage.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <Hero
        title1={"Car Battery Replacement Services in Dubai"}
        title2={"Advanced Battery Diagnostics, Repair & Reconditioning"}
        btn={"Contact Us"}
        desc={
          " Your car battery plays a vital role in powering essential vehicle functions, from starting the engine to supporting advanced electronic systems such as infotainment, driver-assistance features, and onboard safety technologies. In luxury vehicles, a reliable battery is crucial to ensure consistent performance and uninterrupted operation of these high-tech systems. "
        }
        img={
          "https://www.fixautoservice.com/wp-content/uploads/2023/06/air-conditioning-1024x641.jpg"
        }
      />
      {/* Signs Section */}
      <Signs
        title1={"Signs You Need a Car Battery Replacement"}
        title2={
          "Recognizing early warning signs can help you avoid sudden vehicle failure. Here are common indicators that your battery may need replacement:"
        }
        data={signs}
        footerText={" "}
      />

      <WhyChooseUs
        title="Why Choose Munich Motor Works for Car Battery Replacement?"
        img="/brand-images/DSC02079.jpg"
        desc={
          <>
            <p>
              Advanz Tech Works is a trusted name for luxury car battery
              replacement in Dubai, offering unmatched expertise in
              high-performance and premium vehicles. Our skilled technicians
              possess in-depth knowledge of complex automotive electrical
              systems, ensuring precise diagnostics and efficient battery
              replacement.
            </p>

            <p className="mt-4">
              We use genuine OEM batteries that meet manufacturer
              specifications, ensuring durability, compatibility, and long-term
              performance. With transparent pricing, exceptional workmanship,
              and a customer-focused approach, we provide peace of mind to
              luxury car owners seeking reliable battery solutions.
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
