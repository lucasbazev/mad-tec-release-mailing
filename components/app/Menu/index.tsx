"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavOptions, NavOption } from "./menu.config";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  type SheetProps,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const SideMenu = () => {
  const currentUrl = usePathname();

  return (
    <div className="hidden xl:flex flex-col h-screen overflow-y-scroll w-[320px] bg-white px-4 py-8 sticky left-0 top-0 border border-right-gray-200">
      <p className="font-black">MAD Tec</p>

      <div className="flex flex-col gap-y-2 items-stretch mt-12">
        {NavOptions.map((option: NavOption) => (
          <Link
            key={`nav_option_${option.label}`}
            href={option.href}
            className={cn(
              "flex items-center gap-x-2 px-4 py-4 rounded-md transition-colors hover:bg-gray-50",
              currentUrl === option.href
                ? "bg-gray-100 text-black"
                : "text-gray-500",
            )}
          >
            {option.icon}
            <p className="text-sm">{option.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const MobileMenu = (props: SheetProps) => {
  const currentUrl = usePathname();

  return (
    <Sheet {...props}>
      <SheetTrigger className="block xl:hidden">
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent className="block xl:hidden h-screen px-4">
        <SheetHeader className="flex justify-between">
          <p className="font-black">MAD Tec</p>

          <SheetClose>
            <Button variant="outline">
              <X />
            </Button>
          </SheetClose>
        </SheetHeader>

        <div className="flex flex-col gap-y-2 items-stretch mt-12 h-screen overflow-y-scroll pb-32">
          {NavOptions.map((option: NavOption) => (
            <Link
              key={`nav_option_${option.label}`}
              href={option.href}
              className={cn(
                "flex items-center gap-x-2 px-4 py-4 rounded-md transition-colors hover:bg-gray-50",
                currentUrl === option.href
                  ? "bg-gray-100 text-black"
                  : "text-gray-500",
              )}
            >
              {option.icon}
              <p className="text-sm">{option.label}</p>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
