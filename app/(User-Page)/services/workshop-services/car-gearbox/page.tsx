"use client";
import {
  Wrench,
  AlertTriangle,
  VolumeX,
  Droplet,
  DropletOff,
  Settings,
  Cpu,
} from "lucide-react";
import Faq from "../sections/faq";
import Signs from "../sections/signs";
import Hero from "../sections/hero";
import WhyChooseUs from "../sections/why-choose-us";

import CTA from "../sections/CTA";
const imagePath = `/service-page/workshop/car-gearbox/`;

const CarACRepair = () => {
  const signs = [
    {
      title: "General Wear and Deterioration",
      description:
        "Worn internal components can lead to harsh gear changes, delayed engagement, or fluid seepage, indicating the need for repair or overhaul.",
      image: `${imagePath}worn-out.avif`,
      icon: <Wrench />,
    },
    {
      title: "Gear Slippage",
      description:
        "If your vehicle unexpectedly slips out of gear or struggles to remain engaged, immediate gearbox repair is advised to avoid further internal damage.",
      image: `${imagePath}gear-slippage.webp`,
      icon: <AlertTriangle />,
    },
    {
      title: "Abnormal Noises or Vibrations",
      description:
        "Grinding, whining, clunking sounds, or noticeable vibrations may point to damaged gears, bearings, or internal assemblies requiring professional attention.",
      image: `${imagePath}engine-noises.jpg`,
      icon: <VolumeX />,
    },
    {
      title: "Contaminated Transmission Fluid",
      description:
        "Dirty or burnt transmission fluid can cause overheating and erratic shifting. In such cases, gearbox inspection and internal cleaning or repair may be required.",
      image: `${imagePath}transmission-fluid.jpg`,
      icon: <Droplet />,
    },
    {
      title: "Transmission Fluid Leaks",
      description:
        "Unresolved fluid leaks reduce lubrication and cooling, increasing the risk of gearbox failure. Prompt repair is recommended to correct the source.",
      image: `${imagePath}fuel-leaks.png`,
      icon: <DropletOff />,
    },
    {
      title: "Difficulty Engaging or Shifting Gears",
      description:
        "Delayed response or difficulty shifting gears often indicates internal faults that may require gearbox repair or overhaul.",
      image: `${imagePath}difficult-engaging.webp`,
      icon: <Settings />,
    },
    {
      title: "Transmission Fault Codes",
      description:
        "Diagnostic trouble codes related to the transmission system signal internal or electronic issues that may need in-depth inspection and repair.",
      image: `${imagePath}transmission-fault-code.webp`,
      icon: <Cpu />,
    },
  ];
  const gearboxSystems = [
    {
      title: "ZF 6-Speed Automatic (ZF 6HP)",
      description:
        "A 6-speed automatic transmission designed for longitudinal engine layouts, featuring a hydraulic torque converter and planetary gearsets. Extended torque converter lock-up can lead to increased internal wear over time.",
    },
    {
      title: "ZF 8-Speed Automatic (ZF 8HP)",
      description:
        "An advanced 8-speed automatic gearbox engineered to improve fuel efficiency and driving comfort. Some vehicles may experience harsh or irregular gear changes that require professional calibration or repair.",
    },
    {
      title: "Getrag Transmissions",
      description:
        "Getrag produces a wide range of manual and automatic gearboxes used by several performance and luxury brands. Certain models may develop second-gear wear issues due to internal component fatigue.",
    },
  ];

  const faqs = [
    {
      question: "How much does gearbox repair cost?",
      answer:
        "The cost of gearbox repair varies depending on the severity of the issue. Minor repairs may cost significantly less than full rebuilds or replacements. Pricing depends on damage level, vehicle type, and required parts.",
    },
    {
      question: "Can a gearbox be repaired?",
      answer:
        "Yes, many gearbox problems can be repaired without replacing the entire unit, depending on the condition and extent of internal damage.",
    },
    {
      question: "What are common signs of gearbox problems?",
      answer:
        "Warning signs include slipping gears, rough shifting, unusual noises, delayed gear engagement, fluid leaks, and transmission warning lights.",
    },
    {
      question: "Is it possible to repair a gearbox without replacing it?",
      answer:
        "In many cases, internal components can be repaired or replaced without the need for a full gearbox replacement.",
    },
    {
      question: "Is it safe to drive with a faulty gearbox?",
      answer:
        "Driving with a damaged gearbox can lead to further damage and safety risks. It’s best to have the issue inspected as soon as symptoms appear.",
    },
    {
      question: "What causes gearbox damage?",
      answer:
        "Gearbox damage can result from fluid leaks, overheating, aggressive driving, poor maintenance, or worn internal components.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <Hero
        title1={"Car Gearbox Repair Services in Dubai"}
        title2={"Expert Transmission Diagnostics, Repair & Overhaul"}
        btn={"Contact Us"}
        desc={
          " Ever wondered how your car converts engine power into smooth motion on the road? This process is managed by the transmission system, where the gearbox plays a central role in controlling speed and torque before transferring power to the wheels.  "
        }
        img={`${imagePath}banner.png`}
      />
      {/* Signs Section */}
      <Signs
        title1={"When Do We Recommend Gearbox Repair or Overhaul?"}
        title2={
          "A gearbox repair or overhaul is a detailed process aimed at restoring smooth shifting, durability, and transmission reliability. "
        }
        data={signs}
        footerText={" "}
      />
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Gearbox Systems We Service
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {gearboxSystems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs
        title="Why Choose Us for Gearbox Repair in Dubai?"
        img="/brand-images/DSC02079.jpg"
        desc={
          <>
            <p>
              We provide comprehensive gearbox repair and transmission overhaul
              services at our independent automotive workshop in Dubai. Our
              technicians have extensive hands-on experience with complex
              transmission systems and utilize advanced diagnostic technology to
              ensure accurate fault identification and long-lasting repairs.
            </p>

            <p className="mt-4">
              Every repair is approached with precision, transparency, and
              attention to detail—whether it’s a minor gearbox adjustment or a
              complete transmission rebuild. We are committed to delivering
              reliable results and exceptional customer service, treating every
              vehicle with the same level of care and expertise.
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
