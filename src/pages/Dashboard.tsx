
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DashboardStatCard from '@/components/DashboardStatCard';
import ProgressChart from '@/components/ProgressChart';
import RecommendedLessons from '@/components/RecommendedLessons';
import { 
  BookOpen, 
  Award, 
  Clock, 
  Users,
  Star,
  BarChart2,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const mockProgressData = [
  { date: 'Week 1', score: 65 },
  { date: 'Week 2', score: 72 },
  { date: 'Week 3', score: 68 },
  { date: 'Week 4', score: 75 },
  { date: 'Week 5', score: 82 },
  { date: 'Week 6', score: 79 },
  { date: 'Week 7', score: 85 },
  { date: 'Week 8', score: 89 },
];

const mockLessons = [
  {
    id: '1',
    title: 'Introduction to Algebra',
    subject: 'Mathematics',
    topic: 'Algebra',
    difficulty: 'easy' as const,
    duration: 30,
    collaborators: 25,
    progress: 75,
  },
  {
    id: '2',
    title: 'Newton\'s Laws of Motion',
    subject: 'Science',
    topic: 'Physics',
    difficulty: 'medium' as const,
    duration: 45,
    collaborators: 18,
    progress: 30,
  },
  {
    id: '3',
    title: 'Introduction to Coding',
    subject: 'Technology',
    topic: 'Programming',
    difficulty: 'easy' as const,
    duration: 40,
    collaborators: 32,
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-gray-600">Welcome back, Student! Here's your learning summary.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button asChild>
                <Link to="/assessment">
                  Take New Assessment
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <DashboardStatCard
              title="Learning Streak"
              value="7 days"
              description="Keep it up!"
              change={{ value: 16, positive: true }}
              icon={<Star className="h-4 w-4" />}
              color="bg-learnspark-primary"
            />
            <DashboardStatCard
              title="Completed Lessons"
              value="24"
              description="This month"
              change={{ value: 8, positive: true }}
              icon={<CheckCircle2 className="h-4 w-4" />}
              color="bg-learnspark-secondary"
            />
            <DashboardStatCard
              title="Time Spent"
              value="12h 30m"
              description="This week"
              change={{ value: 5, positive: true }}
              icon={<Clock className="h-4 w-4" />}
              color="bg-learnspark-accent"
            />
            <DashboardStatCard
              title="Badges Earned"
              value="9"
              description="Total"
              change={{ value: 2, positive: true }}
              icon={<Award className="h-4 w-4" />}
              color="bg-learnspark-highlight"
            />
          </div>
          
          <Tabs defaultValue="progress" className="mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
              <TabsTrigger value="progress">Progress Overview</TabsTrigger>
              <TabsTrigger value="subjects">Subject Breakdown</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
              <TabsTrigger value="badges">Badges</TabsTrigger>
            </TabsList>
            
            <TabsContent value="progress" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProgressChart 
                  title="Overall Learning Progress" 
                  description="Your performance over time" 
                  data={mockProgressData} 
                  color="#6366f1"
                />
                
                <Card className="h-[350px]">
                  <CardHeader>
                    <CardTitle>Learning Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="p-4 border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-learnspark-primary/10 flex items-center justify-center">
                            <BookOpen className="h-5 w-5 text-learnspark-primary" />
                          </div>
                          <div>
                            <div className="font-medium">Completed "Introduction to Calculus"</div>
                            <div className="text-sm text-gray-500">Mathematics</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">2 hours ago</div>
                      </div>
                    </div>
                    
                    <div className="p-4 border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Award className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium">Earned "Physics Explorer" badge</div>
                            <div className="text-sm text-gray-500">Science</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">1 day ago</div>
                      </div>
                    </div>
                    
                    <div className="p-4 border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                            <Users className="h-5 w-5 text-orange-600" />
                          </div>
                          <div>
                            <div className="font-medium">Joined "Coding Challenge" group</div>
                            <div className="text-sm text-gray-500">Technology</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">2 days ago</div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <BarChart2 className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium">Completed weekly assessment</div>
                            <div className="text-sm text-gray-500">All subjects</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">3 days ago</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="subjects">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">Mathematics</CardTitle>
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <span className="font-medium text-blue-600">M</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span className="font-medium">83%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: '83%' }}></div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <div className="text-sm font-medium mb-2">Topics</div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                            Algebra
                          </span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                            Geometry
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                            Calculus
                          </span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                            Statistics
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">Science</CardTitle>
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                        <span className="font-medium text-green-600">S</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span className="font-medium">61%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: '61%' }}></div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <div className="text-sm font-medium mb-2">Topics</div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">
                            Biology
                          </span>
                          <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">
                            Chemistry
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                            Physics
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                            Earth Science
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">Technology</CardTitle>
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                        <span className="font-medium text-orange-600">T</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span className="font-medium">42%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500 rounded-full" style={{ width: '42%' }}></div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <div className="text-sm font-medium mb-2">Topics</div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium">
                            Programming
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                            Web Dev
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                            Data Analysis
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="challenges">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Weekly Math Challenge</CardTitle>
                    <div className="text-sm text-orange-600 font-medium">
                      Ends in 2 days
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Solve 5 advanced algebra problems and compete with peers.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                          >
                            <span className="text-xs font-medium">P{i}</span>
                          </div>
                        ))}
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-learnspark-primary text-white flex items-center justify-center overflow-hidden">
                          <span className="text-xs font-medium">+12</span>
                        </div>
                      </div>
                      <Button size="sm">
                        Join Challenge
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Science Fair Prep</CardTitle>
                    <div className="text-sm text-green-600 font-medium">
                      Active Challenge
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Design a science project with a team of 3 students.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">Progress:</span> 2/5 milestones
                      </div>
                      <Button size="sm" variant="outline">
                        Continue
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Coding Competition</CardTitle>
                    <div className="text-sm text-purple-600 font-medium">
                      Coming soon
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Build a simple app in 48 hours with provided resources.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        Starts in 5 days
                      </div>
                      <Button size="sm" variant="outline">
                        Set Reminder
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="badges">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[
                  { name: "Math Master", earned: true, color: "bg-blue-100 text-blue-600" },
                  { name: "Science Explorer", earned: true, color: "bg-green-100 text-green-600" },
                  { name: "Coding Rookie", earned: true, color: "bg-orange-100 text-orange-600" },
                  { name: "Geometry Genius", earned: true, color: "bg-purple-100 text-purple-600" },
                  { name: "Biology Buff", earned: true, color: "bg-teal-100 text-teal-600" },
                  { name: "Physics Phenom", earned: false, color: "bg-gray-100 text-gray-400" },
                  { name: "Chemistry Champion", earned: false, color: "bg-gray-100 text-gray-400" },
                  { name: "Algorithm Ace", earned: false, color: "bg-gray-100 text-gray-400" },
                  { name: "Data Detective", earned: false, color: "bg-gray-100 text-gray-400" },
                  { name: "Perfect Attendance", earned: true, color: "bg-yellow-100 text-yellow-600" },
                ].map((badge, index) => (
                  <Card key={index} className={`${badge.earned ? 'hover-scale' : 'opacity-60'}`}>
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className={`w-16 h-16 rounded-full ${badge.color} mb-4 flex items-center justify-center`}>
                        <Award className="h-8 w-8" />
                      </div>
                      <h4 className="font-medium text-sm mb-1">{badge.name}</h4>
                      <span className={`text-xs ${badge.earned ? 'text-green-600' : 'text-gray-500'}`}>
                        {badge.earned ? 'Earned' : 'Locked'}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <RecommendedLessons lessons={mockLessons} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
