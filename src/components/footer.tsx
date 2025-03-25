"use client";

import Link from "next/link";
import { FaDiscord, FaTwitter, FaYoutube, FaTwitch, FaReddit } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 star-field opacity-20 pointer-events-none" />
      <div className="container mx-auto py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full nebula-gradient flex items-center justify-center">
                <span className="text-white font-bold text-xl">NO</span>
              </div>
              <h1 className="text-xl font-bold text-white cosmic-glow">
                NEBULA <span className="text-primary">ODYSSEY</span>
              </h1>
            </Link>
            <p className="text-muted-foreground text-sm">
              Forge your path across the cosmos in a procedurally generated universe
              that evolves with your journey. The ultimate 3D space adventure.
            </p>
            <div className="flex gap-2">
              <Link href="https://discord.gg" target="_blank">
                <Button size="icon" variant="outline" className="cosmic-border rounded-full">
                  <FaDiscord className="text-lg" />
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Button size="icon" variant="outline" className="cosmic-border rounded-full">
                  <FaTwitter className="text-lg" />
                </Button>
              </Link>
              <Link href="https://youtube.com" target="_blank">
                <Button size="icon" variant="outline" className="cosmic-border rounded-full">
                  <FaYoutube className="text-lg" />
                </Button>
              </Link>
              <Link href="https://twitch.tv" target="_blank">
                <Button size="icon" variant="outline" className="cosmic-border rounded-full">
                  <FaTwitch className="text-lg" />
                </Button>
              </Link>
              <Link href="https://reddit.com" target="_blank">
                <Button size="icon" variant="outline" className="cosmic-border rounded-full">
                  <FaReddit className="text-lg" />
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Game</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/gameplay" className="text-muted-foreground hover:text-foreground transition-colors">
                  Gameplay
                </Link>
              </li>
              <li>
                <Link href="/ships" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ships & Vehicles
                </Link>
              </li>
              <li>
                <Link href="/planets" className="text-muted-foreground hover:text-foreground transition-colors">
                  Planets & Galaxies
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-muted-foreground hover:text-foreground transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Marketplace</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/marketplace/skins" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ship Skins
                </Link>
              </li>
              <li>
                <Link href="/marketplace/characters" className="text-muted-foreground hover:text-foreground transition-colors">
                  Characters
                </Link>
              </li>
              <li>
                <Link href="/marketplace/upgrades" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ship Upgrades
                </Link>
              </li>
              <li>
                <Link href="/marketplace/bundles" className="text-muted-foreground hover:text-foreground transition-colors">
                  Special Bundles
                </Link>
              </li>
              <li>
                <Link href="/marketplace/currency" className="text-muted-foreground hover:text-foreground transition-colors">
                  Stellar Credits
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support/ticket" className="text-muted-foreground hover:text-foreground transition-colors">
                  Submit a Ticket
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © 2025 Nebula Odyssey. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex gap-4 text-sm text-muted-foreground">
            <Link href="/legal/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/legal/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/legal/cookies" className="hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
