import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";
import Container from "../../ui/Container";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import Typography from "../../ui/Typography";
import { navLinks } from "@/constants";
import Logo from "../../icons/Logo";
import React from "react";
import Loop from "./Loop";
import Bell from "./Bell";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export function Navbar() {
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={cn(
        scrollPosition > 0
          ? "supports-[backdrop-filter]:bg-absolute-black/60 backdrop-blur"
          : "bg-transparent",
        "navbar fixed hidden w-full py-[18px] transition md:block",
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <Logo className="w-[165px] 2xl:w-[200px]" />
        </NavLink>

        {/* Nav Items */}
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map((nav) => (
              <NavigationMenuItem key={nav.id}>
                <Link to={nav.link}>{nav.title}</Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-x-3.5 2xl:gap-x-[30px]">
          <Loop />
          <Bell />
        </div>
      </Container>
    </div>
  );
}

interface NavLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const Link = (props: NavLinkProps) => {
  const activeClasses = "bg-dark-black-10 text-absolute-white";
  const unActiveClasses = "text-grey-grey-75";

  return (
    <NavigationMenuLink asChild>
      <NavLink to={props.to}>
        {({ isActive }) => (
          <Typography
            variant="span"
            className={cn(
              navigationMenuTriggerStyle(),
              isActive ? activeClasses : unActiveClasses,
              props.className,
            )}
          >
            {props.children}
          </Typography>
        )}
      </NavLink>
    </NavigationMenuLink>
  );
};