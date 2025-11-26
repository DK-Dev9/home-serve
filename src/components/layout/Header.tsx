
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <svg 
            className={`h-8 w-8 ${isScrolled ? "text-primary" : "text-primary"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className={`text-xl font-bold ${isScrolled ? "text-gray-900" : "text-gray-900"}`}>
            HomeServe
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/" label="Home" isScrolled={isScrolled} />
          <NavLink href="/services" label="Services" isScrolled={isScrolled} />
          <NavLink href="/providers" label="Providers" isScrolled={isScrolled} />
          <NavLink href="/shop" label="Shop" isScrolled={isScrolled} />
          <NavLink href="/about" label="About" isScrolled={isScrolled} />
          <NavLink href="/contact" label="Contact" isScrolled={isScrolled} />
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Link to="/shop/cart" className="relative">
                <ShoppingBag className="h-5 w-5 text-gray-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
              <Button onClick={() => navigate("/dashboard")}>
                <User className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
            </div>
          ) : (
            <>
              <Link to="/shop/cart" className="relative mr-2">
                <ShoppingBag className="h-5 w-5 text-gray-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
              <Button variant="ghost" onClick={() => navigate("/auth/signin")}>
                Sign In
              </Button>
              <Button onClick={() => navigate("/auth/signup")}>
                Sign Up
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-5 border-t border-gray-100">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink href="/" label="Home" onClick={closeMobileMenu} />
            <MobileNavLink href="/services" label="Services" onClick={closeMobileMenu} />
            <MobileNavLink href="/providers" label="Providers" onClick={closeMobileMenu} />
            <MobileNavLink href="/shop" label="Shop" onClick={closeMobileMenu} />
            <MobileNavLink href="/about" label="About" onClick={closeMobileMenu} />
            <MobileNavLink href="/contact" label="Contact" onClick={closeMobileMenu} />
            
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <Link 
                to="/shop/cart" 
                className="flex items-center gap-2 text-gray-700"
                onClick={closeMobileMenu}
              >
                <ShoppingBag className="h-5 w-5" />
                Cart
                {totalItems > 0 && (
                  <span className="bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center ml-auto">
                    {totalItems}
                  </span>
                )}
              </Link>
              
              {isAuthenticated ? (
                <Button className="w-full" onClick={() => {
                  navigate("/dashboard");
                  closeMobileMenu();
                }}>
                  <User className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => {
                      navigate("/auth/signin");
                      closeMobileMenu();
                    }}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="w-full" 
                    onClick={() => {
                      navigate("/auth/signup");
                      closeMobileMenu();
                    }}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

// Desktop Navigation Link
const NavLink = ({ href, label, isScrolled }: { href: string; label: string; isScrolled: boolean }) => (
  <Link
    to={href}
    className={`text-sm font-medium transition-colors hover:text-primary ${
      isScrolled ? "text-gray-700" : "text-gray-800"
    }`}
  >
    {label}
  </Link>
);

// Mobile Navigation Link
const MobileNavLink = ({ href, label, onClick }: { href: string; label: string; onClick: () => void }) => (
  <Link
    to={href}
    className="text-gray-700 font-medium hover:text-primary transition-colors"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Header;
