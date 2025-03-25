"use client";

import { motion } from "framer-motion";
import { FaWindows, FaApple, FaPlaystation, FaXbox, FaSteam, FaGamepad, FaDownload } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const platforms = [
  {
    name: "PC",
    icon: <FaWindows className="text-xl" />,
    requirements: {
      minimum: [
        { label: "OS", value: "Windows 10 64-bit" },
        { label: "Processor", value: "Intel Core i5-8400 / AMD Ryzen 5 2600" },
        { label: "Memory", value: "16 GB RAM" },
        { label: "Graphics", value: "NVIDIA GTX 1060 6GB / AMD RX 580 8GB" },
        { label: "DirectX", value: "Version 12" },
        { label: "Storage", value: "70 GB available space" },
        { label: "Network", value: "Broadband Internet connection" }
      ],
      recommended: [
        { label: "OS", value: "Windows 10/11 64-bit" },
        { label: "Processor", value: "Intel Core i7-10700K / AMD Ryzen 7 5800X" },
        { label: "Memory", value: "32 GB RAM" },
        { label: "Graphics", value: "NVIDIA RTX 3070 / AMD RX 6800 XT" },
        { label: "DirectX", value: "Version 12" },
        { label: "Storage", value: "70 GB SSD" },
        { label: "Network", value: "Broadband Internet connection" }
      ]
    }
  },
  {
    name: "Mac",
    icon: <FaApple className="text-xl" />,
    requirements: {
      minimum: [
        { label: "OS", value: "macOS 12.0 or later" },
        { label: "Processor", value: "Apple M1 / Intel Core i7 or better" },
        { label: "Memory", value: "16 GB RAM" },
        { label: "Graphics", value: "Apple M1 integrated / AMD Radeon Pro 5500M" },
        { label: "Storage", value: "70 GB available space" },
        { label: "Network", value: "Broadband Internet connection" }
      ],
      recommended: [
        { label: "OS", value: "macOS 13.0 or later" },
        { label: "Processor", value: "Apple M2 Pro / Intel Core i9" },
        { label: "Memory", value: "32 GB RAM" },
        { label: "Graphics", value: "Apple M2 Pro integrated / AMD Radeon Pro 6700M" },
        { label: "Storage", value: "70 GB SSD" },
        { label: "Network", value: "Broadband Internet connection" }
      ]
    }
  },
  {
    name: "PlayStation 5",
    icon: <FaPlaystation className="text-xl" />,
    requirements: {
      standard: [
        { label: "Console", value: "PlayStation 5" },
        { label: "Storage", value: "70 GB available space" },
        { label: "Network", value: "PlayStation Network account and broadband internet" },
        { label: "Resolution", value: "4K HDR supported" }
      ]
    }
  },
  {
    name: "Xbox Series X|S",
    icon: <FaXbox className="text-xl" />,
    requirements: {
      standard: [
        { label: "Console", value: "Xbox Series X|S" },
        { label: "Storage", value: "70 GB available space" },
        { label: "Network", value: "Xbox Live account and broadband internet" },
        { label: "Resolution", value: "4K HDR supported on Series X, 1440p on Series S" }
      ]
    }
  }
];

export default function DownloadSection() {
  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 star-field opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary mb-4 inline-block">
            GET STARTED
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 cosmic-glow">
            Download & Play
          </h2>
          <p className="text-lg text-muted-foreground">
            Nebula Odyssey is available on multiple platforms. Download now and start your cosmic adventure.
          </p>
        </div>

        <div className="glass-panel p-8 rounded-lg cosmic-border mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
            <Button className="flex flex-col items-center justify-center py-6 cosmic-border bg-background hover:bg-card">
              <FaWindows className="text-3xl mb-2 text-primary" />
              <span>Windows</span>
            </Button>
            <Button className="flex flex-col items-center justify-center py-6 cosmic-border bg-background hover:bg-card">
              <FaApple className="text-3xl mb-2 text-primary" />
              <span>macOS</span>
            </Button>
            <Button className="flex flex-col items-center justify-center py-6 cosmic-border bg-background hover:bg-card">
              <FaPlaystation className="text-3xl mb-2 text-primary" />
              <span>PlayStation 5</span>
            </Button>
            <Button className="flex flex-col items-center justify-center py-6 cosmic-border bg-background hover:bg-card">
              <FaXbox className="text-3xl mb-2 text-primary" />
              <span>Xbox Series X|S</span>
            </Button>
            <Button className="flex flex-col items-center justify-center py-6 cosmic-border bg-background hover:bg-card">
              <FaSteam className="text-3xl mb-2 text-primary" />
              <span>Steam</span>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
            <Button className="nebula-gradient text-lg h-12 px-8" size="lg">
              <FaDownload className="mr-2" /> Download Now
            </Button>
            <Button variant="outline" className="cosmic-border text-lg h-12 px-8" size="lg">
              <FaGamepad className="mr-2" /> View All Platforms
            </Button>
          </div>
        </div>

        <div className="space-y-8 mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 cosmic-glow">System Requirements</h3>

          <Tabs defaultValue="PC" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="glass-panel">
                {platforms.map((platform) => (
                  <TabsTrigger key={platform.name} value={platform.name} className="flex items-center gap-2">
                    {platform.icon} {platform.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {platforms.map((platform) => (
              <TabsContent key={platform.name} value={platform.name} className="space-y-8">
                {platform.requirements.minimum && platform.requirements.recommended ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass-panel p-6 rounded-lg cosmic-border">
                      <h4 className="text-lg font-medium border-b border-border pb-3 mb-4">
                        Minimum Requirements
                      </h4>
                      <ul className="space-y-3">
                        {platform.requirements.minimum.map((req, index) => (
                          <li key={index} className="flex">
                            <span className="font-medium w-28">{req.label}:</span>
                            <span className="text-muted-foreground">{req.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="glass-panel p-6 rounded-lg cosmic-border">
                      <h4 className="text-lg font-medium border-b border-border pb-3 mb-4">
                        Recommended Requirements
                      </h4>
                      <ul className="space-y-3">
                        {platform.requirements.recommended.map((req, index) => (
                          <li key={index} className="flex">
                            <span className="font-medium w-28">{req.label}:</span>
                            <span className="text-muted-foreground">{req.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="glass-panel p-6 rounded-lg cosmic-border">
                    <h4 className="text-lg font-medium border-b border-border pb-3 mb-4">
                      Console Requirements
                    </h4>
                    <ul className="space-y-3">
                      {platform.requirements.standard.map((req, index) => (
                        <li key={index} className="flex">
                          <span className="font-medium w-28">{req.label}:</span>
                          <span className="text-muted-foreground">{req.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-10 glass-panel p-6 rounded-lg cosmic-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full nebula-gradient flex items-center justify-center">
                <span className="text-white font-bold text-xl">!</span>
              </div>
              <h3 className="text-xl font-bold">Important Notes</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>An internet connection is required for installation and updates.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Cross-play functionality is available across all platforms.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>A Nebula Odyssey account is required for cross-platform progression.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Virtual Reality features require compatible VR headsets.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
