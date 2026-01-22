"use client";
import {
  Volume2,
  Droplet,
  Gauge,
  BookOpen,
  TrafficCone,
  Activity,
  AlertTriangle,
  BadgeCheck,
} from "lucide-react";
import Faq from "../sections/faq";
import Signs from "../sections/signs";
import Hero from "../sections/hero";
import WhyChooseUs from "../sections/why-choose-us";
import Process from "../sections/process";
import CTA from "../sections/CTA";
const imagePath = `/service-page/workshop/car-oil-change/`;

const CarACRepair = () => {
  const signs = [
    {
      icon: <Gauge />,
      title: "Mileage Interval",
      description:
        "Most manufacturers recommend an oil change every 8,000 km to 15,000 km or annually, whichever comes first.",
      image: `${imagePath}car-milage.jpeg`,
    },
    {
      icon: <BookOpen />,
      title: "Manufacturer Recommendations",
      description:
        "Follow the schedule outlined in your vehicle owner’s manual for precise oil and filter change intervals.",
      image: `${imagePath}calender.webp`,
    },
    {
      icon: <TrafficCone />,
      title: "Driving Conditions",
      description:
        "Frequent stop-and-go traffic, towing, or driving in extreme temperatures may require more frequent oil changes.",
      image: `${imagePath}car-traffic.jpg`,
    },
    {
      icon: <Activity />,
      title: "Engine Performance",
      description:
        "Reduced performance, sluggish acceleration, or unusual engine behavior can indicate degraded oil.",
      image: `${imagePath}engine-performance.jpg`,
    },
    {
      icon: <Droplet />,
      title: "Oil Quality",
      description:
        "Dark, gritty, or burnt-smelling oil signals the need for an immediate change.",
      image: `${imagePath}oil-quality.webp`,
    },
    {
      icon: <AlertTriangle />,
      title: "Oil Pressure Warning Light",
      description:
        "If illuminated, this could mean low oil levels or degraded oil quality.",
      image: `${imagePath}oil-warning-light.png`,
    },
    {
      icon: <Volume2 />,
      title: "Unusual Engine Noises",
      description:
        "Knocking or ticking sounds may indicate insufficient lubrication due to old or contaminated oil.",
      image: `${imagePath}engine-noises.jpg`,
    },
  ];
  const processSteps = [
    {
      number: 1,
      title: "AC Inspection & Diagnostics",
      description:
        "We begin with a thorough inspection using advanced diagnostic equipment.",
    },
    {
      number: 2,
      title: "Issue Identification",
      description:
        "Our technicians accurately identify faults such as leaks, compressor failure, or electrical issues.",
    },
    {
      number: 3,
      title: "Repair & Replacement",
      description:
        "Faulty components are repaired or replaced using high-quality parts and approved procedures.",
    },
    {
      number: 4,
      title: "System Cleaning",
      description:
        "The AC system is cleaned, disinfected, and recharged with the correct refrigerant.",
    },
    {
      number: 5,
      title: "Final Testing",
      description:
        "We test cooling performance, airflow, and temperature control before vehicle delivery.",
    },
  ];
  const faqs = [
    {
      question: "How to find car oil change near me?",
      answer:
        "For a reliable car oil change in Dubai, visit Advanz Tech. We provide a full range of oil services, including engine oil change, oil filter replacement, transmission fluid change, and engine flushing for all vehicle types.",
    },
    {
      question: "How often should you change car oil?",
      answer:
        "Most vehicles require an oil change every 8,000 km to 15,000 km or at least once a year. Driving in harsh conditions may require more frequent changes.",
    },
    {
      question: "How do I know when my car needs an oil change?",
      answer:
        "Signs include dark or gritty oil, unusual engine noises, sluggish performance, or the oil warning light on your dashboard.",
    },
    {
      question: "How important is an oil change for a car?",
      answer:
        "Regular oil changes protect engine components, prevent wear and overheating, improve efficiency, and prolong your vehicle’s lifespan.",
    },
    {
      question: "What is the life of engine oil?",
      answer:
        "This varies based on oil type, driving conditions, and manufacturer recommendations. Premium synthetic oils typically last longer than conventional oils.",
    },
    {
      question: "What’s the cost of an engine oil change in Dubai?",
      answer:
        "Pricing depends on your vehicle type, oil type, and any additional services. At Advanz Tech, we provide transparent, affordable rates for all vehicles.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <Hero
        title1={"Car Oil Change Service: Premium Engine Oil Change in Dubai"}
        title2={"Car Engine Oil Change and Service"}
        btn={"Contact Us"}
        desc={
          " A timely car oil change in Dubai is essential for maintaining the performance and longevity of your vehicle’s engine. Engine oil lubricates critical components, reduces friction, and prevents overheating. Over time, it collects impurities that can reduce efficiency and lead to wear and tear. "
        }
        img={`${imagePath}banner.jpg`}
      />
      {/* Signs Section */}
      <Signs
        title1={"Signs Your Car Needs an Oil Change in Dubai"}
        title2={
          "Regular oil changes are key to engine health, but how do you know when it’s time? Your car may require an oil change service if you notice any of the following:"
        }
        data={signs}
        footerText={
          "Timely oil changes protect your engine, improve fuel efficiency, and prevent costly repairs."
        }
      />
      {/* Why Choose Section */}

      <WhyChooseUs
        title="Why Choose Advanz Tech?"
        img="/brand-images/DSC02079.jpg"
        desc={
          <>
            <p>
              When searching for car AC repair near me, choosing a workshop with
              proven expertise and advanced capabilities is essential. At Advanz
              Tech, we bring together highly trained HVAC specialists,
              cutting-edge diagnostic equipment, and premium-grade refrigerants
              to deliver precise, long-lasting car AC repair solutions.
            </p>

            <p className="mt-4">
              Our approach goes beyond basic repairs – every vehicle undergoes
              detailed system diagnostics, professional cleaning, and careful
              calibration to restore optimal cooling performance. From modern
              passenger cars to high-performance and luxury vehicles, we ensure
              every air conditioning system meets manufacturer standards for
              efficiency, reliability, and safety.
            </p>
          </>
        }
      />
      {/* Process Section */}
      <Process
        title={"Our Engine Oil Change Process in Dubai"}
        data={processSteps}
      />

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
