
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const subjects = [
  {
    id: "math",
    title: "Mathematics",
    description: "Master algebra, geometry, statistics, calculus and more with interactive lessons and exercises.",
    background: "bg-gradient-to-br from-blue-500/90 to-purple-600/90",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    topics: ["Algebra", "Geometry", "Statistics", "Calculus", "Trigonometry"],
  },
  {
    id: "science",
    title: "Science",
    description: "Explore biology, chemistry, physics, and earth science through experiments and simulations.",
    background: "bg-gradient-to-br from-green-500/90 to-teal-600/90",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    topics: ["Biology", "Chemistry", "Physics", "Earth Science", "Astronomy"],
  },
  {
    id: "technology",
    title: "Technology",
    description: "Learn programming, computer science, and digital literacy skills needed in today's world.",
    background: "bg-gradient-to-br from-orange-500/90 to-red-600/90",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    topics: ["Programming", "Computer Science", "Digital Literacy", "Web Development", "Data Analysis"],
  },
  {
    id: "engineering",
    title: "Engineering",
    description: "Design, build, and test solutions to real-world problems with engineering principles.",
    background: "bg-gradient-to-br from-cyan-500/90 to-blue-600/90",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    topics: ["Mechanical", "Electrical", "Civil", "Robotics", "Environmental"],
  },
];

const SubjectsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-learnspark-highlight/10 text-learnspark-highlight text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            STEM Subjects
          </motion.span>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our comprehensive STEM curriculum
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Dive into a world of interactive learning with curriculum designed by experts
            and personalized for you by our AI.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.id}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative hover-scale"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className={`${subject.background} p-8 text-white h-full`}>
                <div className="flex justify-between mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    {subject.icon}
                  </div>
                  <Button
                    variant="ghost"
                    className="bg-white/20 hover:bg-white/30 text-white rounded-full"
                    asChild
                  >
                    <Link to={`/subjects/${subject.id}`}>
                      <span>Explore Subject</span>
                    </Link>
                  </Button>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{subject.title}</h3>
                <p className="text-white/80 mb-6">{subject.description}</p>
                
                <div>
                  <p className="text-white/80 mb-2 text-sm font-medium">Popular Topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {subject.topics.map((topic, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/subjects">
            <Button className="bg-learnspark-primary hover:bg-learnspark-primary/90">
              View All Subjects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;
