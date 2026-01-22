import React from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Data {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface SignsProps {
  title1: string;
  title2: string;
  footerText: string;
  data: Data[];
}

const Signs = ({ title1, title2, data, footerText }: SignsProps) => {
  return (
    <section className="py-18 ">
      <div className="container">
        <h2 className="text-4xl max-w-3xl mx-auto font-domine font-bold text-center  mb-4">
          {title1}
        </h2>

        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          {title2}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
          {data.map((sign, index) => (
            <div key={index} className=" rounded-lg">
              <div className="relative ">
                <div className="h-48 ">
                  <Image
                    src={sign.image}
                    alt={sign.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-amber-50 bg-black/30 backdrop-blur-lg absolute top-3 left-3 p-2 rounded-lg">
                  {sign.icon}
                </div>
                <div className="mt-3 mb-4">
                  <h3 className="text-xl font-bold text-amber-900">
                    {sign.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {sign.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center mt-12">
          <p className="text-center text-red-500 font-semibold text-lg mb-6">
            {footerText}
          </p>
          <Button>Call Us Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Signs;
