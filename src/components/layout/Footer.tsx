
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              HomeServe
            </h3>
            <p className="text-gray-600 max-w-xs">
              Connecting homeowners with trusted service providers for all your home service needs.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Services</h4>
            <ul className="space-y-3">
              <FooterLink href="/services/cleaning">Cleaning</FooterLink>
              <FooterLink href="/services/repairs">Repairs</FooterLink>
              <FooterLink href="/services/installations">Installations</FooterLink>
              <FooterLink href="/services/plumbing">Plumbing</FooterLink>
              <FooterLink href="/services/electrical">Electrical</FooterLink>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Company</h4>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/partner">Become a Partner</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Support</h4>
            <ul className="space-y-3">
              <FooterLink href="/help">Help Center</FooterLink>
              <FooterLink href="/safety">Safety Center</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} HomeServe. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <a href="/terms" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                Terms
              </a>
              <a href="/privacy" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                Privacy
              </a>
              <a href="/cookies" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <a
      href="#"
      className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <a
        href={href}
        className="text-gray-600 hover:text-primary transition-colors"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;
