"use client";
import { Wind, Settings, AlertCircle, Armchair, Calendar } from "lucide-react";
import Faq from "../sections/faq";
import Signs from "../sections/signs";
import Hero from "../sections/hero";
import WhyChooseUs from "../sections/why-choose-us";

import CTA from "../sections/CTA";

const imagePath = `/service-page/workshop/car-comfort/`;
const CarACRepair = () => {
  const signs = [
    {
      title: "Reduced System Functionality",
      description:
        "Malfunctioning air conditioning, heating, seat controls, power windows, or mirror adjustments indicate the need for professional comfort system repair.",
      image: `${imagePath}car-interior-repair.jpg`,
      icon: <Settings />,
    },
    {
      title: "Cabin Discomfort",
      description:
        "Unusual odors, inconsistent temperature levels, weak airflow, strange noises, or delayed response from controls suggest underlying comfort system faults.",
      image: `${imagePath}cabin-discomfort.jpg`,
      icon: <AlertCircle />,
    },
    {
      title: "Seating Issues",
      description:
        "Faulty seat adjustments, uneven cushioning, poor lumbar support, or worn upholstery can reduce comfort and require attention.",
      image: `${imagePath}car-seating-issue.webp`,
      icon: <Armchair />,
    },
    {
      title: "Scheduled Preventive Maintenance",
      description:
        "Routine servicing based on manufacturer guidelines helps prevent failures and maintains optimal comfort and performance.",
      image: `${imagePath}car-interior-service.jpeg`,
      icon: <Calendar />,
    },
    {
      title: "HVAC System Irregularities",
      description:
        "Inefficient heating or cooling performance requires inspection of HVAC components, electrical systems, and fluid levels as part of comfort system maintenance.",
      image: `${imagePath}weak-air-flow.jpg`,
      icon: <Wind />,
    },
  ];

  const faqs = [
    {
      question: "What are common problems with a car’s heating system?",
      answer:
        "Typical heating system issues include malfunctioning thermostats, heater core leaks, blocked airflow, or inconsistent cabin temperature output.",
    },
    {
      question:
        "How can I tell if my car’s air conditioning system needs repair?",
      answer:
        "Signs include weak cooling, unpleasant odors, inconsistent airflow, strange noises, or failure to maintain the desired cabin temperature.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <Hero
        title1={"Car Comfort System Repair Services in Dubai"}
        title2={
          "Advanced Interior Comfort, Climate & Convenience System Solutions"
        }
        btn={"Contact Us"}
        desc={
          "A luxury vehicle’s comfort system plays a vital role in delivering a smooth, enjoyable, and fatigue-free driving experience. These systems are designed to maintain ideal cabin temperature, enhance seating ergonomics, and improve convenience for both drivers and passengers, regardless of external weather conditions. "
        }
        img={`${imagePath}banner.jpg`}
      />
      {/* Signs Section */}
      <Signs
        title1={
          "When Should You Consider Car Comfort System Repair or Maintenance?"
        }
        title2={
          "If you experience any of the following issues, your vehicle may require comfort system inspection, repair, or scheduled maintenance: "
        }
        data={signs}
        footerText={" "}
      />

      <WhyChooseUs
        title="Why Choose Us for Car Comfort System Repair in Dubai?"
        img="/brand-images/DSC02079.jpg"
        desc={
          <>
            <p>
              We provide specialized comfort system repair and maintenance
              services tailored for luxury, German, and European vehicles. Our
              technicians are trained to diagnose and resolve complex climate
              control, seating, and electronic comfort system issues with
              precision.
            </p>

            <p className="mt-4">
              We utilize manufacturer-approved parts, advanced diagnostic tools,
              and offer warranty coverage on selected repairs to ensure quality
              and reliability. With a strong commitment to customer
              satisfaction, we focus on delivering seamless service and
              long-lasting results, making us a trusted choice for premium
              vehicle comfort system care.
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
