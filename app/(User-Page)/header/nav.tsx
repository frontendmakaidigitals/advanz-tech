"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import { navbarItems, MenuItem } from "./header";

export function NavigationMenu({ isDark }: { isDark: boolean }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav className="relative hidden md:block">
      <ul className="flex flex-wrap items-center gap-2">
        {navbarItems.map((item) => (
          <NavItem
            key={item.title}
            item={item}
            isDark={isDark}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
        ))}
      </ul>
    </nav>
  );
}

function NavItem({
  item,
  isDark,
  openMenu,
  setOpenMenu,
}: {
  item: MenuItem;
  isDark: boolean;
  openMenu: string | null;
  setOpenMenu: (menu: string | null) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isOpen = openMenu === item.title || isHovered;

  const handleMouseEnter = () => {
    setIsHovered(true);
    setOpenMenu(item.title);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setOpenMenu(null);
  };

  if (item.submenu) {
    return (
      <li
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={`px-4 py-2 rounded-lg flex items-center gap-1 transition-colors ${
            isOpen
              ? isDark
                ? "bg-gray-100 text-black"
                : "bg-white/20 text-white"
              : isDark
                ? "text-black hover:bg-gray-100"
                : "text-white hover:bg-white/10"
          }`}
        >
          {item.title}
          <ChevronDown className="h-4 w-4" />
        </button>

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute pt-1 left-0 top-full z-50 min-w-[300px] overflow-visible"
            >
              <div className=" bg-white rounded-lg shadow-lg border border-gray-200">
                <ul className="py-2">
                  {item.submenu.map((subItem) => (
                    <SubMenuItem key={subItem.title} item={subItem} />
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={item.href}
        className={`px-4 py-2 font-inter rounded-lg block transition-colors ${
          isDark
            ? "text-black hover:bg-gray-100"
            : "text-white hover:bg-white/10"
        }`}
      >
        {item.title}
      </Link>
    </li>
  );
}

function SubMenuItem({ item }: { item: MenuItem }) {
  const [isHovered, setIsHovered] = useState(false);

  if (item.submenu) {
    return (
      <li
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`px-4 py-3 cursor-pointer flex items-center justify-between transition-colors ${
            isHovered
              ? "bg-gray-100 dark:bg-gray-700"
              : "hover:bg-gray-50 dark:hover:bg-gray-800"
          }`}
        >
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {item.title}
            </div>
            {item.description && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {item.description}
              </p>
            )}
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400" />
        </div>

        <AnimatePresence mode="wait">
          {isHovered && (
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.075, 0.82, 0.165, 1] }}
              className="absolute left-full top-0 z-[60] min-w-[430px] "
            >
              <div className="ml-1 bg-white  px-3 rounded-lg shadow-lg border border-gray-200">
                <ul className="py-2 grid grid-cols-2 gap-2">
                  {item.submenu.map((nestedItem) => (
                    <SubMenuItem key={nestedItem.title} item={nestedItem} />
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={`/services/${item.href}`}
        className="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div className="text-sm font-inter font-medium text-gray-900 dark:text-white">
          {item.title}
        </div>
        {item.description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {item.description}
          </p>
        )}
      </Link>
    </li>
  );
}

export default NavigationMenu;
