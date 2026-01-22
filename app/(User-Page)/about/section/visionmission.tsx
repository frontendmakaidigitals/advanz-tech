import Image from "next/image";
import { LandPlot, Compass } from "lucide-react";
const VisionMission = () => {
  return (
    <section className=" my-32">
      <div className="container relative py-12 lg:py-0">
        <Image
          src={"/brand-images/DSC02085.jpg"}
          fill
          alt={""}
          className="w-full h-full object-cover block lg:hidden  opacity-[.5]"
        />
        <div className="grid relative z-10 grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="h-[580px] hidden lg:block overflow-hidden rounded-lg">
            <Image
              src={"/brand-images/DSC02085.jpg"}
              width={500}
              height={500}
              alt={""}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {/* Vision */}
            <div className="bg-white border shadow rounded-lg p-4 transition-shadow">
              <div className="w-12 h-12 bg-yellow-300 rounded-lg flex items-center justify-center mb-6">
                <Compass />
              </div>
              <h3 className="text-2xl font-bold font-domine text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To become one of the most trusted and recognized auto garages in
                Dubai. We aim to set new standards in car repair, diagnostics,
                and automotive technology by consistently delivering
                quality-driven services. At the same time, we strive to grow
                with innovation, skill development, and customer-focused
                solutions.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white border shadow rounded-lg p-4 transition-shadow">
              <div className="w-12 h-12 bg-yellow-300 rounded-lg flex items-center justify-center mb-6">
                <LandPlot />
              </div>
              <h3 className="text-2xl font-bold font-domine text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide dependable, transparent, and high-quality car repair
                and car maintenance services. We focus on accuracy, efficiency,
                and safety in every job. Therefore, each vehicle receives
                professional care that meets manufacturer standards and customer
                expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
