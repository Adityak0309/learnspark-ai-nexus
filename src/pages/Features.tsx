
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle2, Brain, Target, Gauge, Bot, BookOpen, Users, BarChart2, Award, Clock } from 'lucide-react';

const FeatureGroup = ({ title, description, features }: { title: string; description: string; features: { title: string; description: string; icon: React.ReactNode }[] }) => {
  return (
    <div className="mb-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-4 w-12 h-12 bg-learnspark-primary/10 text-learnspark-primary rounded-lg flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Features = () => {
  const aiFeatures = [
    {
      title: "Smart Gap Analysis",
      description: "Our AI identifies knowledge gaps by analyzing your responses and performance patterns.",
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: "Personalized Recommendations",
      description: "Get content suggestions tailored to your learning style and current knowledge level.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Adaptive Difficulty",
      description: "Questions and exercises automatically adjust to challenge you at the optimal level.",
      icon: <Gauge className="h-6 w-6" />
    },
    {
      title: "AI Learning Assistant",
      description: "Chat with our AI tutor to get help when you're stuck on difficult concepts.",
      icon: <Bot className="h-6 w-6" />
    }
  ];
  
  const contentFeatures = [
    {
      title: "Interactive Lessons",
      description: "Engage with multimedia content that makes complex concepts easier to understand.",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "Real-World Applications",
      description: "See how abstract concepts apply to real-life scenarios and future careers.",
      icon: <CheckCircle2 className="h-6 w-6" />
    },
    {
      title: "Collaborative Projects",
      description: "Work with peers on group challenges that develop teamwork and communication skills.",
      icon: <Users className="h-6 w-6" />
    }
  ];
  
  const progressFeatures = [
    {
      title: "Comprehensive Dashboard",
      description: "Get a clear overview of your progress across all subjects in one place.",
      icon: <BarChart2 className="h-6 w-6" />
    },
    {
      title: "Skill Mastery Tracking",
      description: "See exactly which concepts you've mastered and which need more attention.",
      icon: <CheckCircle2 className="h-6 w-6" />
    },
    {
      title: "Badges and Rewards",
      description: "Earn achievements as you progress through your learning journey.",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Time Management",
      description: "Track your study time and set goals to maintain consistent learning habits.",
      icon: <Clock className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Features that power your <span className="bg-gradient-to-r from-learnspark-primary to-learnspark-highlight bg-clip-text text-transparent">STEM learning</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Discover how LearnSpark uses cutting-edge technology to create a personalized 
                learning experience that helps students excel in STEM subjects.
              </motion.p>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FeatureGroup 
              title="AI-Powered Learning"
              description="Our intelligent system adapts to your unique learning needs, providing personalized guidance every step of the way."
              features={aiFeatures}
            />
            
            <FeatureGroup 
              title="Engaging Content"
              description="Learn through interactive lessons, real-world applications, and collaborative projects that make STEM subjects come alive."
              features={contentFeatures}
            />
            
            <FeatureGroup 
              title="Progress Tracking"
              description="Visualize your learning journey with comprehensive analytics and achievement tracking to stay motivated."
              features={progressFeatures}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
