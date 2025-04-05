
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, BookOpen, Users, Brain, Target, BarChart, Award } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Powered Assessment",
    description: "Our intelligent system identifies learning gaps and adapts to your unique needs.",
    link: "/features/ai-assessment",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Personalized Learning Paths",
    description: "Custom learning journeys created just for you across all STEM subjects.",
    link: "/features/learning-paths",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Real-Time Progress Tracking",
    description: "Beautiful visualizations to monitor your learning achievements.",
    link: "/features/progress-tracking",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Adaptive Difficulty",
    description: "Content that automatically adjusts to challenge you at the perfect level.",
    link: "/features/adaptive-difficulty",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaborative Learning",
    description: "Connect with peers to solve problems together and accelerate your learning.",
    link: "/features/collaborative-learning",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Gamified Challenges",
    description: "Earn badges, points, and rewards as you master new concepts.",
    link: "/features/gamification",
    color: "bg-teal-100 text-teal-600",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-64 -right-64 w-96 h-96 bg-learnspark-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-32 -left-32 w-64 h-64 bg-learnspark-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-learnspark-secondary/10 text-learnspark-secondary text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powerful Features
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to excel in STEM
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            LearnSpark combines cutting-edge AI technology with proven educational methods to 
            deliver a truly personalized learning experience.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border p-6 hover:shadow-lg transition-shadow hover-scale"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-5`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-5">{feature.description}</p>
              
              <Link to={feature.link} className="inline-flex items-center text-learnspark-primary font-medium hover:underline">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
