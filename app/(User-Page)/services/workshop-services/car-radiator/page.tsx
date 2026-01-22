"use client";
import {
  Wind,
  Thermometer,
  Droplet,
  TrendingDown,
  AlertCircle,
  Filter,
} from "lucide-react";
import Faq from "../sections/faq";
import Signs from "../sections/signs";
import Hero from "../sections/hero";
import WhyChooseUs from "../sections/why-choose-us";

import CTA from "../sections/CTA";
const imagePath = `/service-page/workshop/car-radiator/`;

const CarACRepair = () => {
  const signs = [
    {
      title: "Engine Overheating",
      description:
        "An elevated temperature gauge or steam coming from the engine bay often indicates cooling system failure.",
      image: `${imagePath}engine-overheating.webp`,
      icon: <Thermometer />,
    },
    {
      title: "Coolant Leaks",
      description:
        "Visible coolant puddles under the vehicle or damp areas around hoses and radiator connections suggest leaks that require immediate attention.",
      image: `${imagePath}fuel-leaks.png`,
      icon: <Droplet />,
    },
    {
      title: "Reduced Engine Performance",
      description:
        "An inefficient cooling system can affect engine performance, causing power loss, rough running, or increased fuel consumption.",
      image: `${imagePath}engine-power-reduced.webp`,
      icon: <TrendingDown />,
    },
    {
      title: "Corrosion or Deposits",
      description:
        "Rust, scaling, or mineral buildup on the radiator or cap may point to internal deterioration or contamination.",
      image: `${imagePath}rusty-radiator.webp`,
      icon: <AlertCircle />,
    },
    {
      title: "Discolored Coolant",
      description:
        "Cloudy, rusty, or muddy coolant signals contamination and reduced cooling efficiency.",
      image: `${imagePath}discolored-coolant.jpeg`,
      icon: <Filter />,
    },
    {
      title: "Unusual Odors",
      description:
        "A sweet smell inside the cabin or near the engine can indicate coolant leakage or overheating fluid.",
      image: `${imagePath}unusual-odor.webp`,
      icon: <Wind />,
    },
  ];

  const faqs = [
    {
      question: "How can I tell if my radiator is failing?",
      answer:
        "Common signs include engine overheating, frequent coolant loss, visible leaks, discolored coolant, or unusual smells coming from the engine area.",
    },
    {
      question: "What is the cost of repairing a radiator leak in the UAE?",
      answer:
        "Repair costs vary depending on the severity of the leak and vehicle type. Minor repairs are more affordable than extensive radiator replacements.",
    },
    {
      question: "Is a radiator leak normal?",
      answer:
        "Radiator leaks are not normal and usually indicate wear, corrosion, or component failure that requires repair.",
    },
    {
      question: "Is radiator repair expensive?",
      answer:
        "Costs depend on the extent of damage. Early detection typically keeps repair costs manageable.",
    },
    {
      question: "Can a radiator be repaired?",
      answer:
        "Yes, many radiator issues such as leaks, hose damage, or contamination can be repaired without replacing the entire unit.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <Hero
        title1={"Car Radiator Repair Services in Dubai"}
        title2={"Professional Cooling System Inspection, Repair & Maintenance"}
        btn={"Contact Us"}
        desc={
          " Luxury European vehicles are built with advanced engineering to deliver superior performance, but high engine temperatures are a natural result of daily driving, especially in Dubai’s extreme climate. The radiator plays a crucial role in regulating engine temperature by dispersing heat and preventing overheating. "
        }
        img={`${imagePath}banner.jpeg`}
      />
      {/* Signs Section */}
      <Signs
        title1={"How Can You Tell If Your Car Needs Radiator Repair?"}
        title2={
          "You may require professional radiator repair or cooling system service if you notice any of the following warning signs: "
        }
        data={signs}
        footerText={" "}
      />

      <WhyChooseUs
        title="Why Choose Us for Radiator Repair Services in Dubai?"
        img="/brand-images/DSC02079.jpg"
        desc={
          <>
            <p>
              We provide specialized radiator repair and cooling system services
              focused on protecting your engine and extending vehicle lifespan.
              Our certified technicians use manufacturer-approved parts and
              advanced diagnostic tools to accurately identify cooling system
              issues and carry out precise repairs.
            </p>

            <p className="mt-4">
              Our services include radiator leak repair, component replacement,
              coolant system flushing, and routine maintenance to ensure optimal
              temperature control. We prioritize transparency, competitive
              pricing, and clear communication throughout the repair process.
            </p>
            <p className="mt-2">
              With careful workmanship and attention to detail, we ensure your
              engine remains properly cooled and performs efficiently, even in
              demanding driving conditions. Trust our team for reliable radiator
              repair services that keep your vehicle running smoothly and
              safely.
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
