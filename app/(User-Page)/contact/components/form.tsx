"use client";
import { useState } from "react";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { toast } from "sonner";
export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    service: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    setIsSubmitting(true);
    e.preventDefault();
    const { firstName, lastName, service, email, phoneNumber, message } =
      formData;
    const data = {
      firstName,
      lastName,
      service,
      email,
      phoneNumber,
      message,
    };
    try {
      const res = await axios.post("/api/email", data);
      if (res.data.sucess) {
        toast.success("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          service: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
        setIsSubmitting(false);
        return;
      }
      toast.error("Something went wrong!");
      setIsSubmitting(false);
    } catch (err) {
      toast.error("Something went wrong!");
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSelect = (val: string) => {
    setFormData((prev) => ({
      ...prev,
      service: val,
    }));
  };
  const carServices = [
    "Oil Change & Filter Replacement",
    "Brake Inspection & Repair",
    "Tire Rotation & Alignment",
    "Engine Diagnostics & Repair",
    "AC Service & Repair",
    "Battery Testing & Replacement",
    "Transmission Service",
    "Car Detailing & Wash",
    "Suspension & Steering Repair",
    "Pre-Purchase Inspection",
  ];
  return (
    <div className="min-h-screen  p-8 mt-10 flex items-center justify-center">
      <div className="max-w-5xl w-full grid md:grid-cols-[.8fr_1fr] gap-8">
        {/* Left Side - Contact Info */}
        <div className=" rounded-xl p-10 overflow-hidden flex flex-col justify-between relative">
          <div className="absolute inset-0 w-full h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 700 700"
              width="700"
              height="700"
              opacity="1"
            >
              <defs>
                <linearGradient
                  gradientTransform="rotate(0, 0.5, 0.5)"
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="ffflux-gradient"
                >
                  <stop
                    stopColor="hsl(37, 100%, 39%)"
                    stopOpacity="1"
                    offset="0%"
                  ></stop>
                  <stop
                    stopColor="hsl(55, 100%, 20%)"
                    stopOpacity="1"
                    offset="100%"
                  ></stop>
                </linearGradient>
                <filter
                  id="ffflux-filter"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                  filterUnits="objectBoundingBox"
                  primitiveUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.001 0.001"
                    numOctaves="2"
                    seed="113"
                    stitchTiles="stitch"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    result="turbulence"
                  ></feTurbulence>
                  <feGaussianBlur
                    stdDeviation="0 0"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    in="turbulence"
                    edgeMode="duplicate"
                    result="blur"
                  ></feGaussianBlur>
                  <feBlend
                    mode="color-dodge"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    in="SourceGraphic"
                    in2="blur"
                    result="blend"
                  ></feBlend>
                </filter>
              </defs>
              <rect
                width="700"
                height="700"
                fill="url(#ffflux-gradient)"
                filter="url(#ffflux-filter)"
              ></rect>
            </svg>
          </div>
          <div className="relative z-1-">
            <h1 className="text-4xl font-domine font-[600] text-white mb-12">
              Get in touch
            </h1>

            <div className="space-y-8">
              <div>
                <h3 className="text-white text-lg font-semibold mb-2 font-inter">
                  Visit us
                </h3>
                <p className=" leading-relaxed text-slate-50">
                  Come say hello at our office HQ.
                  <br />
                  30 22nd St - Al Qouz Ind.fourth - Al Quoz - Dubai - United
                  Arab Emirates
                </p>
              </div>

              <div>
                <h3 className="text-lg text-white font-inter font-semibold mb-2">
                  Call us
                </h3>
                <p className="text-white mb-1">Mon-Fri from 8am to 5pm</p>
                <a
                  href="tel:+97143707996"
                  className="text-white hover:underline"
                >
                  +971 4 370 7996
                </a>
              </div>
            </div>
          </div>

          <div className="mt-22 relative z-1">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Social media
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-lg flex items-center justify-center transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-lg flex items-center justify-center transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-lg flex items-center justify-center transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-lg flex items-center justify-center transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex flex-col justify-center">
          <div className="space-y-7">
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-3">
              <div>
                <Label>First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  className="mt-2 h-11"
                />
              </div>
              <div>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  className="mt-2 h-11"
                />
              </div>
            </div>

            <div>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="user@email.com"
                className="mt-2 h-11"
              />
            </div>
            <div>
              <Label>Phone Number</Label>
              <Input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="(+995) 555-55-55-55"
                className="mt-2 h-11"
              />
            </div>
            <div>
              <Label>Select Service</Label>
              <div className="mt-2">
                <Select onValueChange={(v) => handleSelect(v)}>
                  <SelectTrigger className="w-full h-11!">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {carServices.map((service, idx) => (
                      <SelectItem key={idx} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label>Message</Label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what we can help you with"
                className="mt-2 h-32 resize-none"
              />
            </div>

            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full  bg-yellow-500 text-white font-inter h-11 "
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
