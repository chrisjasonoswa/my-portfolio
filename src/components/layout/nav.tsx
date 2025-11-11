  "use client";
  import { usePathname, useRouter } from "next/navigation";
  import { useTheme } from "next-themes";
  import SunIcon from "../ui/icons/SunIcon";
  import MoonIcon from "../ui/icons/MoonIcon";
  import { useEffect, useState } from "react";
  import MenuIcon from "../ui/icons/MenuIcon";
  import Icon from "../ui/icons/Icon";

  const NAV_ITEMS = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Tech Stack", link: "/tech-stack" },
    { title: "Projects", link: "/projects" },
  ];
  const Nav = () => {
    const router = useRouter();
    const pathName = usePathname();

    // States
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    

    // Functions
    const switchTheme = () => {
      if (theme === "dark") setTheme("light");
      else setTheme("dark");
    };

    useEffect(() => {
      const updateMounted = () => {
        setMounted(true)
      }

      updateMounted()
    }, []);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen)
    }

    return (
      <nav className="mb-12 flex flex-wrap items-center justify-between gap-1">
        {/* website title */}
        <div className="flex items-center">
          <div className="inline-flex text-2xl font-medium dark:text-white">
            <span>cjoswa</span>
          </div>
        </div>
        {/* actions section (sm screens and up)*/}
        <div className="flex min-h-12 gap-2 justify-between">
          <div className="hidden sm:flex nav-items-list ">
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
          <div className="flex w-12 py-1 justify-end">
            <button className="theme-toggle" onClick={switchTheme} aria-label="theme-toggle">
              {mounted && (
                theme === "light" ? <MoonIcon /> : <SunIcon />
              )}
            </button>
          </div>
          <div className="flex sm:hidden w-12 py-1 justify-end menu-dropdown-container">
            <button className="menu-toggle" onClick={toggleMenu} aria-label="menu-toggle">
              <MenuIcon /> 
            </button>
            { menuOpen &&
              <div className="menu-dropdown-nav-items">
                {NAV_ITEMS.map((navItems) => (
                  <button
                    key={navItems.title}
                    className={`rounded-2xl w-full px-4 py-2 ${pathName === navItems.link ? "nav-button-active" : "nav-button-inactive"}`}
                    onClick={() => router.push(navItems.link)}
                  >
                    {navItems.title}
                  </button>
                ))}
              </div>
            }
          </div>
        </div>
      </nav>
    );
  };

  export default Nav;
