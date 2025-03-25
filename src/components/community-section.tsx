"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaDiscord, FaTwitter, FaTwitch, FaYoutube, FaReddit, FaClock, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface EventProps {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  participants: number;
}

interface TestimonialProps {
  id: number;
  author: string;
  avatar: string;
  text: string;
  role: string;
}

const events: EventProps[] = [
  {
    id: 1,
    title: "Celestial Tournament",
    date: "April 15, 2025",
    time: "18:00 UTC",
    description: "Compete against the best pilots in the galaxy in our monthly ship racing competition. Exclusive rewards for top performers.",
    image: "https://as2.ftcdn.net/jpg/05/44/12/59/1000_F_544125965_945EtULx6gvALCOtraSUP0bZrgZBwE8d.jpg",
    participants: 1280
  },
  {
    id: 2,
    title: "Galactic Trade Summit",
    date: "April 22, 2025",
    time: "15:00 UTC",
    description: "Join alliance leaders and top traders to establish new trade routes and forge economic alliances.",
    image: "https://static.vecteezy.com/system/resources/previews/027/576/316/non_2x/space-station-on-planet-earth-futuristic-space-station-3d-rendering-a-space-station-orbiting-a-planet-with-a-digital-wave-advanced-technology-and-holographic-displays-ai-generated-free-photo.jpg",
    participants: 850
  },
  {
    id: 3,
    title: "Nebula Odyssey Dev Talk",
    date: "May 5, 2025",
    time: "19:00 UTC",
    description: "Our development team reveals upcoming features and answers community questions about the Cosmic Evolution Engine.",
    image: "https://media.istockphoto.com/id/1186882619/photo/exploring-futuristic-planetary-system-in-virutal-reality.jpg?s=612x612&w=0&k=20&c=MtwgJy8vEuF6LWGrOam8_PHPNwpI5IctsOnm2fzYwN8=",
    participants: 3200
  }
];

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    author: "CosmicExplorer",
    avatar: "/user1.png",
    text: "Nebula Odyssey completely redefined what a space game can be. The Cosmic Evolution Engine creates truly unique experiences every time I play.",
    role: "Veteran Explorer"
  },
  {
    id: 2,
    author: "StardustTrader",
    avatar: "/user2.png",
    text: "The customization options are incredible. I've spent hours perfecting my fleet, and the economic system makes trading both strategic and rewarding.",
    role: "Guild Leader"
  },
  {
    id: 3,
    author: "VoidWalker",
    avatar: "/user3.png",
    text: "The community events bring players together in ways I've never experienced in other games. Made so many friends exploring the universe together.",
    role: "Alliance Commander"
  }
];

export default function CommunitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 star-field opacity-30" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary mb-4 inline-block">
            JOIN THE ADVENTURE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 cosmic-glow">
            Vibrant Community
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect with millions of explorers across the cosmos. Participate in events,
            join alliances, and shape the future of the Nebula Odyssey universe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start mb-24">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="glass-panel p-6 rounded-lg cosmic-border"
            >
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <Button variant="outline" className="flex items-center gap-2 cosmic-border">
                  <FaDiscord className="text-lg text-primary" />
                  <span>Discord</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2 cosmic-border">
                  <FaTwitter className="text-lg text-primary" />
                  <span>Twitter</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2 cosmic-border">
                  <FaTwitch className="text-lg text-primary" />
                  <span>Twitch</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2 cosmic-border">
                  <FaYoutube className="text-lg text-primary" />
                  <span>YouTube</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2 cosmic-border">
                  <FaReddit className="text-lg text-primary" />
                  <span>Reddit</span>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel p-6 rounded-lg cosmic-border"
            >
              <h3 className="text-xl font-bold mb-6">Player Testimonials</h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="nebula-gradient text-white">
                          {testimonial.author.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{testimonial.author}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <blockquote className="text-sm italic text-muted-foreground">
                      "{testimonial.text}"
                    </blockquote>
                    {index < testimonials.length - 1 && (
                      <hr className="border-border" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 cosmic-glow">Upcoming Events</h3>

            <div className="space-y-6">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className="glass-panel rounded-lg cosmic-border overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative h-48 md:h-auto">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="md:col-span-2 p-6">
                      <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <FaClock className="text-primary" />
                          <span>{event.date} at {event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaUsers className="text-primary" />
                          <span>{event.participants.toLocaleString()} Registered</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {event.description}
                      </p>
                      <div className="flex gap-3">
                        <Button className="nebula-gradient">Register</Button>
                        <Button variant="outline" className="cosmic-border">Remind Me</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline" className="cosmic-border">
                View All Community Events
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="glass-panel p-8 rounded-lg cosmic-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 cosmic-glow">
                Join Our Alliance Program
              </h3>
              <p className="text-muted-foreground mb-6">
                Create or join an alliance of players to establish your presence in the cosmos.
                Alliances get special benefits, including:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full nebula-gradient flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Alliance Space Stations</h4>
                    <p className="text-sm text-muted-foreground">Build and customize shared headquarters</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full nebula-gradient flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Resource Sharing</h4>
                    <p className="text-sm text-muted-foreground">Pool discoveries and resources with your team</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full nebula-gradient flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Alliance-Only Events</h4>
                    <p className="text-sm text-muted-foreground">Participate in exclusive large-scale missions</p>
                  </div>
                </li>
              </ul>
              <Button className="nebula-gradient">Learn More</Button>
            </div>

            <div className="relative h-[250px] md:h-[300px] rounded-lg overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="https://static.vecteezy.com/system/resources/previews/027/576/316/non_2x/space-station-on-planet-earth-futuristic-space-station-3d-rendering-a-space-station-orbiting-a-planet-with-a-digital-wave-advanced-technology-and-holographic-displays-ai-generated-free-photo.jpg"
                  alt="Alliance Space Station"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
