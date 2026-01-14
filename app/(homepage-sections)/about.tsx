import React from "react";
import StatCard from "./stat-card";
const About = () => {
  return (
    <section className=" max-w-6xl mx-auto mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="">
          <div>
            <h2 className="text-4xl font-domine font-[400]">
              Premium Automotive Repair Specialists for{" "}
              <span className="font-cursive font-[700]">German & European</span>
              Vehicles in Dubai
            </h2>
          </div>
          <p className="mt-3 text-slate-700  font-inter">
            Munich Motor Works, established in 2009 in the heart of Dubai, is a
            premier car repair workshop & car service center specializing in
            German and European vehicles. With a team of highly skilled auto
            specialists and service advisors, we are dedicated to surpassing
            your expectations of luxury car care by offering a wide range of
            auto repair and car maintenance services. At Munich Motor Works, our
            ethos revolves around trust, precision, and dedication. With a
            relentless commitment to excellence, we earn the trust of our
            customers through transparent communication, fair practices, and
            delivering on promises.
          </p>
          <div className="mt-8 space-y-4 hidden">
            <div className="flex items-start gap-3">
              <div className="bg-green-500 rounded-full p-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V7a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Expert German & European Vehicle Care
                </h3>
                <p className="text-sm text-slate-600">
                  Specialized diagnostics, engine tuning, and maintenance for
                  BMW, Mercedes, Audi, Porsche, and more.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-green-500 rounded-full p-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 6l-6-6-6 6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Transparent Service & Fair Pricing
                </h3>
                <p className="text-sm text-slate-600">
                  No hidden fees. We explain every step, provide honest
                  recommendations, and stand behind our work.
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          className="aspect-video h-100 object-cover rounded-lg"
          src={"/about.jpg"}
        />
      </div>
      <StatCard />
    </section>
  );
};

export default About;
