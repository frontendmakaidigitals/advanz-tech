import Image from "next/image";
import Logo from "../header/Logo";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer7() {
  return (
    <footer className="bg-background px-4 border-t border-slate-200 pt-16 text-xs text-foreground md:px-6 pb-64 relative">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-2 ">
            <Logo className="text-4xl text-black" />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Empowering teams to achieve project success through effective
              management and collaboration.
            </p>
            <div className="mt-5 flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="size-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-wide text-foreground">
              Features
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Task Management
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Gantt Charts{" "}
                  <span className="ml-1 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                    Pro
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Time Tracking
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Resource Allocation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-wide text-foreground">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Webinars{" "}
                  <span className="ml-1 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                    New
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-wide text-foreground">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Careers{" "}
                  <span className="ml-1 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                    Hiring
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Logo. All Rights Reserved.
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-62.5">
        <Image
          src={"/footer.webp"}
          width={800}
          height={800}
          alt="logo"
          className="w-full opacity-[.05] h-full object-contain grayscale-100"
        />
      </div>
    </footer>
  );
}
