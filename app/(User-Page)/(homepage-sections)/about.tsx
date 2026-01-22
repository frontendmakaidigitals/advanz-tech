import StatCard from "./stat-card";
const About = () => {
  return (
    <section className=" container mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="">
          <div>
            <h2 className="text-4xl font-domine font-[400]">
              Premium Automotive Workshop{" "}
              <span className="font-cursive font-[700]">Repair & Service</span>{" "}
              in Dubai
            </h2>
          </div>
          <p className="mt-3 text-slate-700  font-inter">
            Advanz Tech is a trusted automotive repair and service workshop
            based in Dubai, built to deliver reliable, high-quality car care for
            modern vehicles. Our team of experienced technicians and service
            advisors works with precision, care, and honesty to ensure every
            vehicle receives the attention it deserves.
            <br /> We specialise in professional car repairs, maintenance,
            diagnostics, and advanced automotive technology, using the right
            tools and genuine parts to keep your car performing at its best. At
            Advanz Tech, we believe in doing things the right way.
          </p>
          <button className="px-4 text-sm mt-6 py-2 bg-black text-slate-50 rounded-lg">
            Learn more about us
          </button>
        </div>

        <img
          className="aspect-video h-80 lg:h-100 object-cover rounded-lg"
          src={"/about.jpg"}
        />
      </div>
      <StatCard />
    </section>
  );
};

export default About;
