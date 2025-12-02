
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log("Hero component mounted");
    // Trigger animation after mount
    const timer = setTimeout(() => {
        console.log("Setting isVisible to true");
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-blue-100 opacity-60 blur-3xl"></div>
        <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-blue-200 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-blue-100 opacity-60 blur-3xl"></div>
      </div>

      <div className="container relative z-10 pt-20 pb-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-primary bg-blue-50 rounded-full animate-fade-down">
              Home Services Made Simple
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Find Trusted Home Service 
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"> Providers</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg mb-8">
              Connect with verified professionals for cleaning, repairs, installations, and more. Quality service guaranteed.
            </p>

            {/* Search Form */}
            <div className="bg-white rounded-lg shadow-lg p-2 flex max-w-lg">
              <div className="flex-1">
                <select className="w-full h-full appearance-none bg-transparent px-4 py-3 outline-none text-gray-700 border-r">
                  <option>Select Service</option>
                  <option>Cleaning</option>
                  <option>Repairs</option>
                  <option>Plumbing</option>
                  <option>Electrical</option>
                  <option>Installations</option>
                </select>
              </div>
              <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="Enter your location" 
                  className="w-full h-full px-4 py-3 outline-none text-gray-700 bg-transparent"
                />
              </div>
              <Button className="px-6" size="lg">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <span className="font-medium">Popular:</span>
              <PopularTag>Cleaning</PopularTag>
              <PopularTag>Plumbing</PopularTag>
              <PopularTag>Electrical</PopularTag>
              <PopularTag>AC Repair</PopularTag>
            </div>
          </div>

          <div 
            className={`relative transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-400 rounded-2xl opacity-20 blur-lg transform -rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000" 
                  alt="Professional home service" 
                  className="w-full h-96 object-cover"
                />
                
                {/* Rating card */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg animate-scale-in">
                  <div className="flex items-center space-x-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-gray-800">4.9 out of 5</p>
                  <p className="text-xs text-gray-500">Based on 2,000+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PopularTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium cursor-pointer hover:bg-blue-100 transition-colors">
      {children}
    </span>
  );
};

export default Hero;
