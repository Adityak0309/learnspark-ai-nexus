
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const { clientX, clientY } = e;
      const rect = glowRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      glowRef.current.style.setProperty("--x", `${x}px`);
      glowRef.current.style.setProperty("--y", `${y}px`);
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-24 md:pt-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-learnspark-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-learnspark-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-learnspark-primary/10 text-learnspark-primary text-sm font-medium mb-6">
                The Future of STEM Education
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-learnspark-primary to-learnspark-highlight bg-clip-text text-transparent">
                AI-Powered
              </span>{" "}
              Personalized Learning for STEM Students
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              LearnSpark uses advanced AI to identify learning gaps, adapt to your pace, and create 
              personalized learning paths in mathematics, science, and technology.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/signup">
                <Button className="bg-learnspark-primary hover:bg-learnspark-primary/90 text-white px-8 py-6 text-lg">
                  Get Started Now
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" className="px-8 py-6 text-lg">
                  Explore Features
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-xs font-medium">U{i}</span>
                  </div>
                ))}
              </div>
              <div className="text-gray-700 text-sm font-medium">
                Joined by 1,000+ students in the last month
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div 
              ref={glowRef}
              className="relative rounded-2xl bg-white border p-4 shadow-xl overflow-hidden"
              style={{
                backgroundImage: "radial-gradient(circle at var(--x, 0) var(--y, 0), rgba(99, 102, 241, 0.15) 0%, rgba(255, 255, 255, 0) 60%)",
              }}
            >
              <div className="rounded-lg overflow-hidden border shadow-sm">
                <div className="bg-gray-100 p-2 flex justify-between items-center">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="h-4 w-32 bg-gray-200 rounded-md"></div>
                </div>
                
                <div className="bg-white p-6">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-learnspark-primary/10 rounded-full flex items-center justify-center text-learnspark-primary font-bold">
                          M
                        </div>
                        <span className="font-medium">Mathematics</span>
                      </div>
                      <div className="bg-green-100 text-green-800 font-medium text-xs px-2.5 py-1 rounded-full">
                        83% Complete
                      </div>
                    </div>
                    
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-learnspark-primary to-learnspark-highlight h-full rounded-full" style={{ width: '83%' }}></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-start gap-2">
                        <div className="mt-1 w-4 h-4 text-learnspark-success flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">Algebra</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="mt-1 w-4 h-4 text-learnspark-success flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">Geometry</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="mt-1 w-4 h-4 text-learnspark-accent flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-sm">Statistics</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="mt-1 w-4 h-4 text-gray-300 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-500">Calculus</span>
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t">
                      <div className="text-sm font-medium text-gray-700 mb-2">Next concept to learn:</div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Quadratic Equations</span>
                        <Button size="sm" variant="ghost" className="text-xs text-learnspark-primary hover:text-learnspark-primary/90">
                          Start Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 animate-float">
              <div className="absolute top-12 -right-6 w-20 h-20 bg-pink-100 rounded-lg rotate-12 animate-float"></div>
              <div className="absolute bottom-12 -left-6 w-16 h-16 bg-blue-100 rounded-lg -rotate-12 animate-float"></div>
              <div className="absolute top-6 left-20 w-10 h-10 bg-yellow-100 rounded-full animate-float"></div>
              <div className="absolute -bottom-2 right-20 w-12 h-12 bg-green-100 rounded-full animate-float"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;
