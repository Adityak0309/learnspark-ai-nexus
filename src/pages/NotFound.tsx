
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="relative mb-8 inline-block">
          <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-learnspark-primary to-learnspark-highlight bg-clip-text text-transparent">
            404
          </div>
          <div className="absolute -bottom-2 w-full h-2 bg-gradient-to-r from-learnspark-primary to-learnspark-highlight rounded-full"></div>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/">
              Return to Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/subjects">
              Explore Subjects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
