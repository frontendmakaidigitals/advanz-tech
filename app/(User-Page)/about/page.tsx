import Hero from "./section/hero";
import About from "./section/about";
import VisionMission from "./section/visionmission";
import Expertise from "./section/expertise";
import Team from "./section/team";
import CTA from "./section/cta";
import Image from "next/image";
import { cn } from "@/lib/utils";
function Page() {
  const images = [
    "/brand-images/DSC02040.jpg",
    "/brand-images/DSC02043.jpg",
    "/brand-images/DSC02031.jpg",
  ];
  return (
    <>
      <section className="bg-slate-950  py-28">
        <div className=" container">
          <div className="">
            <h1 className="text-4xl lg:text-5xl max-w-2xl mx-auto text-center font-domine font-semibold text-slate-50 mb-2">
              Your Strategoic Partner for business success
            </h1>
            <p className="text-slate-100 font-inter max-w-2xl mx-auto font-light text-md text-center ">
              We are a team of experienced automotive professionals who are
              passionate about precision car care. Our technicians and service
              advisors work together to deliver smooth, stress-free car repair
              services for our customers.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 items-end gap-8 mt-10">
              {images.map((image, idx) => (
                <div
                  key={idx}
                  className={cn(
                    `w-full h-[200px] lg:h-[370px] shadow-yellow-500/40 shadow-[0px_0px_20px_.5px] overflow-hidden rounded-lg`,
                    idx === 0 && "col-span-2 h-[200px] lg:h-[350px]",
                  )}
                >
                  <Image
                    src={image}
                    width={300}
                    height={400}
                    alt={""}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Hero />
      <About />
      <VisionMission />
      <Expertise />
      <Team />
      <CTA />
    </>
  );
}

export default Page;
