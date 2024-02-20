"use client";

import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchForm from "@/components/forms/search-form";

export function SiteSearch() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="group flex h-8 w-8 items-center justify-center rounded-full transition-colors lg:ml-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="h-6 w-6 fill-foreground transition-colors group-hover:fill-primary group-focus:fill-primary dark:fill-white"
          >
            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
          </svg>
          <span className="sr-only">Open Search</span>
        </button>
      </SheetTrigger>
      <SheetContent side="top" className="">
        <ScrollArea className="mb-4 mt-16  px-16 pb-10">
          <SearchForm />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
