"use client";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import SunIcon from "../ui/icons/SunIcon";
import MoonIcon from "../ui/icons/MoonIcon";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Tech Stack", link: "/tech-stack" },
  { title: "Projects", link: "/projects" },
];
const Nav = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { theme, setTheme } = useTheme();
  const switchTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateMounted = () => {
      setMounted(true)
    }

    updateMounted()
  }, []);


  return (
    <nav className="mb-12 flex flex-wrap items-center justify-between gap-1">
      <div className="flex items-center">
        <div className="inline-flex text-2xl font-medium dark:text-white">
          <span>cjoswa</span>
        </div>
      </div>
      <div className="flex h-12 gap-2">
        <div className="nav-items-list">
          {NAV_ITEMS.map((navItems) => (
            <button
              key={navItems.title}
              className={`rounded-full px-4 py-2 ${pathName === navItems.link ? "nav-button-active" : "nav-button-inactive"}`}
              onClick={() => router.push(navItems.link)}
            >
              {navItems.title}
            </button>
          ))}
        </div>
        <div className="p-1">
          <button className="theme-toggle" onClick={switchTheme}>
            {mounted && (
              theme === "light" ? <MoonIcon /> : <SunIcon />
            )}
            
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
