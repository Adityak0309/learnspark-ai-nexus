
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SubjectTopic {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  lessons: number;
  completionRate?: number;
}

interface SubjectCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  topics: SubjectTopic[];
}

const subjects: SubjectCategory[] = [
  {
    id: 'math',
    title: 'Mathematics',
    description: 'Develop strong mathematical foundations from algebra to calculus with interactive lessons and problem-solving exercises.',
    icon: <span className="text-2xl font-bold">M</span>,
    color: 'bg-gradient-to-br from-blue-500 to-purple-600',
    topics: [
      {
        id: 'algebra',
        title: 'Algebra',
        description: 'Learn equations, functions, and algebraic structures',
        difficulty: 'beginner',
        lessons: 28,
        completionRate: 85,
      },
      {
        id: 'geometry',
        title: 'Geometry',
        description: 'Explore shapes, sizes, and properties of space',
        difficulty: 'beginner',
        lessons: 24,
        completionRate: 62,
      },
      {
        id: 'statistics',
        title: 'Statistics & Probability',
        description: 'Analyze data and understand randomness',
        difficulty: 'intermediate',
        lessons: 20,
        completionRate: 45,
      },
      {
        id: 'calculus',
        title: 'Calculus',
        description: 'Master derivatives, integrals, and applications',
        difficulty: 'advanced',
        lessons: 32,
        completionRate: 15,
      },
      {
        id: 'trigonometry',
        title: 'Trigonometry',
        description: 'Study angles and triangular relationships',
        difficulty: 'intermediate',
        lessons: 18,
        completionRate: 30,
      },
    ],
  },
  {
    id: 'science',
    title: 'Science',
    description: 'Explore the natural world through biology, chemistry, physics and earth science with experiments and interactive simulations.',
    icon: <span className="text-2xl font-bold">S</span>,
    color: 'bg-gradient-to-br from-green-500 to-teal-600',
    topics: [
      {
        id: 'biology',
        title: 'Biology',
        description: 'Study living organisms and their processes',
        difficulty: 'beginner',
        lessons: 30,
        completionRate: 70,
      },
      {
        id: 'chemistry',
        title: 'Chemistry',
        description: 'Understand matter, its properties, and changes',
        difficulty: 'intermediate',
        lessons: 26,
        completionRate: 45,
      },
      {
        id: 'physics',
        title: 'Physics',
        description: 'Discover the fundamental laws of nature',
        difficulty: 'advanced',
        lessons: 28,
        completionRate: 30,
      },
      {
        id: 'earth-science',
        title: 'Earth Science',
        description: 'Learn about Earth\'s systems and processes',
        difficulty: 'beginner',
        lessons: 22,
        completionRate: 50,
      },
      {
        id: 'astronomy',
        title: 'Astronomy',
        description: 'Explore the cosmos and celestial objects',
        difficulty: 'intermediate',
        lessons: 20,
        completionRate: 25,
      },
    ],
  },
  {
    id: 'technology',
    title: 'Technology',
    description: 'Build digital skills through programming, computer science, and digital literacy lessons with hands-on projects.',
    icon: <span className="text-2xl font-bold">T</span>,
    color: 'bg-gradient-to-br from-orange-500 to-red-600',
    topics: [
      {
        id: 'programming',
        title: 'Programming Fundamentals',
        description: 'Learn basic coding concepts and syntax',
        difficulty: 'beginner',
        lessons: 24,
        completionRate: 40,
      },
      {
        id: 'web-development',
        title: 'Web Development',
        description: 'Build websites with HTML, CSS, and JavaScript',
        difficulty: 'intermediate',
        lessons: 30,
        completionRate: 35,
      },
      {
        id: 'data-analysis',
        title: 'Data Analysis',
        description: 'Analyze and interpret data with tools',
        difficulty: 'intermediate',
        lessons: 22,
        completionRate: 20,
      },
      {
        id: 'computer-science',
        title: 'Computer Science',
        description: 'Study algorithms, data structures, and theory',
        difficulty: 'advanced',
        lessons: 28,
        completionRate: 15,
      },
      {
        id: 'digital-literacy',
        title: 'Digital Literacy',
        description: 'Master essential digital skills',
        difficulty: 'beginner',
        lessons: 18,
        completionRate: 60,
      },
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    description: 'Apply science and math to solve real-world problems through design challenges and engineering principles.',
    icon: <span className="text-2xl font-bold">E</span>,
    color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    topics: [
      {
        id: 'mechanical',
        title: 'Mechanical Engineering',
        description: 'Design and analyze mechanical systems',
        difficulty: 'intermediate',
        lessons: 26,
        completionRate: 30,
      },
      {
        id: 'electrical',
        title: 'Electrical Engineering',
        description: 'Work with circuits and electrical systems',
        difficulty: 'intermediate',
        lessons: 24,
        completionRate: 25,
      },
      {
        id: 'robotics',
        title: 'Robotics',
        description: 'Build and program autonomous systems',
        difficulty: 'advanced',
        lessons: 22,
        completionRate: 15,
      },
      {
        id: 'civil',
        title: 'Civil Engineering',
        description: 'Design structures and infrastructure',
        difficulty: 'intermediate',
        lessons: 20,
        completionRate: 20,
      },
      {
        id: 'environmental',
        title: 'Environmental Engineering',
        description: 'Develop sustainable solutions',
        difficulty: 'intermediate',
        lessons: 18,
        completionRate: 10,
      },
    ],
  },
];

const DifficultyBadge = ({ difficulty }: { difficulty: string }) => {
  const colors = {
    beginner: 'bg-green-100 text-green-700',
    intermediate: 'bg-yellow-100 text-yellow-700',
    advanced: 'bg-red-100 text-red-700',
  };
  
  return (
    <span className={`${colors[difficulty as keyof typeof colors]} px-2 py-1 rounded-full text-xs font-medium`}>
      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
    </span>
  );
};

const SubjectCard = ({ subject }: { subject: SubjectCategory }) => {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full hover:shadow-md transition-shadow">
        <CardHeader className={`${subject.color} text-white rounded-t-xl`}>
          <div className="flex justify-between">
            <div>
              <CardTitle className="text-2xl mb-2">{subject.title}</CardTitle>
              <CardDescription className="text-white/90">{subject.description}</CardDescription>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              {subject.icon}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {subject.topics.slice(0, 3).map((topic) => (
              <div key={topic.id} className="flex items-start justify-between">
                <div>
                  <div className="font-medium">{topic.title}</div>
                  <div className="text-sm text-gray-500">{topic.lessons} lessons</div>
                </div>
                <DifficultyBadge difficulty={topic.difficulty} />
              </div>
            ))}
            
            {subject.topics.length > 3 && (
              <div className="text-center pt-2">
                <Button variant="ghost" size="sm" className="text-learnspark-primary" asChild>
                  <Link to={`/subjects/${subject.id}`}>
                    View {subject.topics.length - 3} more topics <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TopicCard = ({ topic }: { topic: SubjectTopic }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="hover:shadow-md transition-shadow hover-scale">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg">{topic.title}</CardTitle>
            <DifficultyBadge difficulty={topic.difficulty} />
          </div>
          <CardDescription>{topic.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-500">{topic.lessons} lessons</div>
            {topic.completionRate !== undefined && (
              <div className="text-sm font-medium">
                {topic.completionRate}% Complete
              </div>
            )}
          </div>
          
          {topic.completionRate !== undefined && (
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-learnspark-primary rounded-full"
                style={{ width: `${topic.completionRate}%` }}
              ></div>
            </div>
          )}
          
          <Button asChild>
            <Link to={`/topics/${topic.id}`}>
              {topic.completionRate ? "Continue Learning" : "Start Learning"}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Subjects = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  
  const filterTopicsByLevel = (topics: SubjectTopic[]) => {
    if (selectedLevel === 'all') {
      return topics;
    }
    return topics.filter(topic => topic.difficulty === selectedLevel);
  };

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
                STEM Subjects Curriculum
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Explore our comprehensive collection of STEM subjects and topics, 
                designed to build your knowledge from foundational concepts to advanced applications.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {subjects.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-8">
              <h2 className="text-3xl font-bold mb-6">Explore Topics by Subject</h2>
              <p className="text-gray-600 mb-8">
                Drill down into specific areas within each STEM subject. Filter by difficulty 
                level to find topics that match your current knowledge and skills.
              </p>
              
              <div className="mb-8">
                <Tabs defaultValue="math" className="w-full">
                  <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
                    <TabsTrigger value="math">Mathematics</TabsTrigger>
                    <TabsTrigger value="science">Science</TabsTrigger>
                    <TabsTrigger value="technology">Technology</TabsTrigger>
                    <TabsTrigger value="engineering">Engineering</TabsTrigger>
                  </TabsList>
                  
                  <div className="mb-6 flex justify-end">
                    <div className="inline-flex bg-gray-100 rounded-lg p-1">
                      <Button 
                        variant={selectedLevel === 'all' ? 'default' : 'ghost'} 
                        size="sm" 
                        onClick={() => setSelectedLevel('all')}
                        className="rounded-md"
                      >
                        All Levels
                      </Button>
                      <Button 
                        variant={selectedLevel === 'beginner' ? 'default' : 'ghost'} 
                        size="sm" 
                        onClick={() => setSelectedLevel('beginner')}
                        className="rounded-md"
                      >
                        Beginner
                      </Button>
                      <Button 
                        variant={selectedLevel === 'intermediate' ? 'default' : 'ghost'} 
                        size="sm" 
                        onClick={() => setSelectedLevel('intermediate')}
                        className="rounded-md"
                      >
                        Intermediate
                      </Button>
                      <Button 
                        variant={selectedLevel === 'advanced' ? 'default' : 'ghost'} 
                        size="sm" 
                        onClick={() => setSelectedLevel('advanced')}
                        className="rounded-md"
                      >
                        Advanced
                      </Button>
                    </div>
                  </div>
                  
                  {subjects.map((subject) => (
                    <TabsContent key={subject.id} value={subject.id}>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filterTopicsByLevel(subject.topics).map((topic) => (
                          <TopicCard key={topic.id} topic={topic} />
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Subjects;
