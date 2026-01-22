"use client";
import { Activity, AlertTriangle, Cpu, Power } from "lucide-react";
import Faq from "../sections/faq";
import Signs from "../sections/signs";
import Hero from "../sections/hero";
import WhyChooseUs from "../sections/why-choose-us";

import CTA from "../sections/CTA";

const imagePath = `/service-page/workshop/car-speed-control/`;
const CarACRepair = () => {
  const signs = [
    {
      title: "Failure to Engage",
      description:
        "If the cruise control does not activate or fails to hold the selected speed, this often indicates a malfunction within the speed control unit or its sensors.",
      image: `${imagePath}cruise-control.png`,
      icon: <Power />,
    },
    {
      title: "Inconsistent Speed Control",
      description:
        "Unexpected speed fluctuations while cruise control is active may point to electronic or sensor-related faults requiring professional repair.",
      image: `${imagePath}inconsistent-speed.webp`,
      icon: <Activity />,
    },

    {
      title: "Dashboard Warning Lights",
      description:
        "Illuminated warning lights related to cruise control or electronic systems can signal a fault that needs expert attention.",
      image: `${imagePath}cruise-control-error.webp`,
      icon: <AlertTriangle />,
    },

    {
      title: "Diagnostic Trouble Codes",
      description:
        "If vehicle diagnostics reveal error codes linked to the cruise control system, speed control unit repair is often necessary.",
      image: `${imagePath}adaptive-cruise-control-code.jpg`,
      icon: <Cpu />,
    },
  ];

  const faqs = [
    {
      question:
        "How can I tell if my luxury car’s speed control unit is malfunctioning?",
      answer:
        "Common signs include difficulty setting or maintaining speed, non-responsive cruise control, or warning lights appearing on the dashboard.",
    },
    {
      question: "What are the common symptoms of a faulty speed control unit?",
      answer:
        "Symptoms may include inconsistent speed, failure to engage cruise control, unresponsive controls, or system error codes.",
    },
    {
      question: "Can a faulty speed control unit affect other vehicle systems?",
      answer:
        "Yes. Since the cruise control system interacts with sensors and electronic modules, faults may impact throttle response or vehicle stability systems.",
    },
    {
      question:
        "Is repair possible, or does the speed control unit need replacement?",
      answer:
        "In many cases, repairs are possible. However, severe damage may require replacement depending on diagnostic results.",
    },
    {
      question: "Is it safe to drive with a faulty speed control unit?",
      answer:
        "While the vehicle may still be drivable, malfunctioning cruise control can affect comfort and safety. Timely repairs are strongly recommended.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <Hero
        title1={"Car Speed Control Unit Repair in Dubai"}
        title2={" Trusted Car Speed Control Repair Services"}
        btn={"Contact Us"}
        desc={
          "A speed control unit, commonly known as a cruise control system, is designed to maintain a consistent driving speed without continuous throttle input. This feature enhances driving comfort, especially during long highway journeys, and reduces driver fatigue."
        }
        img={`${imagePath}banner.jpg`}
      />
      {/* Signs Section */}
      <Signs
        title1={"When Do You Need Car Speed Control Unit Repair?"}
        title2={
          "You may require speed control unit repair if you notice any of the following symptoms:"
        }
        data={signs}
        footerText=" Ignoring these signs can lead to costly repairs – early diagnosis saves time and money."
      />
      {/* Why Choose Section */}

      <WhyChooseUs
        title="Why Choose Advanz Tech for Speed Control Unit Repair?"
        img="/brand-images/DSC02079.jpg"
        desc={
          <>
            <p>
              At Advanz Tech, we deliver precision-driven speed control unit
              repairs tailored specifically for luxury vehicles. Our highly
              trained technicians specialize in advanced automotive electronics
              and follow manufacturer-approved repair standards.
            </p>

            <p className="mt-4">
              We use original diagnostic equipment and genuine parts to
              accurately identify issues and restore optimal cruise control
              functionality. Our efficient repair process minimizes downtime
              while ensuring safety, reliability, and performance.
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
