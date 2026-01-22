"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

function HeroSection() {
  const OPTIONS: EmblaOptionsType = { loop: false };

  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative">
      {/* Carousel */}
      <Carousel
        opts={OPTIONS}
        setApi={setApi}
        className="w-full overflow-hidden"
      >
        <CarouselContent>
          <CarouselItem className="relative h-[70dvh] lg:h-[95vh]">
            <div className="relative w-full h-full flex items-center">
              <img
                src="/banner/banner-1.png"
                alt="Auto Garage Banner"
                className="absolute inset-0 w-full h-full object-cover object-left lg:object-center"
              />
              <div className="absolute inset-0 bg-black/60" />

              <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <h1 className="text-4xl lg:text-5xl font-inter font-semibold text-white max-w-2xl">
                  DUBAI’S MOST TRUSTED
                  <span className="block text-yellow-500">AUTO GARAGE</span>
                </h1>
                <p className="text-white mt-2">
                  Specialized Service for All Premium Brands
                </p>
                <Button className="mt-4 bg-transparent border text-white">
                  Book Your Service
                </Button>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 2 */}
          <CarouselItem className="h-[70dvh] lg:h-[95vh]">
            <img
              src="https://images.unsplash.com/photo-1592198084033-aade902d1aae"
              className="w-full h-full object-cover"
              alt=""
            />
          </CarouselItem>

          {/* Slide 3 */}
          <CarouselItem className="h-[70dvh] lg:h-[95vh]">
            <img
              src="https://images.unsplash.com/photo-1632441730372-d8509de481d1"
              className="w-full h-full object-cover"
              alt=""
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      {/* Prev / Next buttons (outside carousel) */}
      <div className="absolute bottom-4 right-5 lg:right-48 flex gap-4 items-center">
        <Button variant="outline" size="icon" onClick={() => api?.scrollPrev()}>
          <ArrowLeft className="text-white" />
        </Button>

        <Button variant="outline" size="icon" onClick={() => api?.scrollNext()}>
          <ArrowRight className="text-white" />
        </Button>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-4 lg:left-1/2 lg:-translate-x-1/2 flex gap-2 z-20">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              current === index ? "bg-yellow-500 w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
