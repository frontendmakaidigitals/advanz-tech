"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  Carousel,
  Slider,
  SliderContainer,
  SliderDotButton,
} from "@/components/uilayouts/carousel";

import { ChevronLeft, ChevronRight } from "lucide-react";

function HeroSection() {
  const OPTIONS: EmblaOptionsType = { loop: false };
  const images = [
    {
      name: "",
      url: "https://images.unsplash.com/photo-1633836141682-4ed9451830cf?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "",
      url: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "",
      url: "https://images.unsplash.com/photo-1632441730372-d8509de481d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <Carousel options={OPTIONS}>
        <SliderContainer>
          <Slider className="w-3/5 max-h-[90vh] ">
            <div className=" w-full h-full">
              <img
                src={
                  "https://images.unsplash.com/photo-1633836141682-4ed9451830cf?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt={""}
                className="w-full h-full object-cover"
              />
            </div>
          </Slider>
          <Slider className="w-3/5 max-h-[90vh] ">
            <div className=" w-full h-full">
              <img
                src={
                  "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt={""}
                className="w-full h-full object-cover"
              />
            </div>
          </Slider>
          <Slider className="w-3/5 max-h-[90vh] ">
            <div className=" w-full h-full">
              <img
                src={
                  "https://images.unsplash.com/photo-1632441730372-d8509de481d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt={""}
                className="w-full h-full object-cover"
              />
            </div>
          </Slider>
        </SliderContainer>

        <div className="flex justify-center py-2">
          <SliderDotButton />
        </div>
      </Carousel>
    </>
  );
}

export default HeroSection;
