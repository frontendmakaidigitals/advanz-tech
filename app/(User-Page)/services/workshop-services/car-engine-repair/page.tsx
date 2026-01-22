"use client";
import {
  Volume2,
  Droplet,
  Gauge,
  Activity,
  BadgeCheck,
  Zap,
  Thermometer,
  CloudIcon,
  AlertCircle,
  TrendingDown,
} from "lucide-react";
import Faq from "../sections/faq";
import Signs from "../sections/signs";
import Hero from "../sections/hero";
import WhyChooseUs from "../sections/why-choose-us";

import CTA from "../sections/CTA";
const imagePath = `/service-page/workshop/car-engine/`;
const CarACRepair = () => {
  const signs = [
    {
      title: "Unusual Engine Sounds",
      description:
        "Knocking, clicking, rattling, or grinding noises may indicate worn internal parts, loose components, or serious engine wear.",
      icon: <Volume2 />,
      image: `${imagePath}engine-noises.jpg`,
    },
    {
      title: "Loss of Power or Efficiency",
      description:
        "Noticeable drops in acceleration, engine response, or fuel economy often point to internal engine or combustion issues.",
      icon: <TrendingDown />,
      image: `${imagePath}slow-car.jpg`,
    },
    {
      title: "Check Engine Warning Light",
      description:
        "An illuminated engine warning light means your vehicle’s system has detected a fault that requires professional diagnosis.",
      icon: <AlertCircle />,
      image: `${imagePath}check-engine-light.jpg`,
    },
    {
      title: "Excessive Exhaust Smoke",
      description:
        "White, blue, or black smoke from the exhaust can signal oil burning, coolant leaks, or fuel mixture problems.",
      icon: <CloudIcon />,
      image: `${imagePath}car-exhaust-smoke.webp`,
    },
    {
      title: "Oil and Coolant Mixing",
      description:
        "Milky engine oil, frequent overheating, or coolant loss can indicate major engine faults such as gasket failure.",
      icon: <Droplet />,
      image: `${imagePath}coolant-mixing.jpg`,
    },
    {
      title: "High Oil Consumption",
      description:
        "Rapid oil loss may result from worn piston rings, damaged seals, or internal engine leaks.",
      icon: <Gauge />,
      image: `${imagePath}low-fuel.jpg`,
    },
    {
      title: "Engine Overheating",
      description:
        "Consistent overheating can cause severe damage and must be addressed immediately to avoid engine failure.",
      icon: <Thermometer />,
      image: `${imagePath}engine-overheating.jpg`,
    },
    {
      title: "Rough Idling or Stalling",
      description:
        "Vibrations, shaking, or stalling at idle may be caused by fuel delivery, ignition, or airflow issues.",
      icon: <Activity />,
      image: `${imagePath}stall-car.webp`,
    },
    {
      title: "Excessive Vibrations",
      description:
        "Strong vibrations during driving or idling can indicate faulty engine mounts or internal engine imbalance.",
      icon: <Zap />,
      image: `${imagePath}engine-vibration.jpg`,
    },
  ];
  const engineRepairSection = {
    title: "Our Car Engine Repair Services in Dubai",
    description:
      "We provide a complete range of engine repair and restoration solutions, delivered by experienced technicians using advanced diagnostic tools.",
    services: [
      { title: "Engine Diagnostics & Fault Code Analysis" },
      { title: "Complete Engine Overhaul Services" },
      { title: "Engine Oil Leak Detection & Repair" },
      { title: "Engine Replacement Solutions" },
      { title: "Engine Rebuild & Restoration" },
      { title: "Valve Cover Gasket Repair & Replacement" },
      { title: "Engine Control Module (ECU) Repair & Replacement" },
      { title: "Timing Belt & Timing Chain Replacement" },
      { title: "Head Gasket Repair & Replacement" },
      { title: "Cylinder Head Repair or Replacement" },
      { title: "Engine Mount Replacement" },
      { title: "Engine Seal & Gasket Replacement" },
      { title: "Engine Misfire Diagnosis & Repair" },
    ],
  };
  const faqs = [
    {
      question: "Where can I find reliable engine repair near me?",
      answer:
        "We provide professional car engine repair services in Dubai, backed by experienced technicians and advanced diagnostic tools for accurate and long-lasting repairs.",
    },
    {
      question: "How long does a car engine repair take?",
      answer:
        "Repair time depends on the severity of the issue. Minor repairs may take a few hours, while major overhauls or rebuilds may take several days.",
    },
    {
      question: "When should an engine be replaced instead of repaired?",
      answer:
        "Engine replacement is usually recommended when internal damage is extensive and repair costs exceed the value or reliability of rebuilding.",
    },
    {
      question: "Is replacing an engine a good option?",
      answer:
        "In many cases, a professionally replaced or rebuilt engine can restore performance and extend vehicle life significantly.",
    },
    {
      question: "How can I tell if my car engine is healthy?",
      answer:
        "Smooth acceleration, stable idling, no warning lights, normal fuel consumption, and quiet operation are signs of a healthy engine.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <Hero
        title1={"Car Engine Repair Services in Dubai"}
        title2={"Professional Engine Diagnostics, Repair & Overhaul"}
        btn={"Contact Us"}
        desc={
          " Your vehicle’s engine is its most critical component, and maintaining it is essential for performance, safety, and long-term reliability, especially in Dubai’s demanding driving conditions. Modern vehicles, particularly premium and European models, rely on advanced engine systems that require expert handling and precision care. "
        }
        img={`${imagePath}banner.png`}
      />
      {/* Signs Section */}
      <Signs
        title1={" When Do You Need a Car Engine Repair Service? "}
        title2={
          "Your vehicle may require immediate engine inspection or repair if you experience any of the following warning signs:"
        }
        data={signs}
        footerText={
          "Timely oil changes protect your engine, improve fuel efficiency, and prevent costly repairs."
        }
      />
      {/* Why Choose Section */}

      <WhyChooseUs
        title="Why Choose Us for Car Engine Repair in Dubai?"
        img="/brand-images/DSC02079.jpg"
        desc={
          <>
            <p>
              We are a trusted choice for comprehensive engine repair services
              in Dubai, delivering expert solutions with transparency and
              precision. Our certified technicians use advanced diagnostic
              equipment to accurately identify engine faults and recommend the
              most effective repair approach.
            </p>

            <p className="mt-3">
              From minor engine component replacements to complete engine
              overhauls and rebuilds, we handle every job with meticulous
              attention to detail. We also offer vehicle recovery services, so
              you don’t have to worry about transporting your car, your vehicle
              is collected and returned safely after repair.
            </p>
            <p className="mt-3">
              Whether you’re facing overheating issues, oil leaks, ignition
              problems, timing faults, or major internal engine damage, we keep
              you informed throughout the process and ensure your vehicle
              receives premium-quality care.
            </p>
          </>
        }
      />
      <section className="py-16 bg-slate-50 ">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl text-center font-domine md:text-4xl text-slate-900 font-semibold">
              {engineRepairSection.title}
            </h2>
            <p className="mt-4 text-neutral-800 text-center">
              {engineRepairSection.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineRepairSection.services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-xl bg-white border border-neutral-800/60 p-5  hover:border-amber-500/40 transition"
              >
                <BadgeCheck className="w-5 h-5 text-amber-500 shrink mt-1" />
                <span className="text-neutral8200">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-amber-100/30">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl text-center font-domine font-bold">
            Premium Oil Products
          </h1>
          <p className="text-center">
            At Advanz Tech, we use only high-quality oils that meet or exceed
            your manufacturer’s standards. Our selection includes:
          </p>
          <ul className="flex justify-center items-center gap-3">
            {[
              "Conventional Oils",
              "Synthetic Blends",
              "Full Synthetic Oils",
            ].map((item, index) => (
              <li
                key={index}
                className="bg-yellow-100 font-inter tracking-tight flex items-center gap-2 border border-yellow-200 rounded-xl p-3"
              >
                <span>
                  <BadgeCheck className="text-yellow-100 fill-green-500" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p>
            This ensures your engine receives optimal protection, maximum
            efficiency, and long-term reliability.
          </p>
        </div>
      </section>
      {/* FAQ Section */}

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
