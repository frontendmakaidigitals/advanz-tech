"use client";
import {
  Volume2,
  AlertTriangle,
  AlertCircle,
  Activity,
  Zap,
  Power,
  Leaf,
  CircleGauge,
} from "lucide-react";
import Faq from "../sections/faq";
import Signs from "../sections/signs";
import Hero from "../sections/hero";
import WhyChooseUs from "../sections/why-choose-us";
import CTA from "../sections/CTA";
const imagePath = `/service-page/workshop/car-fuel-injector/`;

const CarACRepair = () => {
  const signs = [
    {
      title: "Rough or Unstable Idling",
      description:
        "Inconsistent or rough idling often indicates clogged or partially blocked fuel injectors affecting fuel delivery.",
      image: `${imagePath}blocked-fuel-injectors.jpg`,
      icon: <Activity />,
    },
    {
      title: "Engine Misfires",
      description:
        "Misfires occur when the fuel-air mixture fails to ignite properly in one or more cylinders, often caused by injector blockages.",
      image: `${imagePath}Engine Misfires.png`,
      icon: <AlertTriangle />,
    },
    {
      title: "Reduced Fuel Efficiency",
      description:
        "A sudden drop in mileage or increased fuel consumption may signal inefficient fuel injection.",
      image: `${imagePath}low-fuel.jpg`,
      icon: <Zap />,
    },
    {
      title: "Difficulty Starting the Engine",
      description:
        "Hard starting, prolonged cranking, or multiple start attempts can indicate fuel pressure or injector performance issues.",
      image: `${imagePath}start-stop-engine.jpg`,
      icon: <Power />,
    },
    {
      title: "Unusual Engine Noises",
      description:
        "Clicking, ticking, or hissing sounds from the engine bay may be related to irregular fuel injector operation.",
      image: `${imagePath}engine-noises.jpg`,
      icon: <Volume2 />,
    },
    {
      title: "Check Engine Light",
      description:
        "An illuminated check engine light often points to engine or emission system issues, including faulty or dirty injectors.",
      image: `${imagePath}check-engine-light.jpg`,
      icon: <AlertCircle />,
    },
    {
      title: "Failed Emissions Tests",
      description:
        "A poorly functioning fuel injection system can increase emissions and cause your vehicle to fail regulatory emission tests.",
      image: `${imagePath}car-exhaust-smoke.webp`,
      icon: <Leaf />,
    },
    {
      title: "Decreased Engine Performance",
      description:
        "Sluggish acceleration, reduced power output, or poor throttle response are common signs of clogged fuel injectors.",
      image: `${imagePath}slow-car.jpg`,
      icon: <CircleGauge />,
    },
  ];

  const faqs = [
    {
      question: "Does cleaning fuel injectors fix them?",
      answer:
        "Fuel injector cleaning can effectively restore proper fuel delivery if the injectors are clogged or dirty. However, severely damaged injectors may require replacement.",
    },
    {
      question: "Can fuel injectors be repaired?",
      answer:
        "In some cases, injectors can be serviced or cleaned. If internal components are damaged, replacement may be necessary.",
    },
    {
      question: "Is it better to clean or replace fuel injectors?",
      answer:
        "Cleaning is recommended when injectors are dirty or mildly clogged. Replacement is advised if injectors are worn or mechanically damaged.",
    },
    {
      question: "How do I know if my fuel injectors need cleaning?",
      answer:
        "Symptoms include rough idling, poor fuel economy, engine misfires, sluggish acceleration, or an illuminated check engine light.",
    },
    {
      question: "How long does a fuel injector last?",
      answer:
        "Fuel injectors typically last between 80,000–150,000 km, depending on driving habits, fuel quality, and maintenance.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <Hero
        title1={"Car Fuel Injector Cleaning in Dubai"}
        title2={" Trusted Car Fuel Injector Cleaning Services"}
        btn={"Contact Us"}
        desc={
          " The fuel injection system is a critical component of modern automotive engineering, designed to deliver precise amounts of fuel into the engine for optimal combustion. By accurately controlling the fuel-air mixture, this system improves fuel efficiency, enhances engine performance, and reduces harmful emissions."
        }
        img={`${imagePath}banner.jpeg`}
      />
      {/* Signs Section */}
      <Signs
        title1={"When Do You Need Fuel Injector Cleaning?"}
        title2={
          "If you notice any of the following symptoms, your vehicle may require fuel injector cleaning or inspection:"
        }
        data={signs}
        footerText={" "}
      />

      <WhyChooseUs
        title="Why Choose Munich Motor Works for Fuel Injector Cleaning in Dubai?"
        img="/brand-images/DSC02079.jpg"
        desc={
          <>
            <p>
              At Munich Motor Works, our fuel injector cleaning process begins
              with advanced diagnostics using manufacturer-approved tools to
              identify injector-related issues accurately. Our certified
              technicians utilize professional-grade cleaning equipment and
              OEM-quality components to restore optimal injector performance.
            </p>

            <p className="mt-4">
              We take a meticulous approach to ensure efficient fuel delivery,
              improved combustion, and long-term engine reliability. In addition
              to injector cleaning, we offer a comprehensive range of luxury car
              maintenance and repair services—making us your trusted one-stop
              solution for all automotive needs.
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
