import { Link } from 'react-router-dom';
import { FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <span className="text-2xl font-bold text-primary-600">EduPro</span>
            <p className="text-gray-500 text-sm">Learn from the best instructors anytime, anywhere.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-600">
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600">
                <FiInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600">
                <FiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Courses</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/courses" className="text-gray-500 hover:text-primary-600">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/courses?category=programming" className="text-gray-500 hover:text-primary-600">
                  Programming
                </Link>
              </li>
              <li>
                <Link to="/courses?category=design" className="text-gray-500 hover:text-primary-600">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/courses?category=marketing" className="text-gray-500 hover:text-primary-600">
                  Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-500 hover:text-primary-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-primary-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-500 hover:text-primary-600">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-500 hover:text-primary-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-500 hover:text-primary-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} EduPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;