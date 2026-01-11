import { Facebook, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-school-blue to-school-green p-2 rounded-lg">
                <span className="text-white font-bold text-lg">BJP</span>
              </div>
              <h3 className="font-display font-bold text-white text-lg">
                Bihar Jyotipunj Pathshala
              </h3>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Quality education from Pre-School to Class 8. Building bright futures 
              with strong values, discipline, and academic excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:info@biharjyotipunjpathshala.com" className="hover:text-white transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('classes')}
                  className="hover:text-white transition-colors"
                >
                  Classes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-choose')}
                  className="hover:text-white transition-colors"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('admission')}
                  className="hover:text-white transition-colors"
                >
                  Admissions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="tel:+917488649507" className="hover:text-white transition-colors">+91 74886 49507</a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>info@biharjyotipunjpathshala.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>High School Road, Jadopur,<br />Gopalganj, Bihar</span>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h4 className="font-semibold text-white mb-4">School Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <div className="font-medium">Monday - Friday</div>
                <div className="text-gray-400">8:00 AM - 3:00 PM</div>
              </li>
              <li>
                <div className="font-medium">Saturday</div>
                <div className="text-gray-400">8:00 AM - 12:00 PM</div>
              </li>
              <li>
                <div className="font-medium">Sunday</div>
                <div className="text-gray-400">Closed</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} Bihar Jyotipunj Pathshala. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for quality education</span>
            </div>
            <button
              onClick={scrollToTop}
              className="text-sm hover:text-white transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
