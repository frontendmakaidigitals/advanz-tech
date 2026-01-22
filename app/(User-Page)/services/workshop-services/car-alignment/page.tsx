"use client";
import {
  Activity,
  ArrowLeftRight,
  AlertTriangle,
  Circle,
  ShieldCheck,
} from "lucide-react";
import Faq from "../sections/faq";
import Signs from "../sections/signs";
import Hero from "../sections/hero";
import WhyChooseUs from "../sections/why-choose-us";

import CTA from "../sections/CTA";
const imagePath = `/service-page/workshop/car-wheel-alignment/`;
const CarACRepair = () => {
  const signs = [
    {
      title: "Vehicle Pulling to One Side",
      description:
        "If your car drifts left or right while driving straight, or if you notice uneven or accelerated tire wear, it may indicate misaligned wheels.",
      image: `${imagePath}vehicle-pulling-to-one-side.jpg`,
      icon: <ArrowLeftRight className="w-6 h-6" />,
    },
    {
      title: "Impact with Road Hazards",
      description:
        "Driving over potholes, curbs, or minor collisions can disturb wheel alignment and should be followed by a professional alignment check.",
      image: `${imagePath}impact-with-road-hazard.jpg`,
      icon: <AlertTriangle className="w-6 h-6" />,
    },
    {
      title: "Steering Wheel Vibrations",
      description:
        "Shaking or vibrations felt in the steering wheel or seat, especially at higher speeds, are common signs of wheel imbalance.",
      image: `${imagePath}car-wheel-vibration.jpg`,
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "New Tire Installation",
      description:
        "Balancing is recommended whenever new tires or wheels are installed to ensure even weight distribution and smooth rotation.",
      image: `${imagePath}wheel-installation.webp`,
      icon: <Circle className="w-6 h-6" />,
    },
    {
      title: "Preventive Maintenance",
      description:
        "Regular alignment and balancing checks help maintain ride quality, prevent premature tire wear, and enhance vehicle safety.",
      image: `${imagePath}maintenance.jpg`,
      icon: <ShieldCheck className="w-6 h-6" />,
    },
  ];

  const faqs = [
    {
      question: "What are the signs that wheels need balancing?",
      answer:
        "Common signs include vibrations or shaking felt through the steering wheel or seats, especially at higher speeds. Uneven tire wear may also occur.",
    },
    {
      question: "What are the signs that wheels need alignment?",
      answer:
        "Indicators include the vehicle pulling to one side, uneven tire wear, an off-center steering wheel, or poor handling.",
    },
    {
      question:
        "What is the difference between wheel alignment and wheel balancing?",
      answer:
        "Wheel alignment adjusts the angles of the wheels to ensure proper contact with the road, while wheel balancing corrects weight imbalances in the wheel and tire assembly.",
    },
    {
      question: "How do I know if I need alignment or balancing?",
      answer:
        "Pulling or uneven tire wear usually indicates alignment issues, while vibrations often point to balancing problems.",
    },
    {
      question: "What noises do unbalanced wheels make?",
      answer:
        "Unbalanced wheels may produce humming or vibration-related noises that increase with speed.",
    },
    {
      question: "Can I drive with unbalanced wheels?",
      answer:
        "Driving with unbalanced wheels can cause discomfort, uneven tire wear, and damage to suspension components, so timely service is recommended.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <Hero
        title1={"Car Wheel Alignment Services in Dubai"}
        title2={" Precision Wheel & Tire Alignment for Safer Driving"}
        btn={"Contact Us"}
        desc={
          "Every time your vehicle drives over uneven roads, speed bumps, or potholes, the wheel angles can shift slightly out of specification. Over time, these small changes can affect ride comfort, steering control, and tire longevity. Regular wheel alignment and tire balancing are essential to maintaining smooth handling, even tire wear, and driving stability, especially for luxury vehicles."
        }
        img={`${imagePath}banner.png`}
      />
      {/* Signs Section */}
      <Signs
        title1={"When Do You Need Wheel Alignment or Tire Balancing?"}
        title2={
          "Wheel alignment and wheel balancing serve different functions, and certain driving symptoms can help identify which service your vehicle requires:"
        }
        data={signs}
        footerText=" Ignoring these signs can lead to costly repairs – early diagnosis saves time and money."
      />
      {/* Why Choose Section */}

      <WhyChooseUs
        title="Why Choose Us for Wheel Alignment in Dubai?"
        img="/brand-images/DSC02079.jpg"
        desc={
          <>
            <p>
              Our wheel alignment and tire balancing services are carried out
              with precision to meet manufacturer specifications. Using advanced
              alignment systems and calibration tools, our skilled technicians
              ensure accurate adjustments that enhance handling, stability, and
              overall safety.
            </p>

            <p className="mt-4">
              We cater to a wide range of vehicle types, including luxury and
              performance models. With expert alignment and balancing services,
              we help extend tire lifespan, improve fuel efficiency, and deliver
              a smoother, more controlled driving experience. Our commitment to
              quality and attention to detail make us a trusted choice for wheel
              alignment services in Dubai.
            </p>
          </>
        }
      />

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
