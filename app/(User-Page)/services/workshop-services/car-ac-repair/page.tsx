"use client";
import {
  Snowflake,
  Wind,
  AlertCircle,
  Volume2,
  Droplet,
  CloudFog,
} from "lucide-react";
import Faq from "../sections/faq";
import Signs from "../sections/signs";
import Hero from "../sections/hero";
import WhyChooseUs from "../sections/why-choose-us";
import Process from "../sections/process";
import CTA from "../sections/CTA";
const imagePath = `/service-page/workshop/car-ac-repair/`;
const CarACRepair = () => {
  const signs = [
    {
      icon: <Snowflake className="w-6 h-6" />,
      title: "Lack of Cold Air",
      description:
        "Low refrigerant levels, compressor issues, or leaks can reduce cooling efficiency. Professional car AC servicing can quickly resolve this.",
      image: `${imagePath}lack-of-cold-air.jpg`,
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Weak Airflow",
      description:
        "Blocked air filters, faulty blower motors, or duct issues can restrict airflow from the vents.",
      image: `${imagePath}weak-air-flow.jpg`,
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Strange Odors",
      description:
        "Musty or moldy smells often indicate bacterial buildup inside the AC system and require cleaning and disinfection.",
      image: `${imagePath}strange-odor.webp`,
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Unusual Noises",
      description:
        "Rattling, grinding, or squealing sounds may signal worn components such as the compressor, fan motor, or bearings.",
      image: `${imagePath}unusual-noises.avif`,
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "Visible Leaks",
      description:
        "Fluid puddles under your vehicle could indicate refrigerant leakage that affects AC performance.",
      image: `${imagePath}visible-leaks.jpg`,
    },
    {
      icon: <CloudFog className="w-6 h-6" />,
      title: "Ineffective Defrosting",
      description:
        "Poor windshield clearing can point to HVAC system faults that need immediate attention.",
      image: `${imagePath}ineffective-defrosting.avif`,
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
      question: "Where can I find car AC repair near me?",
      answer:
        "If you're searching for car AC repair near me in Dubai, Advanz Tech is a trusted choice. Our workshop is equipped with advanced HVAC diagnostic tools, and our technicians have years of experience servicing all types of car AC systems. We provide professional, reliable, and long-lasting repairs to keep your vehicle cool and comfortable, no matter the weather.",
    },
    {
      question: "Why is my car's AC running but not cooling?",
      answer:
        "A car AC that runs but doesn't cool properly can be caused by several issues, including low refrigerant levels, a faulty compressor, clogged condensers, or leaks in the AC system. At Advanz Tech, we perform a thorough inspection to pinpoint the exact cause and restore your AC's performance efficiently.",
    },
    {
      question: "How do I know if my car AC needs repair?",
      answer:
        "Some common signs that your car AC needs attention include weak airflow, warm air from the vents, strange noises, unusual odors, or inconsistent cooling. If you notice any of these symptoms, it's important to have your AC checked promptly to prevent more costly repairs later.",
    },
    {
      question: "Can the AC in a car be fixed?",
      answer:
        "Yes, most car AC issues can be repaired. Whether the problem is a refrigerant leak, electrical fault, compressor issue, or clogged components, our skilled technicians at Advanz Tech can diagnose and repair your AC system to restore optimal performance.",
    },
    {
      question: "What does a bad AC compressor sound like in a car?",
      answer:
        "A failing AC compressor may produce grinding, rattling, squealing, or clicking sounds when the AC is turned on. These noises indicate mechanical wear or internal damage, which should be inspected immediately by professionals to avoid further system damage.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <Hero
        title1={"Car AC Repair Dubai"}
        title2={"  Trusted Auto AC Repair & Maintenance Services"}
        btn={"Contact Us"}
        desc={
          " In the UAE's extreme climate, a fully functional car air conditioning system is essential for comfort and safety. At Advanz Tech, we provide professional auto AC repair and maintenance services to keep your vehicle cool, comfortable, and efficient all year round."
        }
        img={`${imagePath}banner.png`}
      />
      {/* Signs Section */}
      <Signs
        title1={"Signs Your Car AC Needs Repair"}
        title2={
          "If you're experiencing any of the following issues, your vehicle may require immediate car AC repair service"
        }
        data={signs}
        footerText=" Ignoring these signs can lead to costly repairs – early diagnosis saves time and money."
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
      <Process title={"Our AC Repair Process"} data={processSteps} />

      {/* FAQ Section */}

      <Faq faqs={faqs} />
      {/* CTA Section */}
      <CTA
        title="Book Your Car AC Repair in Dubai Today"
        desc={
          "Don't let AC issues ruin your driving comfort, especially in Dubai's heat. Trust Advanz Tech for professional, efficient, and affordable car AC repair services."
        }
        btn1={" Call Us Today"}
        btn2={" Book Appointment"}
        img={"/cta.png"}
      />
    </>
  );
};

export default CarACRepair;
