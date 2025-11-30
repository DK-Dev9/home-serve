
import React, { createContext, useContext, useState, useEffect } from "react";

// User type definition
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "user" | "provider" | "admin";
}

// Auth context type
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string, userType?: "user" | "provider") => Promise<void>;
  register: (name: string, email: string, password: string, userType: "user" | "provider") => Promise<void>;
  logout: () => void;
}

// Default auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for development
const MOCK_USER: User = {
  id: "user-123",
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  role: "user",
};

const MOCK_PROVIDER: User = {
  id: "provider-456",
  name: "Mike Smith",
  email: "mike@example.com",
  avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  role: "provider",
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, userType: "user" | "provider" = "user") => {
    try {
      setIsLoading(true);
      // In a real app, this would be an API call
      // For now, we're using mock data
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      if (userType === "user" && email === "demo@example.com" && password === "password") {
        setUser(MOCK_USER);
        localStorage.setItem("user", JSON.stringify(MOCK_USER));
        return;
      } else if (userType === "provider" && email === "provider@example.com" && password === "password") {
        setUser(MOCK_PROVIDER);
        localStorage.setItem("user", JSON.stringify(MOCK_PROVIDER));
        return;
      }
      
      throw new Error("Invalid credentials");
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string, userType: "user" | "provider") => {
    try {
      setIsLoading(true);
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      const newUser: User = {
        id: `${userType}-${Date.now()}`,
        name,
        email,
        role: userType,
      };
      
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isLoading, 
        isAuthenticated: !!user,
        login, 
        register, 
        logout 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
