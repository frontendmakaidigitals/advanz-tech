"use client";
import React from "react";
import Image from "next/image";
const Services = () => {
  // 6 service cards data
  const serviceCards = [
    {
      title: "Regular Car Maintenance",
      description:
        "We offer a comprehensive range of services to meet the diverse needs of luxury car owners.",
      image: "/services/regualar-car-main.jpeg",
    },
    {
      title: "Pre Purchase Car Inspection",
      description:
        "Car pre purchase inspection is a necessary procedure before buying any used luxury vehicle.",
      image: "/services/car-inspection.jpg",
    },
    {
      title: "Car Recovery Services",
      description:
        "With our efficient car towing service and experienced tow truck professionals.",
      image: "/services/car-tow.jpg",
    },
    {
      title: "Car Engine Repair & Overhaul",
      description:
        "We are equipped to tackle any repair task, from minor to major engine block repairs.",
      image: "/services/car-engine-repair.jpeg",
    },
    {
      title: "Gearbox Repair & Overhaul",
      description:
        "We have a proven track record for delivering dependable gearbox services.",
      image: "/services/gearbox-repair.avif",
    },
    {
      title: "Car Air Conditioning Repair",
      description:
        "Are you're looking for a car service center near you for your AC repair and maintenance?",
      image: "/services/car-ac.webp",
    },
  ];

  return (
    <section className="my-20 px-4 py-10 bg-blue-100/40">
      <div className="max-w-5xl mx-auto">
        <div className="w-full h-full mb-12 ">
          <h2 className="text-4xl text-center font-inter max-w-2xl mx-auto font-semibold text-gray-900 mb-4">
            AUTOMOTIVE CAR REPAIR GARAGE IN DUBAI
          </h2>
          <p className="text-gray-600 text-center  max-w-2xl mx-auto leading-relaxed ">
            At Munich Motors, we offer a full range of automotive car repair and
            maintenance services. Our certified technicians use state-of-the-art
            equipment to deliver exceptional quality and reliability for all
            European and Asian vehicles.
          </p>
        </div>

        {/* RIGHT SIDE: 6 Service Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-1 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-full aspect-6/4 overflow-hidden rounded-lg">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-md">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-4 py-1.5 rounded-full bg-black text-slate-50 mt-4">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
