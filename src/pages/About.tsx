
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Education Officer",
    bio: "Former high school science teacher with a Ph.D. in Education Technology from Stanford.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Marcus Wilson",
    role: "AI Research Lead",
    bio: "ML specialist with 10+ years experience developing educational AI systems.",
    avatar: "https://i.pravatar.cc/150?img=60", 
  },
  {
    name: "Priya Sharma",
    role: "Content Director",
    bio: "Math curriculum expert who previously developed programs for Khan Academy.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "James Rodriguez",
    role: "UX Design Lead",
    bio: "Specializes in creating intuitive learning experiences for young students.",
    avatar: "https://i.pravatar.cc/150?img=59",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <motion.h1 
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About LearnSpark
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                We're on a mission to transform STEM education through personalized, 
                AI-powered learning experiences that inspire the next generation of innovators.
              </motion.p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                <motion.div 
                  className="flex-1 order-2 md:order-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                  <p className="text-gray-700 mb-4">
                    LearnSpark was born from a simple observation: traditional one-size-fits-all 
                    education isn't working for many students, especially in STEM subjects where 
                    concepts build upon each other.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Founded in 2023 by a team of educators, technologists, and learning scientists, 
                    we set out to create a platform that could identify each student's unique learning 
                    gaps and create personalized paths to mastery.
                  </p>
                  <p className="text-gray-700">
                    Today, we're helping thousands of students in grades 6-12 build confidence and 
                    skills in mathematics, science, technology, and engineering through our 
                    adaptive learning platform.
                  </p>
                </motion.div>
                <motion.div 
                  className="flex-1 order-1 md:order-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    <div className="aspect-video bg-gray-200 rounded-xl shadow-md"></div>
                    <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-learnspark-primary rounded-lg -rotate-6"></div>
                    <div className="absolute -top-5 -left-5 w-16 h-16 bg-learnspark-accent rounded-lg rotate-12"></div>
                  </div>
                </motion.div>
              </div>
              
              <div className="mb-16">
                <motion.h2 
                  className="text-3xl font-bold mb-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Our Mission
                </motion.h2>
                <motion.div 
                  className="bg-gradient-to-r from-learnspark-primary to-learnspark-highlight p-8 rounded-xl text-white text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <p className="text-xl font-medium mb-4">
                    To empower every student to reach their full potential in STEM through personalized learning 
                    experiences that adapt to their unique needs, pace, and learning style.
                  </p>
                  <p className="text-lg">
                    We believe that with the right support, every student can develop the skills and 
                    confidence to succeed in STEM subjects and beyond.
                  </p>
                </motion.div>
              </div>
              
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {teamMembers.map((member, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-sm border text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                        <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                      <p className="text-learnspark-primary font-medium text-sm mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-6">Join Us on Our Journey</h2>
                <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                  We're just getting started on our mission to transform STEM education. 
                  Whether you're a student eager to learn, a teacher looking for better tools, 
                  or a school administrator seeking innovative solutions, we'd love to work with you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/signup">
                      Get Started Now
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
