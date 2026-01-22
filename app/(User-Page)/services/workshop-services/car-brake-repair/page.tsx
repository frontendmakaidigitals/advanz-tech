"use client";
import {
  Volume2,
  Gauge,
  AlertTriangle,
  BadgeCheck,
  Vibrate,
  Flame,
  TrendingUp,
} from "lucide-react";
import Faq from "../sections/faq";
import Signs from "../sections/signs";
import Hero from "../sections/hero";
import WhyChooseUs from "../sections/why-choose-us";

import CTA from "../sections/CTA";
const imagePath = `/service-page/workshop/car-brake-repair/`;
const CarACRepair = () => {
  const signs = [
    {
      title: "Unusual Noises When Braking",
      description:
        "Squealing, screeching, or grinding sounds usually indicate worn brake pads or damaged brake components.",
      icon: <Volume2 className="w-6 h-6 text-amber-500" />,
      image: `${imagePath}brake_noise.webp`,
    },
    {
      title: "Brake Pedal Vibrations",
      description:
        "A shaking or pulsing sensation through the brake pedal or steering wheel often points to uneven or warped brake rotors.",
      icon: <Vibrate className="w-6 h-6 text-amber-500" />,
      image: `${imagePath}brake-vibrate.webp`,
    },
    {
      title: "Soft or Unresponsive Brake Pedal",
      description:
        "A brake pedal that feels spongy or sinks too easily may signal brake fluid leaks, air in the brake lines, or failing components.",
      icon: <Gauge className="w-6 h-6 text-amber-500" />,
      image: `${imagePath}loose-brake-pedal.jpg`,
    },
    {
      title: "Brake Warning Light",
      description:
        "An illuminated brake warning indicator on the dashboard suggests a system fault that should be checked immediately.",
      icon: <AlertTriangle className="w-6 h-6 text-amber-500" />,
      image: `${imagePath}brake-warninglight.webp`,
    },
    {
      title: "Uneven Brake Component Wear",
      description:
        "Irregular wear on brake pads or discs may result from sticking calipers, contaminated fluid, or alignment issues.",
      icon: <TrendingUp className="w-6 h-6 text-amber-500" />,
      image: `${imagePath}brake-pad-repair.jpg`,
    },
    {
      title: "Increased Stopping Distance",
      description:
        "If your vehicle takes longer than usual to stop, worn pads, low fluid levels, or brake system issues could be the cause.",
      icon: <Gauge className="w-6 h-6 text-amber-500" />,
      image: `${imagePath}stopping-distance.jpg`,
    },
    {
      title: "Burning Odor",
      description:
        "A sharp or burning smell during or after braking can indicate overheated brake components caused by excessive friction.",
      icon: <Flame className="w-6 h-6 text-amber-500" />,
      image: `${imagePath}burning-odor.webp`,
    },
  ];

  const faqs = [
    {
      question: "What does brake repair include?",
      answer:
        "Brake repair involves inspecting, repairing, or replacing braking system components such as brake pads, rotors, calipers, brake fluid, and brake lines to restore proper braking performance and safety.",
    },
    {
      question: "How can I tell if my brakes need attention?",
      answer:
        "Warning signs include unusual noises, vibrations while braking, longer stopping distances, a soft brake pedal, or a brake warning light.",
    },
    {
      question: "Is it safe to repair car brakes on your own?",
      answer:
        "Brake systems are critical to safety. Professional repair is strongly recommended to ensure correct installation and reliable braking performance.",
    },
    {
      question: "Can I drive with worn or faulty brakes?",
      answer:
        "Driving with damaged brakes is unsafe and increases the risk of accidents. Immediate inspection and repair are advised if any symptoms appear.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <Hero
        title1={"Car Brake Repair Services in Dubai"}
        title2={"Reliable Brake Inspection, Repair & Replacement"}
        btn={"Contact Us"}
        desc={
          " Your vehicle’s braking system plays a vital role in protecting you, your passengers, and everyone else on the road. Brakes are responsible for controlling speed and bringing your car to a safe stop in unpredictable traffic situations and emergency conditions. Because of this, regular brake inspection and timely repairs are essential for safe driving in Dubai. "
        }
        img={`${imagePath}banner.png`}
      />
      {/* Signs Section */}
      <Signs
        title1={"How Can You Tell If Your Car Needs Brake Repair in Dubai?"}
        title2={
          "If you experience any of the following symptoms, your vehicle’s braking system may require professional inspection or repair:"
        }
        data={signs}
        footerText={" "}
      />
      {/* Why Choose Section */}

      <WhyChooseUs
        title="Why Choose Us for Car Brake Repair Services?"
        img="/brand-images/DSC02079.jpg"
        desc={
          <>
            <p>
              Our brake repair services are designed with one priority in mind,
              your safety. We carry out detailed brake system inspections, brake
              pad replacements, rotor resurfacing or replacement, brake fluid
              flushing, and accurate diagnostics to identify and resolve issues
              efficiently.
            </p>

            <p className="mt-4">
              Our experienced technicians work with precision, keeping all
              braking components clean and properly adjusted for optimal
              performance. As a specialized independent workshop, we deliver
              premium brake repair services for European and German vehicles,
              ensuring manufacturer-level standards without dealership pricing.
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
