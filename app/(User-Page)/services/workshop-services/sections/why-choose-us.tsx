import React from "react";
import Image from "next/image";
const WhyChooseUs = ({
  title,
  img,
  desc,
}: {
  title: string;
  img: string;
  desc: React.ReactNode;
}) => {
  return (
    <section className="py-14 px-4 bg-[#271d00]">
      <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 place-items-center gap-7 mx-auto">
        <div>
          <h2 className="text-4xl font-bold text-slate-50 font-domine   mb-4">
            {title}
          </h2>
          <div className=" text-gray-200  leading-relaxed space-y-6">
            {desc}
          </div>
        </div>
        <div className="w-full bg-slate-300 h-[230px] lg:h-[430px]">
          <Image
            src={img}
            alt={""}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
