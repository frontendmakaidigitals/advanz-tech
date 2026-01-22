// components/Hero.jsx
import Image from "next/image";

const Hero = () => {
  return (
    <section className=" mt-20 container">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <div className="relative h-[230px] lg:h-[400px] overflow-hidden rounded-lg">
            <Image
              src={"/brand-images/DSC02043.jpg"}
              className="object-cover object-bottom"
              alt={""}
              fill
            />
          </div>
        </div>{" "}
        <div>
          <h1 className="mb-4 text-4xl font-domine font-bold">
            About Advanz Tech
          </h1>
          <p className="font-inter font-regular text-sm">
            Advanz Tech is a professional auto garage in Dubai providing
            reliable and high-quality car repair and maintenance services. We
            are built around precision, transparency, and customer trust. Every
            vehicle we service receives careful attention, accurate diagnostics,
            and expert workmanship. <br /> <br /> As a modern car repair
            workshop, we handle everything from routine servicing to advanced
            mechanical, electrical, and diagnostic repairs. Our goal is simple.
            We keep your car safe, efficient, and performing at its best. <br />{" "}
            <br /> Furthermore, we understand that every car is different. That
            is why we follow manufacturer-recommended procedures and use genuine
            parts wherever required. This approach allows us to deliver
            long-lasting results and consistent service quality.
          </p>
          <button className="mt-5 px-5 py-1.5 bg-yellow-400 text-slate-950 rounded-md">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
