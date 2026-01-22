// components/Team.jsx
import React from "react";
import { Wrench, Users, ClipboardCheck, Settings } from "lucide-react";

const Team = () => {
  const teams = [
    {
      title: "Expert Technicians",
      icon: Wrench,
      description:
        "Highly trained professionals with hands-on expertise across mechanical, electrical, and diagnostic systems. From routine servicing to complex repairs, every task is handled with precision.",
    },
    {
      title: "Service Advisors",
      icon: ClipboardCheck,
      description:
        "Your direct point of contact. Our advisors assess vehicle conditions clearly and explain required repairs in a transparent, easy-to-understand manner.",
    },
    {
      title: "Automotive Consultants",
      icon: Users,
      description:
        "Experts who guide customers on maintenance planning, performance optimisation, and repair decisions for long-term reliability and value.",
    },
    {
      title: "Support & Operations",
      icon: Settings,
      description:
        "The backbone of our workflow — managing scheduling, genuine parts sourcing, quality checks, and timely vehicle delivery.",
    },
  ];

  return (
    <section className="pt-8 ">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl font-domine font-bold text-slate-900 mb-2">
            The People Behind Our Work
          </h2>
          <p className="text-slate-600 font-inter text-lg">
            Advanz Tech is powered by skilled professionals who work together to
            deliver reliable, transparent, and high-quality automotive services.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {teams.map((team, index) => {
            const Icon = team.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:border-amber-400 transition-colors"
              >
                {/* Icon */}
                <div className="absolute -top-6 left-8 w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-4">
                  {team.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {team.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
