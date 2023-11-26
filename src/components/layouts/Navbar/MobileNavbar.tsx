import Container from "@/components/ui/Container";
import { NavLink } from "react-router-dom";
import Logo from "@/components/icons/Logo";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Button from "@/components/ui/Button";
import ToggleIcon from "@/components/icons/ToggleIcon";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { navLinks } from "@/constants";
import Typography from "@/components/ui/Typography";
import React from "react";
import Loop from "./Loop";
import Bell from "./Bell";

const MobileNavbar = () => {
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={cn(
        scrollPosition > 0
          ? "supports-[backdrop-filter]:bg-absolute-black/60 backdrop-blur"
          : "bg-transparent",
        "mobile-navbar fixed w-full pb-[11px] pt-[37px] md:hidden",
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <Logo className="w-[126px]" />
        </NavLink>

        {/* Icons */}
        <div className="flex items-center justify-center space-x-3">
          <div className="flex gap-x-3.5 2xl:gap-x-[30px]">
            <Loop />
            <Bell />
          </div>

          {/* Toggle Icon and animation */}
          <Sheet key="left">
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="rounded-md border-[3px] border-dark-black-15 bg-dark-black-10 !p-3"
              >
                <ToggleIcon width={24} height={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full px-0 py-0">
              <Container className="h-full">
                <div className="flex items-center pb-4 pt-10">
                  <Logo className="w-[126px]" />
                </div>
                <ScrollArea className="h-[calc(100vh-8rem)]">
                  {/* Nav links */}
                  <div className="nav-items flex flex-col">
                    {navLinks.map((nav) => (
                      <Link
                        key={nav.id}
                        to={nav.link}
                        className="flex py-2 text-lg"
                      >
                        {nav.title}
                      </Link>
                    ))}
                  </div>
                </ScrollArea>
              </Container>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </div>
  );
};

interface NavLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const Link = (props: NavLinkProps) => {
  const activeClasses = "text-grey-grey-60";
  const unActiveClasses = "text-absolute-white";

  return (
    <SheetClose asChild>
      <NavLink to={props.to}>
        {({ isActive }) => (
          <Typography
            variant="span"
            className={cn(
              isActive ? activeClasses : unActiveClasses,
              props.className,
            )}
          >
            {props.children}
          </Typography>
        )}
      </NavLink>
    </SheetClose>
  );
};

export default MobileNavbar;
