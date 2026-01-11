import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-school-blue to-school-green p-2 rounded-lg">
              <span className="text-white font-bold text-xl">BJP</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-school-blue">
                Bihar Jyotipunj Pathshala
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block">
                Quality Education • Strong Values
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-school-blue transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('principal')}
              className="text-gray-700 hover:text-school-blue transition-colors font-medium"
            >
              Principal
            </button>
            <button
              onClick={() => scrollToSection('classes')}
              className="text-gray-700 hover:text-school-blue transition-colors font-medium"
            >
              Classes
            </button>
            <button
              onClick={() => scrollToSection('why-choose')}
              className="text-gray-700 hover:text-school-blue transition-colors font-medium"
            >
              Why Us
            </button>
            <button
              onClick={() => {
                const faq = document.getElementById('faq')
                if (faq) faq.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-gray-700 hover:text-school-blue transition-colors font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('admission')}
              className="bg-school-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Admissions
            </button>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+91 74886 49507</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 animate-slide-down">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('principal')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Principal
            </button>
            <button
              onClick={() => scrollToSection('classes')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Classes
            </button>
            <button
              onClick={() => scrollToSection('why-choose')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => {
                const faq = document.getElementById('faq')
                if (faq) {
                  faq.scrollIntoView({ behavior: 'smooth' })
                  setIsMenuOpen(false)
                }
              }}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('admission')}
              className="block w-full text-left px-4 py-2 bg-school-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Admissions
            </button>
            <div className="px-4 py-2 space-y-2 border-t pt-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+91 74886 49507</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@biharjyotipunjpathshala.com</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
