"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface MainNavProps {
  items?: MainNavItem[];
}

export default function MainNav({ items }: MainNavProps) {
  return (
    <>
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          {items &&
            items.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item?.items ? (
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                ) : (
                  item.href && (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )
                )}
                {item?.items ? (
                  <NavigationMenuContent>
                    <ul className="flex w-[220px] flex-col p-4">
                      {item?.items.map((subItem) => (
                        <ListItem
                          key={subItem.title}
                          href={subItem.href}
                          title={subItem.title}
                        ></ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                ) : null}
              </NavigationMenuItem>
            ))}
          <NavigationMenuIndicator />
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 px-3 py-1.5 leading-none no-underline outline-none transition-colors hover:text-primary focus:text-primary",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
