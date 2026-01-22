// components/Hero.jsx
import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-5 mt-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 ">
        <div>
          <h1 className="mb-4 text-4xl font-domine font-bold">Who We Are</h1>
          <p className="font-inter font-regular text-sm">
            We are a team of experienced automotive professionals who are
            passionate about precision car care. Our technicians and service
            advisors work together to deliver smooth, stress-free car repair
            services for our customers.
            <br /> <br /> At Advanz Tech, honesty comes first. We clearly
            explain the condition of your vehicle before starting any work. We
            also recommend only what is necessary. As a result, our customers
            feel confident and informed at every step.
            <br /> <br /> Moreover, our auto garage is equipped with advanced
            diagnostic tools, modern equipment, and dedicated service bays. This
            allows us to efficiently handle mechanical repairs, electrical
            issues, preventive maintenance, and complex troubleshooting. We are
            not just a car repair garage. <br /> <br /> We are a long-term
            service partner. Whether it is a routine oil service or a major
            repair, we treat every vehicle with the same level of care and
            professionalism.
          </p>
          <button className="mt-5 px-5 py-1.5 bg-yellow-400 text-slate-950 rounded-md">
            View All Our Services
          </button>
        </div>{" "}
        <div>
          <div className="relative h-[230px] lg:h-[400px] overflow-hidden rounded-lg">
            <Image
              src={"/brand-images/DSC02035.jpg"}
              className="object-cover object-bottom"
              alt={""}
              fill
            />
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Hero;
