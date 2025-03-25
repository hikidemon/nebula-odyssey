"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaCreditCard, FaPaypal, FaGooglePay, FaApplePay, FaBitcoin, FaShoppingCart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface MarketplaceItemProps {
  id: number;
  name: string;
  price: string;
  rarity: string;
  image: string;
}

const shipSkins: MarketplaceItemProps[] = [
  {
    id: 1,
    name: "Nebula Voyager: Aurora",
    price: "2,500",
    rarity: "Rare",
    image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/8a8096ae-bdbf-480e-a053-760d699da41c/da1af42b-077c-4fcb-8bdc-63f0b3aa5964.png"
  },
  {
    id: 2,
    name: "Stellar Drifter: Obsidian",
    price: "4,000",
    rarity: "Epic",
    image: "https://as2.ftcdn.net/jpg/05/44/12/59/1000_F_544125965_945EtULx6gvALCOtraSUP0bZrgZBwE8d.jpg"
  },
  {
    id: 3,
    name: "Cosmic Serpent: Luminous",
    price: "3,200",
    rarity: "Rare",
    image: "https://images.wallpapersden.com/image/download/space-station-hd-sci-fi-planet-art_bmZubmaUmZqaraWkpJRnbmZnrWZraGc.jpg"
  },
  {
    id: 4,
    name: "Void Runner: Celestial",
    price: "5,500",
    rarity: "Legendary",
    image: "https://static.vecteezy.com/system/resources/previews/027/576/316/non_2x/space-station-on-planet-earth-futuristic-space-station-3d-rendering-a-space-station-orbiting-a-planet-with-a-digital-wave-advanced-technology-and-holographic-displays-ai-generated-free-photo.jpg"
  }
];

const characters: MarketplaceItemProps[] = [
  {
    id: 1,
    name: "Nova: Stellar Explorer",
    price: "1,800",
    rarity: "Epic",
    image: "https://media.istockphoto.com/id/1195199589/photo/dark-blue-spaceship-futuristic-interior-with-window-view-on-planet-earth-3d-rendering.jpg?s=612x612&w=0&k=20&c=H0_qt9Ry98ksk32RKqUBXlyWbnXtGlAt9ulqzq_UWl8="
  },
  {
    id: 2,
    name: "Orion: Void Hunter",
    price: "2,200",
    rarity: "Rare",
    image: "https://media.istockphoto.com/id/1186882619/photo/exploring-futuristic-planetary-system-in-virutal-reality.jpg?s=612x612&w=0&k=20&c=MtwgJy8vEuF6LWGrOam8_PHPNwpI5IctsOnm2fzYwN8="
  }
];

const stations: MarketplaceItemProps[] = [
  {
    id: 1,
    name: "Nexus Prime: Hub Station",
    price: "8,500",
    rarity: "Legendary",
    image: "https://static.vecteezy.com/system/resources/previews/027/576/316/non_2x/space-station-on-planet-earth-futuristic-space-station-3d-rendering-a-space-station-orbiting-a-planet-with-a-digital-wave-advanced-technology-and-holographic-displays-ai-generated-free-photo.jpg"
  },
  {
    id: 2,
    name: "Orbital Haven: Mining Station",
    price: "7,200",
    rarity: "Epic",
    image: "https://images.wallpapersden.com/image/download/space-station-hd-sci-fi-planet-art_bmZubmaUmZqaraWkpJRnbmZnrWZraGc.jpg"
  }
];

interface MarketplaceItemComponentProps {
  item: MarketplaceItemProps;
  index: number;
}

