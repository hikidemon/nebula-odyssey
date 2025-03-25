"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaChartLine, FaPalette, FaRocket, FaSatellite, FaGlobe, FaUsers } from "react-icons/fa";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <FaChartLine className="text-4xl text-primary" />,
    title: "Cosmic Evolution System",
    description: "A revolutionary engine where celestial bodies actually evolve over time based on player actions and cosmic events. Your decisions will shape the universe itself."
  },
  {
    icon: <FaPalette className="text-4xl text-primary" />,
    title: "Extensive Customization",
    description: "Choose from hundreds of unique skins and parts for your ships, bases, and characters. Express yourself across the cosmos with rare collectible items."
  },
  {
    icon: <FaRocket className="text-4xl text-primary" />,
    title: "Advanced Ship Engineering",
    description: "Design and build custom spacecraft with components that affect real physics-based performance. Trade speed for defense or create a balanced exploration vessel."
  },
  {
    icon: <FaSatellite className="text-4xl text-primary" />,
    title: "Dynamic Mission System",
    description: "No two quests are the same. Our procedural mission generator creates unique objectives based on the state of the universe and your player history."
  },
  {
    icon: <FaGlobe className="text-4xl text-primary" />,
    title: "Planetary Colonization",
    description: "Discover and claim planets for resource extraction and base building. Form alliances with other players to create flourishing cosmic colonies."
  },
  {
    icon: <FaUsers className="text-4xl text-primary" />,
    title: "Cross-Platform Multiplayer",
    description: "Seamless integration allows players across all platforms to explore together. Join massive community events that shape the future of the game universe."
  }
];

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section className="relative py-20 bg-background">
      {/* Visual elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10" />
      <div className="absolute inset-0 star-field opacity-40" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary mb-4 inline-block">
            UNIQUE GAMEPLAY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 cosmic-glow">
            Redefining Space Exploration
          </h2>
          <p className="text-lg text-muted-foreground">
            Nebula Odyssey offers a truly immersive 3D experience with innovative features not found in any other space game.
          </p>
        </div>

        <div ref={ref}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-6 rounded-lg cosmic-border h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary mb-4 inline-block">
                THE FUTURE OF GAMING
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 cosmic-glow">
                Cosmic Evolution Engine
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At the heart of Nebula Odyssey is our revolutionary Cosmic Evolution Engine, where the universe actually evolves in real-time based on all player actions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full nebula-gradient flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Dynamic Star Systems</h4>
                    <p className="text-sm text-muted-foreground">Stars age and evolve, affecting their planets and resources</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full nebula-gradient flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Emergent Life</h4>
                    <p className="text-sm text-muted-foreground">Planets can develop new lifeforms based on player terraforming</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full nebula-gradient flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Faction Influences</h4>
                    <p className="text-sm text-muted-foreground">Player alliances shape political landscapes and trade routes</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3 relative h-[300px] md:h-[500px] order-1 lg:order-2">
              <div className="absolute inset-0 rounded-lg overflow-hidden cosmic-border">
                <Image
                  src="https://as2.ftcdn.net/jpg/05/44/12/59/1000_F_544125965_945EtULx6gvALCOtraSUP0bZrgZBwE8d.jpg"
                  alt="Cosmic Evolution Engine"
                  className="object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
