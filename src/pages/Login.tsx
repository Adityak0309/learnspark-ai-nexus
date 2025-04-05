
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthForm from '@/components/AuthForm';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 bg-gray-50">
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="hidden md:flex flex-col justify-center">
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-4">Welcome back to LearnSpark</h1>
                <p className="text-gray-600">
                  Log in to continue your personalized learning journey and explore new STEM challenges.
                </p>
              </div>
              <div className="relative h-64 bg-gradient-to-br from-learnspark-primary to-learnspark-highlight rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-5xl font-bold mb-2">LS</div>
                    <div className="text-xl font-semibold">LearnSpark</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <AuthForm type="login" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
