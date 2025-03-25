"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaDiscord, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full nebula-gradient flex items-center justify-center">
            <span className="text-white font-bold text-xl">NO</span>
          </div>
          <h1 className="text-xl font-bold text-white cosmic-glow hidden sm:block">
            NEBULA <span className="text-primary">ODYSSEY</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Game</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/features"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Explore the Universe
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Navigate through a procedurally generated cosmos that evolves based on your actions.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link href="/gameplay" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Gameplay</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Game mechanics and modes
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ships" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Ships & Vehicles</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Customize your space fleet
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/marketplace" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  Marketplace
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/community" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  Community
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/support" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  Support
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center gap-2">
          <div className="flex gap-2">
            <Link href="https://discord.gg" target="_blank">
              <Button size="icon" variant="ghost">
                <FaDiscord className="text-lg" />
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Button size="icon" variant="ghost">
                <FaTwitter className="text-lg" />
              </Button>
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <Button size="icon" variant="ghost">
                <FaYoutube className="text-lg" />
              </Button>
            </Link>
          </div>
          <Button className="nebula-gradient">PLAY NOW</Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <IoClose className="text-2xl" />
          ) : (
            <HiOutlineMenuAlt3 className="text-2xl" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 glass-panel lg:hidden transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto pt-20 pb-6 px-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="/game"
              className="text-lg font-medium py-2 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Game
            </Link>
            <Link
              href="/marketplace"
              className="text-lg font-medium py-2 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link
              href="/community"
              className="text-lg font-medium py-2 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              href="/support"
              className="text-lg font-medium py-2 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support
            </Link>
          </nav>
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex justify-center gap-4">
              <Link href="https://discord.gg" target="_blank">
                <Button size="icon" variant="outline">
                  <FaDiscord className="text-lg" />
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Button size="icon" variant="outline">
                  <FaTwitter className="text-lg" />
                </Button>
              </Link>
              <Link href="https://youtube.com" target="_blank">
                <Button size="icon" variant="outline">
                  <FaYoutube className="text-lg" />
                </Button>
              </Link>
            </div>
            <Button className="nebula-gradient w-full">PLAY NOW</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
