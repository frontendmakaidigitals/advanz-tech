"use client";

import * as React from "react";
import { ChevronRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { navbarItems, MenuItem } from "./header";

export function MobileNavMenu({ isDark }: { isDark: boolean }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={`${isDark ? "border-black" : "border-white"}`}
        >
          <Menu className={`h-5 w-5 ${isDark ? "text-black" : "text-white"}`} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full w-[85vw] max-w-sm ml-auto">
        <div className="h-full flex flex-col">
          <DrawerHeader className="border-b">
            <div className="flex items-center justify-between">
              <DrawerTitle className="text-xl font-inter text-slate-800">
                Menu
              </DrawerTitle>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>

          <div className="flex-1 overflow-y-auto p-4">
            <nav>
              <ul className="space-y-2">
                {navbarItems.map((item) => (
                  <MobileNavItem
                    key={item.title}
                    item={item}
                    onNavigate={() => setOpen(false)}
                  />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function MobileNavItem({
  item,
  level = 0,
  onNavigate,
}: {
  item: MenuItem;
  level?: number;
  onNavigate: () => void;
}) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  if (item.submenu && item.submenu.length > 0) {
    return (
      <li>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-3 px-0! rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-left transition-colors"
          style={{ paddingLeft: `${12 + level * 16}px` }}
        >
          <div className="flex-1">
            <div className="font-medium text-gray-900 dark:text-white">
              {item.title}
            </div>
            {item.description && level === 0 && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {item.description}
              </p>
            )}
          </div>
          <ChevronDown
            className={`h-4 w-4 text-gray-500 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>

        {isExpanded && (
          <ul className="mt-1 space-y-1">
            {item.submenu.map((subItem) => (
              <MobileNavItem
                key={subItem.title}
                item={subItem}
                level={level + 1}
                onNavigate={onNavigate}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      <Link
        href={item.href}
        onClick={onNavigate}
        className="block p-3 px-0! rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        style={{ paddingLeft: `${12 + level * 16}px` }}
      >
        <div className="font-medium text-gray-900 dark:text-white">
          {item.title}
        </div>
        {item.description && level === 0 && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {item.description}
          </p>
        )}
      </Link>
    </li>
  );
}

export default MobileNavMenu;
