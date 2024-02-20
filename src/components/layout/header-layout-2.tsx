"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SiteLogo from "./site-logo";
import { DarkModeSwitch } from "../dark-mode-switch";
import MainNav from "./main-nav";
import { mainNav } from "@/config/site";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";
import { Offcanvas } from "./offcanvas";
import { SiteSearch } from "./site-search";

const HeaderLayout2 = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);

    return () => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  const stickyHeader = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 10
        ? setStickyClass("bg-white dark:bg-slate-900 lg:py-3 py-3")
        : setStickyClass("");
    }
  };

  return (
    <>
      <header className="fixed top-0 z-20 w-full">
        <div
          className={cn(
            "flex items-center px-4 py-5 transition-all lg:py-12 xl:px-20",
            stickyClass,
          )}
        >
          <Link href="/" className="mr-12 shrink-0">
            <SiteLogo
              width={123}
              height={39}
              lightClasses="w-4/5 dark:hidden lg:w-auto"
              darkClasses="hidden w-4/5 dark:block lg:w-auto"
            />
          </Link>

          <div className="relative flex w-full items-center justify-end lg:bg-transparent">
            <MainNav items={mainNav} />
            <DarkModeSwitch className="mr-3" />
            <SiteSearch />
            <div className="hidden lg:flex">
              <Offcanvas />
            </div>
            <MobileNav mainNavItems={mainNav} triggerIcon="style-2" />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderLayout2;
