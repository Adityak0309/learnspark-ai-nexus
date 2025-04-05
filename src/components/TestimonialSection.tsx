
import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    content: "LearnSpark has completely transformed my approach to learning math. The personalized path identified exactly where I was struggling and helped me overcome those challenges.",
    author: "Emily Johnson",
    role: "8th Grade Student",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    content: "As a parent, I'm impressed by how LearnSpark adapts to my child's learning style. Their grades in science have improved significantly in just two months!",
    author: "Michael Rodriguez",
    role: "Parent",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    content: "The collaborative challenges make learning fun! I've connected with other students who enjoy physics as much as I do, and we solve problems together.",
    author: "Tyler Washington",
    role: "11th Grade Student",
    avatar: "https://i.pravatar.cc/150?img=59",
  },
  {
    content: "Teaching with LearnSpark has allowed me to provide more individualized attention to students who need it, while the platform keeps advanced students engaged.",
    author: "Dr. Sarah Chen",
    role: "Science Teacher",
    avatar: "https://i.pravatar.cc/150?img=44",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-learnspark-accent/10 text-learnspark-accent text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Success Stories
          </motion.span>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What our students and teachers are saying
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of students who have improved their STEM skills with LearnSpark's personalized learning approach.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-learnspark-primary">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Separator className="mb-10 max-w-xs mx-auto" />
          <h3 className="text-2xl font-bold mb-12">Trusted by schools across the country</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="font-semibold text-gray-500">School {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