function MarketplaceItem({ item, index }: MarketplaceItemComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative h-[250px] w-full overflow-hidden rounded-t-lg">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/80 text-white">
            {item.rarity}
          </span>
        </div>
      </div>
      <div className="p-4 glass-panel cosmic-border border-t-0 rounded-b-lg">
        <h3 className="font-medium">{item.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <span className="text-solar-yellow mr-1">★</span>
            <span className="text-white font-medium">{item.price}</span>
            <span className="text-xs text-muted-foreground ml-1">credits</span>
          </div>
          <Button size="sm" variant="outline" className="rounded-full h-8 w-8 p-0 cosmic-border">
            <FaShoppingCart className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function MarketplaceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 relative bg-background">
      <div className="absolute inset-0 star-field opacity-30" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary mb-4 inline-block">
            CUSTOMIZATION & PERSONALIZATION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 cosmic-glow">
            Marketplace
          </h2>
          <p className="text-lg text-muted-foreground">
            Stand out in the cosmos with unique ships, characters, and stations.
            Express yourself with our vast collection of premium cosmetic items.
          </p>
        </div>

        <Tabs defaultValue="ships" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="glass-panel">
              <TabsTrigger value="ships">Ships</TabsTrigger>
              <TabsTrigger value="characters">Characters</TabsTrigger>
              <TabsTrigger value="stations">Stations</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="ships" className="space-y-8">
            <Carousel className="w-full">
              <CarouselContent>
                {shipSkins.map((skin, index) => (
                  <CarouselItem key={skin.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <MarketplaceItem item={skin} index={index} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>

            <div className="flex justify-center">
              <Button className="nebula-gradient">
                View All Ship Skins
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="characters" className="space-y-8">
            <Carousel className="w-full">
              <CarouselContent>
                {characters.map((character, index) => (
                  <CarouselItem key={character.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <MarketplaceItem item={character} index={index} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>

            <div className="flex justify-center">
              <Button className="nebula-gradient">
                View All Characters
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="stations" className="space-y-8">
            <Carousel className="w-full">
              <CarouselContent>
                {stations.map((station, index) => (
                  <CarouselItem key={station.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <MarketplaceItem item={station} index={index} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>

            <div className="flex justify-center">
              <Button className="nebula-gradient">
                View All Stations
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-24 glass-panel p-8 rounded-lg cosmic-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 cosmic-glow">
                Stellar Credit System
              </h3>
              <p className="text-muted-foreground mb-6">
                Easily purchase Stellar Credits to acquire premium cosmetic items, ships,
                characters, and more. Our secure payment system supports multiple methods.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg border border-border flex items-center gap-3">
                    <FaCreditCard className="text-primary text-xl" />
                    <span>Credit Card</span>
                  </div>
                  <div className="p-3 rounded-lg border border-border flex items-center gap-3">
                    <FaPaypal className="text-primary text-xl" />
                    <span>PayPal</span>
                  </div>
                  <div className="p-3 rounded-lg border border-border flex items-center gap-3">
                    <FaGooglePay className="text-primary text-xl" />
                    <span>Google Pay</span>
                  </div>
                  <div className="p-3 rounded-lg border border-border flex items-center gap-3">
                    <FaApplePay className="text-primary text-xl" />
                    <span>Apple Pay</span>
                  </div>
                  <div className="p-3 rounded-lg border border-border flex items-center gap-3">
                    <FaBitcoin className="text-primary text-xl" />
                    <span>Crypto</span>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button className="nebula-gradient">Purchase Credits</Button>
                  <Button variant="outline" className="cosmic-border">Learn More</Button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 cosmic-glow">
                Premium Bundles
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-primary relative overflow-hidden">
                  <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-primary/20 blur-2xl" />
                  <div className="relative">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-lg">Explorer Pack</h4>
                      <div className="px-2 py-1 text-xs font-medium rounded-full bg-primary/80 text-white">
                        20% OFF
                      </div>
                    </div>
                    <ul className="space-y-1 text-sm mb-4">
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        15,000 Stellar Credits
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        Exclusive Explorer Ship Skin
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        30-Day Resource Boost
                      </li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold">$39.99</span>
                        <span className="text-sm line-through text-muted-foreground">$49.99</span>
                      </div>
                      <Button size="sm">Purchase</Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-secondary relative overflow-hidden">
                  <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-secondary/20 blur-2xl" />
                  <div className="relative">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-lg">Commander Pack</h4>
                      <div className="px-2 py-1 text-xs font-medium rounded-full bg-secondary/80 text-white">
                        30% OFF
                      </div>
                    </div>
                    <ul className="space-y-1 text-sm mb-4">
                      <li className="flex items-center">
                        <span className="text-secondary mr-2">✓</span>
                        50,000 Stellar Credits
                      </li>
                      <li className="flex items-center">
                        <span className="text-secondary mr-2">✓</span>
                        Legendary Commander Ship
                      </li>
                      <li className="flex items-center">
                        <span className="text-secondary mr-2">✓</span>
                        2 Character Skins
                      </li>
                      <li className="flex items-center">
                        <span className="text-secondary mr-2">✓</span>
                        90-Day Resource Boost
                      </li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold">$89.99</span>
                        <span className="text-sm line-through text-muted-foreground">$129.99</span>
                      </div>
                      <Button size="sm">Purchase</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
