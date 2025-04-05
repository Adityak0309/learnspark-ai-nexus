
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Take the diagnostic assessment",
    description: "Our AI analyzes your current knowledge and identifies learning gaps across STEM subjects.",
    color: "from-blue-500 to-purple-500",
  },
  {
    number: "02",
    title: "Get your personalized learning path",
    description: "Based on your assessment, we create a tailored curriculum just for you.",
    color: "from-green-500 to-teal-500",
  },
  {
    number: "03",
    title: "Learn at your own pace",
    description: "Follow interactive lessons that adapt in real-time to your progress and learning style.",
    color: "from-orange-500 to-red-500",
  },
  {
    number: "04",
    title: "Practice with peers",
    description: "Join collaborative challenges and solve problems with other students to reinforce your learning.",
    color: "from-pink-500 to-rose-500",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 right-0 w-64 h-64 bg-learnspark-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-12 left-12 w-64 h-64 bg-learnspark-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-learnspark-primary/10 text-learnspark-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Your journey to STEM mastery
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our AI-powered platform adapts to your individual needs and learning style to help you 
            master STEM subjects efficiently and effectively.
          </motion.p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-24 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>
          
          <div className="space-y-12 lg:space-y-24 relative">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}>
                <motion.div 
                  className="flex-1 order-2 lg:order-none"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`bg-gradient-to-r ${step.color} text-white rounded-xl p-8 shadow-lg`}>
                    <div className="text-5xl font-bold mb-4 opacity-50">{step.number}</div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-white/80">{step.description}</p>
                  </div>
                </motion.div>
                
                <div className="hidden lg:flex justify-center">
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-learnspark-primary text-white flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                
                <motion.div 
                  className="flex-1 order-1 lg:order-none"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-48 bg-gray-200 rounded-xl flex items-center justify-center">
                    <span className="text-gray-400 font-medium">Step {index + 1} Illustration</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
