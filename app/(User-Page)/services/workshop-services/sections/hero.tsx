import { Button } from "@/components/ui/button";
const Hero = ({
  title1,
  title2,
  btn,
  desc,
  img,
}: {
  title1: string;
  title2: string;
  btn: string;
  desc: string;
  img: string;
}) => {
  return (
    <section className="relative flex flex-col items-center justify-center  text-white py-32 px-4 h-[90vh] overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-black/70 z-5" />
      <img
        src={img}
        alt={"ac repair"}
        className="absolute inset-0  w-full h-full object-cover"
      />
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0,300 Q300,100 600,300 T1200,300 L1200,600 L0,600 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="font-inter text-5xl font-bold mb-4 animate-fade-in">
          {title1}
        </h1>
        <p className="text-xl mb-4 opacity-95">{title2}</p>
        <p className=" mb-6 F max-w-3xl mx-auto leading-relaxed">{desc}</p>
        <Button className=" text-white rounded-full">{btn}</Button>
      </div>
    </section>
  );
};

export default Hero;
