
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, BookOpen, ChevronRight, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface Lesson {
  id: string;
  title: string;
  subject: string;
  topic: string;
  difficulty: "easy" | "medium" | "hard";
  duration: number;
  collaborators: number;
  progress?: number;
}

interface RecommendedLessonsProps {
  lessons: Lesson[];
}

const LessonCard = ({ lesson }: { lesson: Lesson }) => {
  const difficultyColor = {
    easy: "text-green-600 bg-green-100",
    medium: "text-orange-600 bg-orange-100",
    hard: "text-red-600 bg-red-100",
  };
  
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="text-lg">{lesson.title}</CardTitle>
            <CardDescription>{lesson.subject} • {lesson.topic}</CardDescription>
          </div>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${difficultyColor[lesson.difficulty]}`}>
            {lesson.difficulty.charAt(0).toUpperCase() + lesson.difficulty.slice(1)}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>{lesson.duration} min</span>
          </div>
          <div className="flex items-center">
            <Users className="mr-1 h-4 w-4" />
            <span>{lesson.collaborators} peers</span>
          </div>
        </div>
        
        {lesson.progress !== undefined && (
          <div className="mt-4 space-y-1">
            <div className="flex justify-between text-xs">
              <span className="font-medium">Progress</span>
              <span>{lesson.progress}%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-learnspark-primary to-learnspark-secondary rounded-full"
                style={{ width: `${lesson.progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full gap-2">
          <Link to={`/lessons/${lesson.id}`}>
            <BookOpen className="h-4 w-4" />
            {lesson.progress ? "Continue Learning" : "Start Learning"}
            <ChevronRight className="h-4 w-4 ml-auto" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const RecommendedLessons = ({ lessons }: RecommendedLessonsProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Recommended Lessons</h3>
        <Button variant="ghost" size="sm" asChild>
          <Link to="/lessons">View all</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedLessons;
