"use client";

import * as React from "react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navbarItems: {
  title: string;
  href: string;
  description?: string;
  submenu?: { title: string; href: string }[];
}[] = [
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
      { title: "Workshop", href: "/services/workshop" },
      { title: "Maintenance", href: "/services/maintenance" },
      { title: "International Shipping", href: "/services/shipping" },
    ],
  },
  {
    title: "About Us",
    href: "/about",
    description: "Learn more about Munich Motor Works and our story.",
  },
  {
    title: "Contact Us",
    href: "/contact",
    description: "Get in touch with us for inquiries or support.",
  },
  {
    title: "Used Cars",
    href: "/used-cars",
    description: "Browse our pre-owned and certified used cars.",
  },
  {
    title: "Book An Appointment",
    href: "/book-appointment",
    description: "Schedule a service or consultation with us.",
  },
];

export function NavigationMenuDemo() {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap ">
        {navbarItems.map((item) => (
          <NavigationMenuItem
            key={item.title}
            className="bg-transparent rounded-lg"
          >
            {item.submenu ? (
              <>
                <NavigationMenuTrigger className="bg-transparent">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 ">
                    {item.submenu.map((sub) => (
                      <ListItem
                        key={sub.title}
                        title={sub.title}
                        href={sub.href}
                      >
                        {/* Optionally show description for submenu */}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent rounded-lg"
                )}
              >
                <Link href={item.href}>{item.title}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm font-medium">{title}</div>
          {children && (
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
