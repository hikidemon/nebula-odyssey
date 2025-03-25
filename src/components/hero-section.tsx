"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaRocket, FaUserAstronaut, FaGlobeAsia } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/53adb9cbe4b05e0d792c6c88/5396eee2-7598-4eb6-bde9-115f88197d11/Team-Liquid-Stacraft2-SC2---Wave-of-One-2022-Campaign---Jingna-Zhang-Art-Direction-Artwork1.jpg"
          alt="Space background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary">
                REVOLUTIONARY 3D SPACE ADVENTURE
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold cosmic-glow">
              NEBULA <span className="text-primary">ODYSSEY</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-foreground/90">
              Forge your path across the cosmos in a procedurally generated universe
              that evolves with your journey.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="nebula-gradient">
                PLAY NOW
              </Button>
              <Button size="lg" variant="outline" className="cosmic-border">
                WATCH TRAILER
              </Button>
            </div>

            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center nebula-gradient">
                  <FaRocket className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-medium">Evolving Universe</h3>
                  <p className="text-sm text-muted-foreground">Cosmos transforms based on your actions</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center nebula-gradient">
                  <FaUserAstronaut className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-medium">Unique Skins</h3>
                  <p className="text-sm text-muted-foreground">Customize your character and ships</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center nebula-gradient">
                  <FaGlobeAsia className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-medium">Global Community</h3>
                  <p className="text-sm text-muted-foreground">Join millions exploring the cosmos</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 rounded-lg overflow-hidden cosmic-border glass-panel">
              <Image
                src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/8a8096ae-bdbf-480e-a053-760d699da41c/da1af42b-077c-4fcb-8bdc-63f0b3aa5964.png"
                alt="Nebula Odyssey Spaceship"
                className="object-cover"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-medium cosmic-glow mb-2">The Nebula Voyager</h3>
                <p className="text-sm text-foreground/80">
                  Your primary vessel for exploring the vast cosmos.
                  Upgradable with advanced technology and customizable with unique skins.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-foreground/60 rounded-full mt-1"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
