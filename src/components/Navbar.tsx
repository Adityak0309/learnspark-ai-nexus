
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-learnspark-primary to-learnspark-highlight rounded-lg w-10 h-10 flex items-center justify-center">
            <span className="text-white font-bold text-xl">LS</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-learnspark-primary to-learnspark-highlight bg-clip-text text-transparent">
            LearnSpark
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/about" className="story-link font-medium text-gray-700 hover:text-learnspark-primary transition-colors">
            About
          </Link>
          <Link to="/features" className="story-link font-medium text-gray-700 hover:text-learnspark-primary transition-colors">
            Features
          </Link>
          <Link to="/subjects" className="story-link font-medium text-gray-700 hover:text-learnspark-primary transition-colors">
            Subjects
          </Link>
          <Link to="/dashboard" className="story-link font-medium text-gray-700 hover:text-learnspark-primary transition-colors">
            Dashboard
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline" className="hover-scale">
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-learnspark-primary hover:bg-learnspark-primary/90 hover-scale">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
