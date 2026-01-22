// components/CTA.jsx
import React from "react";
import { PhoneCall, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 to-slate-800 p-14">
          {/* Decorative Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span className="inline-block mb-4 text-amber-500 font-medium tracking-wide uppercase text-sm">
              Need Expert Car Care?
            </span>

            <h2 className="font-domine text-4xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Trusted Auto Garage in Dubai
            </h2>

            <p className="text-white/80  font-inter mb-12">
              From diagnostics to complete repairs, Advanz Tech delivers
              professional, transparent, and reliable automotive services you
              can depend on.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-slate-900 px-5 py-2 rounded-xl font-semibold transition-colors">
                Book Service
                <MessageCircle size={20} />
              </button>

              <button className="inline-flex items-center gap-3 border border-white/30 text-white hover:border-white hover:bg-white/5 px-5 py-2 rounded-xl font-semibold  transition-colors">
                Call Now
                <PhoneCall size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
