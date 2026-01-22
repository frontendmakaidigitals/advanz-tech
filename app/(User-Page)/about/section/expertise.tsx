// components/Expertise.jsx
import React from "react";
import { BadgeCheck } from "lucide-react";
const Expertise = () => {
  const services = [
    "Engine diagnostics and mechanical repairs",
    "Brake, suspension, and steering services",
    "Transmission and gearbox repairs",
    "Electrical systems and ECU programming",
    "Car air conditioning repair and maintenance",
    "Accident repair and body shop services",
    "Genuine spare parts and replacements",
  ];

  return (
    <section className="pb-28">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-10 lg:mb-20">
          <h2 className="text-4xl font-domine font-bold text-slate-900 mb-6">
            Expertise Built on Precision
          </h2>
          <p className="text-slate-600 text-lg">
            Advanced tools, skilled technicians, and a commitment to quality —
            everything your vehicle needs under one roof.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Accent Block */}
          <div className="lg:col-span-1 bg-yellow-500 text-white rounded-3xl p-10">
            <h3 className="text-3xl font-domine font-bold mb-6">
              Complete <br /> Automotive Care
            </h3>
            <p className="text-white/90 font-inter tracking-tight text-lg leading-relaxed">
              Our workshop is designed to handle everything from routine
              maintenance to complex diagnostics using modern equipment and
              genuine parts.
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-yellow-100 border border-amber-100 rounded-2xl p-6 hover:border-amber-400 transition-colors"
              >
                <p className="text-slate-800 flex font-inter tracking-tighter items-start gap-2 text-lg leading-relaxed">
                  <BadgeCheck className="stroke-white fill-green-500 mt-1" />
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
