
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";

interface AuthFormProps {
  type: "login" | "signup";
}

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const signupSchema = loginSchema.extend({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const AuthForm = ({ type }: AuthFormProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const schema = type === "login" ? loginSchema : signupSchema;
  type FormData = z.infer<typeof schema>;
  
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      ...(type === "signup" && { name: "", confirmPassword: "" }),
    },
  });

  const onSubmit = (data: FormData) => {
    // In a real app, we would handle authentication here
    console.log("Form data:", data);
    
    // Simulate authentication
    setTimeout(() => {
      toast({
        title: type === "login" ? "Login successful" : "Account created successfully",
        description: type === "login" 
          ? "Welcome back!" 
          : "Your account has been created. You can now log in.",
      });
      
      if (type === "login") {
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm border">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">
          {type === "login" ? "Welcome back" : "Create your account"}
        </h2>
        <p className="text-gray-500 mt-2">
          {type === "login" 
            ? "Enter your credentials to access your account" 
            : "Fill in the form below to create your account"}
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {type === "signup" && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="name@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {type === "signup" && (
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          
          <Button type="submit" className="w-full bg-learnspark-primary hover:bg-learnspark-primary/90">
            {type === "login" ? "Log in" : "Create account"}
          </Button>
        </form>
      </Form>
      
      <div className="text-center mt-6">
        <p className="text-sm text-gray-500">
          {type === "login" 
            ? "Don't have an account? " 
            : "Already have an account? "}
          <Link 
            to={type === "login" ? "/signup" : "/login"} 
            className="text-learnspark-primary font-medium hover:underline"
          >
            {type === "login" ? "Sign up" : "Log in"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
