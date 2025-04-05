
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthForm from '@/components/AuthForm';

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 bg-gray-50">
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="hidden md:flex flex-col justify-center">
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-4">Begin your STEM learning journey</h1>
                <p className="text-gray-600">
                  Create an account to get personalized learning paths, track your progress,
                  and connect with peers for collaborative problem solving.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-learnspark-primary text-white flex items-center justify-center text-xs">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">Take the initial assessment</h3>
                    <p className="text-sm text-gray-500">Identify your strengths and areas for improvement</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-learnspark-primary text-white flex items-center justify-center text-xs">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">Get your personalized learning path</h3>
                    <p className="text-sm text-gray-500">AI-powered recommendations tailored to your needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-learnspark-primary text-white flex items-center justify-center text-xs">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">Start learning at your own pace</h3>
                    <p className="text-sm text-gray-500">Progress through interactive lessons and challenges</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <AuthForm type="signup" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
