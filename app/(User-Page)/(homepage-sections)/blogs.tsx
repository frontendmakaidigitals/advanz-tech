"use client";
import BlogCards from "@/components/custom/Blog-cards";
import { EmblaOptionsType } from "embla-carousel";
import {
  Carousel,
  Slider,
  SliderContainer,
  SliderDotButton,
} from "@/components/uilayouts/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "How Regular Car Servicing Saves You Money",
      desc: "Routine maintenance not only improves performance but also prevents costly repairs in the long run. Here’s why regular servicing matters.",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
      author: "Faheem Khan",
      tag: "Maintenance",
      time: "5 min read",
    },
    {
      id: 2,
      title: "Top 10 Signs Your Car Needs Immediate Attention",
      desc: "Ignoring warning signs can lead to serious damage. Learn the most common indicators that your car needs professional inspection.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      author: "Auto Expert Team",
      tag: "Safety",
      time: "6 min read",
    },
    {
      id: 3,
      title: "Petrol vs Diesel: Which Engine Is Right for You?",
      desc: "Choosing between petrol and diesel depends on your driving habits, budget, and maintenance expectations. Let’s break it down.",
      image:
        "https://images.unsplash.com/photo-1654334036171-e01e52b2ce8e?q=80&w=868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Rohit Sharma",
      tag: "Guide",
      time: "7 min read",
    },
    {
      id: 4,
      title: "Essential Car Care Tips for Long Road Trips",
      desc: "Planning a long drive? These essential car care tips will help ensure a smooth, safe, and stress-free journey.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      author: "Service Advisor",
      tag: "Travel",
      time: "4 min read",
    },
  ];

  const OPTIONS: EmblaOptionsType = { loop: false, slidesToScroll: 2 };
  const emblaApiRef = useRef<any>(null);
  const [slideCount, setSlideCount] = useState(0);

  // 🎯 Callback to receive Embla API from Carousel
  const onEmblaInit = (api: any) => {
    emblaApiRef.current = api;

    // 👇 Set initial slide count
    if (api) {
      setSlideCount(api.scrollSnapList().length);

      // 👇 Re-calculate on resize/reinit
      api.on("reInit", () => {
        setSlideCount(api.scrollSnapList().length);
      });
    }
  };

  // 🔄 Custom navigation handlers
  const scrollPrev = () => {
    if (emblaApiRef.current) emblaApiRef.current.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApiRef.current) emblaApiRef.current.scrollNext();
  };

  return (
    <div className="max-w-6xl mx-auto  px-4 mt-14 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold ">Blogs</h2>
        <div className="flex items-center gap-4">
          <button
            onClick={scrollPrev}
            className="bg-white border p-2 rounded-lg hover:bg-gray-100"
            aria-label="Previous blog"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={scrollNext}
            className="bg-white border p-2 rounded-lg hover:bg-gray-100"
            aria-label="Next blog"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <Carousel
        onEmblaInit={onEmblaInit}
        className="bg-transparent relative mt-5"
        options={OPTIONS}
      >
        <SliderContainer className="gap-4">
          {blogs.map((blog) => (
            <Slider key={blog.id} className="basis-1/3">
              <div className="">
                <BlogCards blog={blog} />
              </div>
            </Slider>
          ))}
        </SliderContainer>

        <div className="flex justify-center py-3">
          <SliderDotButton />
        </div>
      </Carousel>
    </div>
  );
};

export default Blogs;
