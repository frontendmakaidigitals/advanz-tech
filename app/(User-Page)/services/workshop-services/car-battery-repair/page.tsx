"use client";
import {
  BatteryCharging,
  Lightbulb,
  Snowflake,
  BatteryMedium,
  Activity,
} from "lucide-react";
import Faq from "../sections/faq";
import Signs from "../sections/signs";
import Hero from "../sections/hero";
import WhyChooseUs from "../sections/why-choose-us";
import CTA from "../sections/CTA";
const imagePath = `/service-page/workshop/car-battery-repair/`;
const CarACRepair = () => {
  const signs = [
    {
      title: "Slow Engine Crank",
      description:
        "A delayed or weak engine start often indicates reduced battery capacity that may respond to repair or reconditioning.",
      icon: <BatteryCharging className="w-6 h-6 " />,
      image: `${imagePath}slow-engine-crank.jpg`,
    },
    {
      title: "Dimming Vehicle Lights",
      description:
        "Headlights or interior lights losing brightness can suggest inconsistent voltage delivery from the battery.",
      icon: <Lightbulb className="w-6 h-6 " />,
      image: `${imagePath}dim-headlights.jpg`,
    },
    {
      title: "Starting Issues in Cold Conditions",
      description:
        "Difficulty starting the engine in colder temperatures may signal battery inefficiency that can sometimes be corrected.",
      icon: <Snowflake className="w-6 h-6 " />,
      image: `${imagePath}start-car-cold-condition.jpg`,
    },
    {
      title: "Diagnostic Test Results",
      description:
        "Testing may reveal issues such as sulfation buildup or low electrolyte levels, which can sometimes be addressed with controlled repair techniques.",
      icon: <Activity className="w-6 h-6 " />,
      image: `${imagePath}battery-test.png`,
    },
    {
      title: "Mild to Moderate Battery Degradation",
      description:
        "In cases of limited sulfation or electrolyte imbalance, restoration procedures may help recover battery performance.",
      icon: <BatteryMedium className="w-6 h-6 " />,
      image: `${imagePath}car-old-battery.jpg`,
    },
  ];

  const faqs = [
    {
      question: "Can a car battery be repaired?",
      answer:
        "Most conventional car batteries are not repairable once they fail completely. However, certain weak or partially degraded batteries may be restored using specialized reconditioning techniques.",
    },
    {
      question: "Is it possible to revive a dead car battery?",
      answer:
        "In some cases, controlled charging or desulfation may temporarily restore function, but long-term reliability depends on the battery’s condition.",
    },
    {
      question: "How can I improve a weak car battery?",
      answer:
        "Proper charging, routine testing, and early intervention can help maintain battery health and extend its lifespan.",
    },
    {
      question: "How long does a car battery typically last?",
      answer:
        "Battery lifespan varies based on usage, climate, and vehicle type, but most car batteries last between 2 to 5 years under normal conditions.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <Hero
        title1={"Car Battery Repair Services in Dubai"}
        title2={"Advanced Battery Diagnostics, Repair & Reconditioning"}
        btn={"Contact Us"}
        desc={
          " Your vehicle’s battery is responsible for supplying electrical power to start the engine and operate essential electronic systems. It works through a chemical process involving lead-based components and an electrolyte solution that generates energy. "
        }
        img={`${imagePath}banner.png`}
      />
      {/* Signs Section */}
      <Signs
        title1={"When Do We Recommend Car Battery Repair?"}
        title2={
          "Battery repair or reconditioning is recommended only when the battery remains structurally sound and can be safely restored. "
        }
        data={signs}
        footerText={" "}
      />
      {/* Why Choose Section */}
      <section className="py-16 bg-[#f8f8d6]">
        <div className="container space-y-12">
          {/* Section Heading */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-domine text-center font-bold">
              Advanced Automotive Battery Systems
            </h2>
            <p className="mt-2 text-center text-neutral-700">
              Modern vehicles rely on advanced battery technologies to deliver
              efficiency, performance, and reliability across all driving
              conditions.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* 12V Lithium-Ion */}
            <div className="rounded-2xl border border-neutral-800 bg-amber-500/30 p-8">
              <h3 className="text-2xl font-inter font-semibold text-amber-500">
                12V Lithium-Ion Battery Systems
              </h3>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                12V lithium-ion batteries offer superior charging efficiency,
                longer service life, and enhanced resistance to extreme
                temperatures. Their stable performance in both hot and cold
                climates makes them ideal for modern vehicles equipped with
                advanced electrical and hybrid systems.
              </p>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                These batteries are commonly integrated into vehicles featuring
                energy recovery, start-stop systems, and hybrid drivetrains.
              </p>

              <div className="mt-6">
                <h4 className="text-sm uppercase tracking-wide text-neutral-600">
                  Common Brands
                </h4>
                <p className="mt-2 text-neutral-600">
                  BMW, Mercedes-Benz, Porsche, Audi, Maserati, Ferrari,
                  Lamborghini, Bugatti, Brabus, Jaguar, Aston Martin, Land
                  Rover, Range Rover, Rolls-Royce, Maybach, Tesla
                </p>
              </div>
            </div>

            {/* 48V Battery Systems */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8">
              <h3 className="text-2xl font-inter font-semibold text-amber-500">
                48V Battery Systems
              </h3>
              <p className="mt-4 text-neutral-300 leading-relaxed">
                48V battery systems are widely used in mild-hybrid vehicles to
                support electric motor assistance, regenerative braking, and
                start-stop functionality. These systems improve fuel efficiency,
                deliver smoother acceleration, and help reduce emissions.
              </p>
              <p className="mt-4 text-neutral-300 leading-relaxed">
                In addition, 48V technology powers auxiliary systems such as
                electric steering and climate control components.
              </p>

              <div className="mt-6">
                <h4 className="text-sm uppercase tracking-wide text-neutral-400">
                  Common Models
                </h4>
                <p className="mt-2 text-neutral-300">
                  Audi A8, Q8 · Mercedes-Benz E-Class, GLE · BMW 5 Series, X5 ·
                  Range Rover models
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs
        title="Why Choose Us for Car Battery Repair in Dubai?"
        img="/brand-images/DSC02079.jpg"
        desc={
          <>
            <p>
              Our workshop features a dedicated electronics and diagnostics
              facility equipped with advanced tools to handle complex electrical
              systems found in modern European and German vehicles. Rather than
              immediately recommending replacement, we carefully evaluate
              whether repair or reconditioning is a viable option for your
              specific battery system.
            </p>

            <p className="mt-4">
              We have extensive experience working with advanced battery
              technologies, including 48V battery systems used in select
              Mercedes-Benz models and lithium-ion battery systems found in
              high-performance and luxury vehicles. In addition to
              battery-related services, we also offer a full range of electrical
              diagnostics and mechanical repair solutions under one roof.
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
