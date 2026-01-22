"use client";
import {
  Activity,
  Droplet,
  ArrowLeftRight,
  Sliders,
  Clock,
} from "lucide-react";
import Faq from "../sections/faq";
import Signs from "../sections/signs";
import Hero from "../sections/hero";
import WhyChooseUs from "../sections/why-choose-us";

import CTA from "../sections/CTA";
const imagePath = `/service-page/workshop/car-steering/`;
 
const CarACRepair = () => {
  const signs = [
    {
      title: "Power Steering Fluid Bubbling",
      description:
        "Foaming or bubbling in the power steering fluid may indicate air entry, leaks, or contamination, requiring system inspection or flushing.",
      image: `${imagePath}power-steering-bubble.jpg`,
      icon: <Droplet />,
    },
    {
      title: "Steering Wheel Slippage",
      description:
        "If the steering wheel does not respond accurately or returns slowly after turning, it could be due to a faulty steering rack or internal component failure.",
      image: `${imagePath}steering-rack.jpg`,
      icon: <ArrowLeftRight />,
    },
    {
      title: "Floating or Unstable Steering",
      description:
        "A sensation of floating over bumps may indicate worn suspension or steering components affecting vehicle stability and steering accuracy.",
      image: `${imagePath}unstable-steering.jpeg`,
      icon: <Activity />,
    },

    {
      title: "Excessive Steering Play",
      description:
        "Loose or delayed steering response often results from worn tie rods, bushings, or steering rack components, reducing vehicle control.",
      image: `${imagePath}excessive-steering.jpg`,
      icon: <Sliders />,
    },
    {
      title: "Sluggish Steering Response",
      description:
        "Delayed or stiff steering can stem from power steering fluid leaks, belt issues, pump failure, or electronic steering system faults.",
      image: `${imagePath}hard-steering.webp`,
      icon: <Clock />,
    },
  ];

  const faqs = [
    {
      question:
        "What are common signs that a car’s steering wheel is malfunctioning?",
      answer:
        "Common signs include an off-center steering wheel, excessive looseness or stiffness, unusual noises when turning, or delayed steering response.",
    },
    {
      question: "What are the common causes of car steering issues?",
      answer:
        "Steering problems can arise from low or leaking power steering fluid, worn tie rods, faulty steering racks, pump failure, belt wear, or electronic steering system malfunctions.",
    },
    {
      question: "How can I tell if my car steering is faulty?",
      answer:
        "If you notice difficulty steering, abnormal noises, uneven handling, or warning lights related to steering or stability systems, your vehicle should be inspected by a professional.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <Hero
        title1={"Car Steering Wheel Repair in Dubai"}
        title2={" Trusted Car Wheel Repair Services"}
        btn={"Contact Us"}
        desc={
          " The steering wheel is a vital component that allows the driver to control the direction of the vehicle, ensuring safe, accurate, and responsive handling. It forms part of the steering system, which includes the steering column, steering rack, gearbox, and pinion assembly—working together to provide precise directional control."
        }
        img={`${imagePath}banner.jpg`}
      />
      {/* Signs Section */}
      <Signs
        title1={"When Do You Require a Car Steering Wheel Repair?"}
        title2={
          "If you experience any of the following issues, your vehicle may require professional steering wheel or steering system repair:"
        }
        data={signs}
        footerText={" "}
      />

      <WhyChooseUs
        title="Why Choose Munich Motor Works for Car Steering Wheel Repair in Dubai?"
        img="/brand-images/DSC02079.jpg"
        desc={
          <>
            <p>
              At Munich Motor Works, we specialize in luxury car steering wheel
              repair and steering system diagnostics, delivering
              precision-driven solutions tailored to high-performance vehicles.
              Our certified technicians use advanced diagnostic equipment and
              genuine OEM parts to ensure accurate repairs and long-term
              reliability.
            </p>

            <p className="mt-4">
              We address a wide range of steering issues, including stiffness,
              excessive play, misalignment, sensor recalibration, bearing
              replacement, and steering rack repairs. With transparent
              communication, competitive pricing, and a commitment to
              excellence, we ensure your vehicle regains optimal handling and
              safety.
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
