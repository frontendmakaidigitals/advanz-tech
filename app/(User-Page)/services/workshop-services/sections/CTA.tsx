import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

const CTA = ({
  title,
  desc,
  btn1,
  btn2,
  img,
}: {
  title: string;
  desc: string;
  btn1: string;
  btn2: string;
  img: string;
}) => {
  return (
    <section className="py-14 mb-12 max-w-5xl mx-auto px-9 relative bg-[#e0ac69] rounded-xl text-white ">
      <img
        src={img}
        className="absolute opacity-[.1] lg:opacity-[1] bottom-2 right-10 w-80 h-auto  object-conain"
        alt={""}
      />
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold font-inter mb-4">{title}</h2>
        <p className=" max-w-xl mb-8 opacity-90">{desc}</p>
        <div className="flex flex-wrap relative z-10 gap-4 justify-start">
          <Button className="bg-black">
            <Phone className="w-5 h-5" />
            {btn1}
          </Button>
          <Button variant={"outline"} className="">
            <Calendar className="w-5 h-5" />
            {btn2}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
