import { House, Mail } from "lucide-react";
import { ReactNode } from "react";

export type NavOption = {
  label: string;
  href: string;
  icon: ReactNode;
  active?: boolean;
};

export const NavOptions: NavOption[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: <House size={20} />,
  },
  {
    label: "Release & Mailing",
    href: "/release-mailing",
    icon: <Mail size={20} />,
  },
];
