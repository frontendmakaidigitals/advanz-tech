"use client";
import { NavigationMenu } from "./nav";
import Logo from "./Logo";
import Navbtn from "./navbtn";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileNavMenu } from "./mobile-nav-menu";
const paths = ["/contact"];
export type MenuItem = {
  title: string;
  href: string;
  description?: string;
  submenu?: MenuItem[];
};

export const navbarItems: MenuItem[] = [
  {
    title: "Brands",
    href: "/brands",
    description: "Explore the different car brands we offer.",
  },
  {
    title: "Services",
    href: "/services",
    description: "Check out our services, from workshop to maintenance.",
    submenu: [
      {
        title: "Workshop",
        href: "/services/workshop",
        description: "Professional workshop services for your vehicle.",
        submenu: [
          { title: "Car AC Repair", href: "/workshop-services/car-ac-repair" },

          {
            title: "Car Wheel Alignment",
            href: "/workshop-services/car-alignment",
          },

          {
            title: "Car Battery Repair",
            href: "/workshop-services/car-battery-repair",
          },

          {
            title: "Car Battery Replacement",
            href: "/workshop-services/car-battery-replacement",
          },

          {
            title: "Car Brake Repair",
            href: "/workshop-services/car-brake-repair",
          },

          {
            title: "Car Comfort System",
            href: "/workshop-services/car-comfort",
          },

          {
            title: "Car Engine Repair",
            href: "/workshop-services/car-engine-repair",
          },

          {
            title: "Car Fuel Injector Cleaning",
            href: "/workshop-services/car-fuel-injector",
          },

          {
            title: "Car Gearbox Repair",
            href: "/workshop-services/car-gearbox",
          },

          {
            title: "Car Oil Change",
            href: "/workshop-services/car-oil-change",
          },

          {
            title: "Car Radiator Repair",
            href: "/workshop-services/car-radiator",
          },

          {
            title: "Car Speed Control Unit",
            href: "/workshop-services/car-speed-control",
          },

          {
            title: "Car Steering Repair",
            href: "/workshop-services/car-steering",
          },

          {
            title: "Car Suspension Repair",
            href: "/workshop-services/car-suspension-repair",
          },

          {
            title: "Car Transmission Repair",
            href: "/workshop-services/car-transmission",
          },

          {
            title: "Pre Purchase Car Inspection",
            href: "/workshop-services/pre-purchase-inspection",
          },
        ],
      },
      {
        title: "Maintenance",
        href: "/services/maintenance",
        description: "Regular maintenance to keep your car running smoothly.",
      },
      {
        title: "International Shipping",
        href: "/services/shipping",
        description: "Worldwide vehicle shipping and logistics.",
      },
    ],
  },
  {
    title: "About Us",
    href: "/about",
    description: "Learn more about Munich Motor Works and our story.",
  },
  {
    title: "Used Cars",
    href: "/used-cars",
    description: "Browse our pre-owned and certified used cars.",
  },
  {
    title: "Contact Us",
    href: "/contact",
    description: "Get in touch with us for inquiries or support.",
  },
];

const Header = () => {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const handleTheme = () => {
      const isPathMatch = paths.some((path) => pathname.startsWith(path));
      setIsDark(window.scrollY > window.innerHeight || isPathMatch);
    };

    handleTheme();
    window.addEventListener("scroll", handleTheme);

    return () => {
      window.removeEventListener("scroll", handleTheme);
    };
  }, [pathname]);
  return (
    <div className=" fixed z-50 top-0 left-0 w-full  backdrop-blur-2xl  py-3 ">
      <div className=" flex justify-between container items-center">
        <Logo className={""} />
        <NavigationMenu isDark={isDark} />
        <Navbtn />
        <div className="block lg:hidden">
          <MobileNavMenu isDark={isDark} />
        </div>
      </div>
    </div>
  );
};

export default Header;
