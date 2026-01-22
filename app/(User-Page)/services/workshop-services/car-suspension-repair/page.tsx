"use client";
import {
  BatteryCharging,
  Lightbulb,
  Snowflake,
  BatteryMedium,
  Activity,
  Sliders,
  AlertTriangle,
  VolumeX,
  AlertCircle,
  ArrowDown,
  Clock,
} from "lucide-react";
import Faq from "../sections/faq";
import Signs from "../sections/signs";
import Hero from "../sections/hero";
import WhyChooseUs from "../sections/why-choose-us";

import CTA from "../sections/CTA";
const imagePath = `/service-page/workshop/car-suspension/`;
const CarACRepair = () => {
  const signs = [
    {
      title: "Poor Handling",
      description:
        "If your vehicle sways excessively, drifts during turns, or feels unstable while driving, it could signal suspension system wear or damage.",
      image: `${imagePath}poor-handling.avif`,
      icon: <Sliders />,
    },
    {
      title: "Uneven Tire Wear",
      description:
        "Uneven or premature tire wear, especially on one side, may be caused by suspension issues or misalignment.",
      image: `${imagePath}tire-wear.jpg`,
      icon: <AlertTriangle />,
    },
    {
      title: "Excessive Bouncing",
      description:
        "A bouncy ride over bumps or rough roads suggests worn shocks or struts that require replacement.",
      image: `${imagePath}excessive-bouncing.webp`,
      icon: <Activity />,
    },
    {
      title: "Knocking or Clunking Noises",
      description:
        "Unusual noises when driving over bumps or turning corners often indicate worn suspension components such as bushings or control arms.",
      image: `${imagePath}knocking-noise.png`,
      icon: <VolumeX />,
    },
    {
      title: "Visible Damage",
      description:
        "Leaking shocks, damaged struts, broken bushings, or bent suspension arms are clear indicators that suspension repair is needed.",
      image: `${imagePath}visible-damage.webp`,
      icon: <AlertCircle />,
    },
    {
      title: "Vehicle Sagging",
      description:
        "If one corner of your vehicle sits lower than the others, it may be due to weakened springs or damaged suspension parts.",
      image: `${imagePath}vehicle-sagging.jpg`,
      icon: <ArrowDown />,
    },
  ];

  const faqs = [
    {
      question: "Where can I find the best suspension repair near me in Dubai?",
      answer:
        "Munich Motor Works is one of Dubai’s leading luxury car service centers, offering expert suspension repair services with technicians boasting over 15 years of experience.",
    },
    {
      question: "How do I know if my suspension is bad?",
      answer:
        "Common signs include poor handling, excessive bouncing, uneven tire wear, strange noises, or visible damage to suspension components.",
    },
    {
      question: "What causes suspension damage?",
      answer:
        "Suspension damage can result from rough road conditions, potholes, accidents, worn components, or high vehicle mileage.",
    },
    {
      question: "Can you drive with a bad suspension?",
      answer:
        "Driving with a faulty suspension is unsafe and can compromise vehicle control, braking efficiency, and tire life.",
    },
    {
      question: "Can suspension damage be repaired?",
      answer:
        "Yes, most suspension issues can be repaired or components replaced to restore safety, comfort, and performance.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <Hero
        title1={"Car Suspension Repair in Dubai"}
        title2={" Trusted Car Suspension Repair Services"}
        btn={"Contact Us"}
        desc={
          " The suspension system plays a critical role in delivering a smooth, stable, and comfortable driving experience by absorbing road shocks and minimizing vibrations. It enhances vehicle handling, steering control, and overall stability—ensuring safety and comfort for both driver and passengers."
        }
        img={`${imagePath}banner.png`}
      />
      {/* Signs Section */}
      <Signs
        title1={"When Is It Time for Car Suspension Repair in Dubai?"}
        title2={
          "Certain warning signs indicate the need for professional suspension service. Common symptoms include:"
        }
        data={signs}
        footerText={" "}
      />

      <WhyChooseUs
        title="Why Choose Munich Motor Works for Car Suspension Repair in Dubai?"
        img="/brand-images/DSC02079.jpg"
        desc={
          <>
            <p>
              Munich Motor Works is a trusted destination for luxury car
              suspension repair in Dubai, offering unmatched expertise and
              precision. Our experienced technicians specialize in advanced
              suspension systems found in German and European vehicles, ensuring
              accurate diagnostics and effective repairs.
            </p>

            <p className="mt-4">
              We use only high-quality OEM parts and advanced diagnostic tools
              to restore your vehicle’s ride comfort, stability, and handling to
              factory standards. From minor adjustments to complete suspension
              overhauls, we are committed to delivering exceptional workmanship
              and customer satisfaction.
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
