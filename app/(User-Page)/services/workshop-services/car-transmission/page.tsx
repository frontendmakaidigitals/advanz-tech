"use client";
import {
  VolumeX,
  Shuffle,
  Clock,
  Droplet,
  AlertTriangle,
  Sliders,
  Hand,
  XCircle,
} from "lucide-react";
import Faq from "../sections/faq";
import Signs from "../sections/signs";
import Hero from "../sections/hero";
import WhyChooseUs from "../sections/why-choose-us";

import CTA from "../sections/CTA";
const imagePath = `/service-page/workshop/car-transmission/`;
const CarACRepair = () => {
  const signs = [
    {
      title: "Unusual Noises",
      description:
        "Grinding, whining, humming, or clunking sounds during gear changes may signal internal transmission wear or damage.",
      image: `${imagePath}engine-noises.jpg`,
      icon: <VolumeX />,
    },
    {
      title: "Slipping Gears",
      description:
        "If your vehicle unexpectedly changes gears or struggles to stay in gear, the transmission may be failing.",
      image: `${imagePath}transmission-slipping.jpg`,
      icon: <Shuffle />,
    },
    {
      title: "Delayed Gear Engagement",
      description:
        "A noticeable delay between shifting gears and the vehicle responding can indicate low fluid pressure or internal faults.",
      image: `${imagePath}MINI-Delayed-Gear.jpg`,
      icon: <Clock />,
    },
    {
      title: "Transmission Fluid Leaks",
      description:
        "Red or dark fluid pooling beneath your vehicle is a clear sign of a transmission fluid leak that must be addressed promptly.",
      image: `${imagePath}fuel-leaks.png`,
      icon: <Droplet />,
    },
    {
      title: "Warning Lights",
      description:
        "Illuminated transmission or check engine warning lights indicate a system fault requiring professional diagnostics.",
      image: `${imagePath}check-engine-light.avif`,
      icon: <AlertTriangle />,
    },
    {
      title: "Difficulty Shifting",
      description:
        "Hard, rough, or stuck gear shifts often point to internal transmission or clutch-related issues.",
      image: `${imagePath}difficulty-shifting-gear.webp`,
      icon: <Sliders />,
    },
    {
      title: "Dragging Clutch (Manual Vehicles)",
      description:
        "A dragging clutch can prevent smooth gear changes and signals the need for repair or adjustment.",
      image: `${imagePath}dragging-clutch.jpg`,
      icon: <Hand />,
    },
    {
      title: "Vehicle Not Moving",
      description:
        "If the engine runs but the car does not move when in gear, this may indicate a severe transmission failure.",
      image: `${imagePath}stalled-vehicle.webp`,
      icon: <XCircle />,
    },
  ];

  const faqs = [
    {
      question: "Where can I find transmission repair near me in Dubai?",
      answer:
        "Munich Motor Works is one of the leading luxury car service centers in Dubai, offering expert transmission repair and maintenance services. Our technicians have over 15 years of experience handling advanced transmission systems.",
    },
    {
      question: "Is a transmission repairable?",
      answer:
        "Yes, many transmission issues can be repaired or rebuilt depending on the extent of damage.",
    },
    {
      question: "Can I drive with a bad transmission?",
      answer:
        "Driving with a faulty transmission can cause further damage and lead to complete transmission failure. Immediate inspection is recommended.",
    },
    {
      question: "What are the symptoms of a bad transmission?",
      answer:
        "Common symptoms include slipping gears, delayed shifting, fluid leaks, warning lights, and unusual noises.",
    },
    {
      question: "How long will a bad transmission last?",
      answer:
        "A failing transmission may last a short time, but continued driving can rapidly worsen the damage.",
    },
    {
      question: "Can automatic transmissions be repaired?",
      answer:
        "Yes, automatic transmissions can often be repaired or rebuilt depending on the issue.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <Hero
        title1={"Car Transmission Repair in Dubai"}
        title2={" Trusted Car Fuel Injector Cleaning Services"}
        btn={"Contact Us"}
        desc={
          "The transmission system plays a vital role in transferring power from the engine to the wheels smoothly and efficiently, ensuring optimal performance, fuel efficiency, and driving comfort. It enables precise gear changes that adapt to driving conditions while maintaining a refined ride quality—especially important in luxury vehicles."
        }
        img={`${imagePath}banner.jpeg`}
      />
      {/* Signs Section */}
      <Signs
        title1={"When Do You Require Car Transmission Repair?"}
        title2={
          "If your vehicle displays any of the following symptoms, it may indicate a transmission issue requiring immediate attention:"
        }
        data={signs}
        footerText={" "}
      />

      <WhyChooseUs
        title="Why Choose Munich Motor Works for Transmission Repair in Dubai?"
        img="/brand-images/DSC02079.jpg"
        desc={
          <>
            <p>
              At Munich Motor Works, we specialize in transmission and gearbox
              repairs for high-performance European luxury brands such as BMW,
              Audi, Mercedes-Benz, Porsche, and more. Our highly trained
              technicians possess extensive expertise in diagnosing and
              repairing complex transmission systems with precision.
            </p>

            <p className="mt-4">
              We use OEM-approved parts, advanced diagnostic equipment, and
              manufacturer-recommended repair procedures to ensure reliability
              and performance. With transparent pricing, professional service,
              and optional warranty coverage, we deliver a seamless and
              stress-free experience for luxury car owners.
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
